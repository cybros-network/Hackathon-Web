"use client";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { agicStatusTriger, aigcStatusAtom } from "@/atoms";
import { AIGCCardProps } from "@/types";
import AIGCCard from "./AIGCCard";
import { demoAIGCCardsCollection } from "@/constants";
import { getStatusData } from "@/utils/api";


const AIGCPool = () => {
  const [aigcStatus, setAigcStatus] = useAtom(aigcStatusAtom);
  const [triger] = useAtom(agicStatusTriger);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const data = await getStatusData();
      setAigcStatus({ ...data });
      setIsLoading(false);
    }
    fetchData();
  }, [triger]);

  if (isLoading) {
    return <p> loading </p>;
  }

  return (
    <div className="mt-7 mb-14 flex flex-wrap gap-[30px]">
      {demoAIGCCardsCollection.map((props: AIGCCardProps) => {
        return <AIGCCard key={props.id} {...props} />;
      })}
    </div>
  );
}

export default AIGCPool;