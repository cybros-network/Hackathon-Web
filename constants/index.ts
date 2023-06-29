import { AIGCCardProps } from "@/types";
import exp from "constants";
import { DM_Mono} from "next/font/google";

export const GITHUB_URL = "https://github.com/"
export const DC_URL = "https://discord.com/"
export const FAUCET_URL = "/";
export const ON_POLKADOT_URL = "/";

export const dm_mono_font = DM_Mono({
    weight: "300",
    subsets: ["latin"],
})

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