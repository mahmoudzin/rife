"use client";
import { useState, useEffect, useCallback } from "react";
import { FlashCard, Progress } from "@/app/ui/components";
import { getWords, updateTheLevelOfCard } from "@/app/scripts/data";

interface ICard {
  wordID: number;
  word: string;
  type: string;
  definition: string;
  example: string;
  photo: string;
  level: string;
  date: string;
}
type level = "new" | "easy" | "good" | "hard";
const compareDates = (a: any, b: any) => {
  const dateA = a.date;
  const dateB = b.date;
  return dateA - dateB;
};

const priorityOrder = ["new", "easy", "good", "hard"];

const compareStrings = (a: any, b: any) => {
  const indexA = priorityOrder.indexOf(a.level);
  const indexB = priorityOrder.indexOf(b.level);
  return indexA - indexB;
};

export default function Page() {
  const [words, setWords] = useState<ICard[]>([]);
  useEffect(() => {
    setWords(getWords());
  }, []);

  const updateTheLevelofCard = useCallback(
    (cardId: number, level: level) => {
      const newWords: ICard[] = words
        .map((word) => {
          if (word.wordID === cardId) {
            return { ...word, level, date: String(Date.now()) };
          }
          return word;
        })
        .sort(compareDates)
        .sort(compareStrings);
      setWords(newWords);
      updateTheLevelOfCard(cardId, level);
    },
    [words]
  );
  return (
    <>
      <Progress />

      <FlashCard words={words} />
    </>
  );
}
