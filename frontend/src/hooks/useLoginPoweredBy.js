import { useEffect, useState } from "react";
import System from "@/models/system";

export default function useLoginPoweredBy() {
  const [loginPoweredBy, setLoginPoweredBy] = useState("");

  useEffect(() => {
    async function fetchLoginPoweredBy() {
      const { loginPoweredBy: customLoginPoweredBy } =
        await System.fetchLoginPoweredBy();
      setLoginPoweredBy(customLoginPoweredBy || "");
    }

    fetchLoginPoweredBy();
  }, []);

  return { loginPoweredBy };
}
