import { GiStrong, GiStrongMan } from "react-icons/gi";

export default function MasterWords({ words = 100 }) {
  return (
    <div
      data-testid="master-words"
      className="flex items-center w-full md:w-auto justify-center mb-6 md:mb-0"
    >
      {words > 0 ? (
        <GiStrongMan
          role="img"
          className="text-[2em] sm:text-[3em] mr-4 fill-yellow-500 dark:fill-[gold]"
        />
      ) : (
        <GiStrong role="img" className="text-[2em] sm:text-[3em] mr-4" />
      )}

      <div>
        <p role="paragraph" className="text-[12px] sm:text-[14] font-[600]">
          You have masterd
        </p>
        <p
          role="paragraph"
          className="text-[1.2em] sm:text-[2em] font-bold text-primary"
        >
          {words} Words
        </p>
      </div>
    </div>
  );
}
