import React, { useState, createContext, useEffect } from "react";
import {
  AUTH_TIMESTAMP,
  AUTH_TOKEN,
  AUTH_USER,
  USER_PROMPT_INPUT_MAP,
} from "@/utils/constants";
import System from "./models/system";
import { useNavigate } from "react-router-dom";
import { safeJsonParse } from "@/utils/request";
import { setAuthNotice } from "@/utils/authErrors";
import { safeRedirectPath } from "@/utils/safeRedirect";
import paths from "@/utils/paths";

export const AuthContext = createContext(null);
export function AuthProvider(props) {
  const localUser = localStorage.getItem(AUTH_USER);
  const localAuthToken = localStorage.getItem(AUTH_TOKEN);
  const [store, setStore] = useState({
    user: localUser ? safeJsonParse(localUser, null) : null,
    authToken: localAuthToken ? localAuthToken : null,
  });

  const navigate = useNavigate();

  // Used by Admin > Users to keep the signed-in user in step after editing
  // their own account.
  const [actions] = useState({
    updateUser: (user, authToken = "") => {
      localStorage.setItem(AUTH_USER, JSON.stringify(user));
      localStorage.setItem(AUTH_TOKEN, authToken);
      setStore({ user, authToken });
    },
  });

  /*
   * On initial mount and whenever the token changes, fetch a new user object
   * If the user is suspended, (success === false and data === null) logout the user and redirect to the login page
   * If success is true and data is not null, update the user object in the store (multi-user mode only)
   * If success is true and data is null, do nothing (single-user mode only) with or without password protection
   */
  useEffect(() => {
    async function refreshUser() {
      const {
        success,
        user: refreshedUser,
        message,
        unreachable,
      } = await System.refreshUser();
      if (success && refreshedUser === null) return;
      // A network blip or a server error says nothing about the session.
      if (!success && unreachable) return;

      if (!success) {
        // Tell the login page why ("Session expired or invalid.", "User is
        // suspended.", or a rejected token). No reason when the server could
        // not be reached: "session expired" would not be true.
        const reason = String(message || "");
        setAuthNotice(
          /suspended/i.test(reason) ? "suspended" : "session-expired"
        );
        localStorage.removeItem(AUTH_USER);
        localStorage.removeItem(AUTH_TOKEN);
        localStorage.removeItem(AUTH_TIMESTAMP);
        localStorage.removeItem(USER_PROMPT_INPUT_MAP);
        setStore({ user: null, authToken: null });
        const { pathname, search } = window.location;
        navigate(paths.login(false, safeRedirectPath(`${pathname}${search}`)), {
          replace: true,
        });
        return;
      }

      localStorage.setItem(AUTH_USER, JSON.stringify(refreshedUser));
      setStore((prev) => ({
        ...prev,
        user: refreshedUser,
      }));
    }
    if (store.authToken) refreshUser();
  }, [store.authToken]);

  return (
    <AuthContext.Provider value={{ store, actions }}>
      {props.children}
    </AuthContext.Provider>
  );
}
