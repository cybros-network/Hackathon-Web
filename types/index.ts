import { MouseEventHandler } from "react";

export interface UseCardProps {
    title: string;
    summary: string;
    link?: string;
    backgroundColor?: string;
}

export interface AIGCCardProps {
    id: string;
    imageUrl?: string;
    status: 'Minted' | 'Generated' | 'Pending' | 'Failed' | 'Generating';
    meta?: any
    owner: string;
    requestHash: string;
}