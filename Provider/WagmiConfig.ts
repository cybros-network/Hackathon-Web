import { configureChains, createConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [...(process.env.NODE_ENV === "development" ? [polygonMumbai] : [polygon])],
  [
    jsonRpcProvider({
      rpc: (chain) => { return { http: chain.rpcUrls.default.http[0] };}
    }),
    publicProvider(),
  ],
);

export const PROJECT_WAGMI_CONFIG = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
});
