import FaceOfCard from "./FaceOfCard";

interface ICardProps {
  words: any;
  index: number;
  setFlip: (flag: boolean | ((prevState: boolean) => boolean)) => void;
  isFlipped: boolean;
  cardRef: React.RefObject<HTMLDivElement>;
}
export default function Card({
  words,
  index,
  setFlip,
  isFlipped,
  cardRef,
}: ICardProps) {
  return (
    <div
      onClick={() => {
        setFlip((prevState: boolean) => !prevState);
      }}
      ref={cardRef}
      className={` flip-card ${
        isFlipped ? "flipped" : ""
      } bg-background-500 min-h-[350px] px-2 py-3  cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded-md`}
    >
      <div className="flip-card-inner">
        <FaceOfCard {...{ word: words[index], face: "front" }}>
          <p className="font-medium">{words[index].definition}</p>
        </FaceOfCard>
        <FaceOfCard {...{ word: words[index], face: "back" }}>
          <p className="text-lg font-medium mb-4">{words[index].word}</p>
          <p>Ex: {words[index].example}</p>
        </FaceOfCard>
      </div>
    </div>
  );
}
