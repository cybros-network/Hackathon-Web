import { UseCardProps } from "@/types"
import { AIGCCardProps } from "@/types";
import { DM_Mono} from "next/font/google";

export const dm_mono_font = DM_Mono({
    weight: "300",
    subsets: ["latin"],
})

export const demoUseCardsCollection: UseCardProps[] = [
    {
        title: "NFT Renderer Demo (Polygon)",
        summary: "Use accounts on EVM-compatible chains to generate NFT arts with distributed AI compute power on Cybros and mint them on OpenSea.",
        link: "/aigc",
        backgroundColor: "#FF6F2D0F"
    },
    {
        title: "Broadcast Demo (Native)",
        summary: "Dummy social-fi demo to broadcast message to subscribers on Telegram bot.",
        link: "/broadcast",
        backgroundColor: "#BCFF2D0F"
    },

]

export const demoAIGCCardsCollection: AIGCCardProps[] = [
    {
        id: '1',
        status: 'Minted',
        owner: 'owner 1',
        requestHash: 'request hash 1',
    },
    {
        id: '2',
        status: 'Generated',
        owner: 'owner 2',
        requestHash: 'request hash 2',
    },
    {
        id: '3',
        status: 'Pending',
        owner: 'owner 3',
        requestHash: 'request hash 3',
    },
    {
        id: '4',
        status: 'Failed',
        owner: 'owner 4',
        requestHash: 'request hash 4',
    },
    {
        id: '5',
        status: 'Generating',
        owner: 'owner 5',
        requestHash: 'request hash 5',
    }
]