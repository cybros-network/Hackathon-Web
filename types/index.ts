export interface IndexEntranceProps {
    primaryColor: string;
    borderColor: string;
    titleDirection: "col" | "row";
    title: string;
    description: string;
    goLink: string;
    iconURL: string;
    width: number
    addtion?: IndexEntranceAdditionProps
}

export interface IndexEntranceAdditionProps {
    className: string;
    title: string;
    link: string;
}

export interface AIGCCardProps {
    id: string;
    imageUrl?: string;
    status: "Minted" | "Generated" | "Pending" | "Failed" | "Generating";
    meta?: string
    owner: string;
    requestHash: string;
    fancied?: number
}

export interface AIGCStatus {
    height: number
    queueSize: number
    latestJobId: number
}