import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * One page of a chat history list, with the page kept in `?offset=` so a
 * reload or the back button returns to it.
 *
 * @param {(offset: number) => Promise<{chats?: object[], hasPages?: boolean, totalChats?: number}>} fetchPage
 */
export default function usePagedChats(fetchPage) {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = Math.max(
    0,
    Number.parseInt(searchParams.get("offset"), 10) || 0
  );
  const [state, setState] = useState({
    status: "loading",
    chats: [],
    canNext: false,
    total: 0,
  });
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    setState((prev) => ({ ...prev, status: "loading" }));
    fetchPage(offset).then((res) => {
      if (!active) return;
      // The models return [] (not an object) when the request fails.
      if (!res || !Array.isArray(res.chats)) {
        setState((prev) => ({ ...prev, status: "error", chats: [] }));
        return;
      }
      setState({
        status: "ready",
        chats: res.chats,
        canNext: !!res.hasPages,
        total: Number(res.totalChats) || res.chats.length,
      });
    });
    return () => {
      active = false;
    };
  }, [offset, reloadKey]);

  function setOffset(next) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (next > 0) params.set("offset", String(next));
      else params.delete("offset");
      return params;
    });
  }

  function removeChat(id) {
    setState((prev) => ({
      ...prev,
      chats: prev.chats.filter((chat) => chat.id !== id),
      total: Math.max(0, prev.total - 1),
    }));
  }

  function clearAll() {
    setState((prev) => ({ ...prev, chats: [], total: 0, canNext: false }));
  }

  return {
    ...state,
    offset,
    setOffset,
    retry: () => setReloadKey((key) => key + 1),
    removeChat,
    clearAll,
  };
}
