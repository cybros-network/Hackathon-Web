"use client";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { PROJECT_WAGMI_CONFIG } from "./WagmiConfig";

export function APPProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return <WagmiConfig config={PROJECT_WAGMI_CONFIG}>{mounted && children}</WagmiConfig>;
}

