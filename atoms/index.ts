import { atom } from "jotai";
import { AIGCStatus } from "@/types";

export const aigcStatusAtom = atom<AIGCStatus | null>(null);
export const agicStatusTriger = atom(0);