"use client";
import { useState, useRef } from "react";
import Card from "./Card";
import Controller from "./Controller";

const typeOptions = [
  { value: "all", name: "All", selected: true },
  { value: "noun", name: "Noun" },
  { value: "verb", name: "Verb" },
  { value: "adj", name: "Adjective" },
  { value: "adv", name: "Adverb" },
  { value: "prep", name: "Preposition" },
  { value: "phv", name: "Phrasal Verb" },
  { value: "idiom", name: "Idiom" },
];
const levelOptions = [
  { value: "all", name: "All", selected: true },
  { value: "new", name: "New" },
  { value: "easy", name: "Easy" },
  { value: "good", name: "Good" },
  { value: "hard", name: "Hard" },
];
const sortOptions = [
  { value: "date", name: "Date", selected: true },
  { value: "word", name: "Word" },
];
const dirSortOptions = [
  { value: "asc", name: "Ascending", selected: true },
  { value: "desc", name: "Descending" },
];

export default function FlashCard({ words }: { words: any }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setFlip] = useState<boolean>(false);
  const end = words.length;

  const cardRef = useRef<HTMLDivElement>(null);

  const nextCard = () => {
    if (cardRef.current && index !== end - 1) {
      setFlip(false);
      setIndex((prevIndex) => prevIndex + 1);
      cardRef.current.classList.add("flash-next-card-animation"); // Add the animation class

      const timeout = setTimeout(() => {
        cardRef.current?.classList.remove("flash-next-card-animation"); // Remove the animation class after the desired duration
      }, 200); // Duration in milliseconds (1 second)
    }
  };
  const prevCard = () => {
    if (cardRef.current && index !== 0) {
      setFlip(false);
      setIndex((prevIndex) => prevIndex - 1);
      cardRef.current.classList.add("flash-prev-card-animation"); // Add the animation class

      const timeout = setTimeout(() => {
        cardRef.current?.classList.remove("flash-prev-card-animation"); // Remove the animation class after the desired duration
      }, 200); // Duration in milliseconds (1 second)
    }
  };

  return (
    <>
      <h2 className="text-center text-primary mb-4">
        🔥 Strength your memory with Flach Cards 🔥
      </h2>
      {words && words.length > 0 ? (
        <div
          className="w-full md:w-1/2  overflow-hidden order-1 md:order-2 mx-auto"
          style={{ perspective: "1000px" }}
        >
          {/* Filter Bar */}
          <div className="flex mb-4 w-full justify-between flex-wrap">
            <FilterOptions {...{ label: "Type", options: typeOptions }} />
            <FilterOptions {...{ label: "Level", options: levelOptions }} />
            <FilterOptions {...{ label: "Sort", options: sortOptions }} />
            <FilterOptions {...{ label: "Dir", options: dirSortOptions }} />
          </div>
          {/* The Flach card */}
          <Card {...{ words, index, setFlip, isFlipped, cardRef }} />
          {/* Control */}
          <Controller {...{ end, index, prevCard, nextCard }} />
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}

type option = { value: string; name: string; selected?: boolean };
interface IFilterOptions {
  label: string;
  options: option[];
}

function FilterOptions({ label, options }: IFilterOptions) {
  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium min-w-[100px] text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((op) => (
          <option key={op.value} selected={op.selected} value={op.value}>
            {op.name}
          </option>
        ))}
      </select>
    </div>
  );
}
