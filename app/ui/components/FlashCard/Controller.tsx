import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Button from "../Button";

interface IControllerProps {
  end: number;
  index: number;
  prevCard: () => void;
  nextCard: () => void;
}
export default function Controller({
  end,
  index,
  prevCard,
  nextCard,
}: IControllerProps) {
  return (
    <div className="flex justify-center items-center w-full mt-4">
      <Button
        onClick={() => {
          prevCard();
        }}
        className="flex justify-center items-center rounded-full h-8 w-8 border border-primary"
      >
        <BiLeftArrowAlt />
      </Button>
      <div className="mx-2">
        {index + 1} / {end}
      </div>
      <Button
        onClick={() => {
          nextCard();
        }}
        className="flex justify-center items-center rounded-full h-8 w-8 border border-primary"
      >
        <BiRightArrowAlt />
      </Button>
    </div>
  );
}
