import { 
  AIGCCardProps,
  IndexEntranceProps,
} from "@/types";

import { DM_Mono } from "next/font/google";

export const GITHUB_URL = "https://github.com/";
export const DC_URL = "https://discord.com/";
export const FAUCET_URL = "/";
export const ON_POLKADOT_URL = "/";

export const dm_mono_font = DM_Mono({
  weight: "300",
  subsets: ["latin"],
});

export const entranceConfig: { main: IndexEntranceProps, subs: IndexEntranceProps[] } = {
  main: {
    primaryColor: "#A43737",
    borderColor: "shadow-entrance-aigc",
    titleDirection: "row",
    title: "AI NFT Render Flow Demo",
    description: "Generate ERC-721 NFTs with distributed AI compute power and share on both Web2 and Web3 social media.",
    goLink: "/aigc",
    iconURL: "/entran-aigc.svg",
    width: 646
  },
  subs: [
    {
      primaryColor: "#3C3C3C",
      borderColor: "shadow-entrance-github",
      titleDirection: "col",
      title: "Github",
      description: "Check us out on Github.",
      goLink: GITHUB_URL,
      iconURL: "/entran-github.svg",
      width: 314
    },
    {
      primaryColor: "#374FA6",
      borderColor: "shadow-entrance-discord",
      titleDirection: "col",
      title: "Discord",
      description: "Join our Discord server!",
      goLink: DC_URL,
      iconURL: "/entran-discord.svg",
      width: 314
    },
    {
      primaryColor: "#A45E37",
      borderColor: "shadow-entrance-testnet",
      titleDirection: "col",
      title: "Cybros on Polkadot.js",
      description: "Play directly with Cybros testnet.",
      goLink: GITHUB_URL,
      iconURL: "/entran-testnet.svg",
      width: 314,
      addtion: {
        className: "flex flex-row justify-center items-center rounded-15 w-[101px] shadow-cb shadow-[#A45E37] bg-white text-[16px] font-medium leading-21 text-entrance-testnet",
        title: "Faucet",
        link: FAUCET_URL
      }
    }
  ]
};

export const demoAIGCCardsCollection: AIGCCardProps[] = [
  {
    id: "1",
    status: "Minted",
    owner: "owner 1",
    requestHash: "request hash 1",
    fancied: 1,
  },
  {
    id: "2",
    status: "Generated",
    owner: "owner 2",
    requestHash: "request hash 2",
    fancied: 114514,
  },
  {
    id: "3",
    status: "Pending",
    owner: "owner 3",
    requestHash: "request hash 3",
  },
  {
    id: "4",
    status: "Failed",
    owner: "owner 4",
    requestHash: "request hash 4",
  },
  {
    id: "5",
    status: "Generating",
    owner: "owner 5",
    requestHash: "request hash 5",
  },
];
