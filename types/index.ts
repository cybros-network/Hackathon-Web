import { MouseEventHandler } from "react";

export interface IndexEntranceType {
    type: 'aigc' | 'github' | 'discord' | 'testnet'
}

export interface AIGCCardProps {
    id: string;
    imageUrl?: string;
    status: 'Minted' | 'Generated' | 'Pending' | 'Failed' | 'Generating';
    meta?: any
    owner: string;
    requestHash: string;
}