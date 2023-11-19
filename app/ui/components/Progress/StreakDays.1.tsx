import { MdElectricBolt } from "react-icons/md";

export default function StreakDays({ days = 0 }) {
  return (
    <div className="flex w-full md:w-auto items-center justify-center md:justify-normal mb-6 md:mb-0">
      <MdElectricBolt
        role="img"
        className="text-[2em] sm:text-[3em] mr-4 fill-yellow-500 dark:fill-[gold]"
      />
      <div>
        <p role="prograph" className="-[12px] sm:text-[14] font-[600]">
          Streak
        </p>
        <p
          role="prograph"
          className="text-[1.2em] sm:text-[2em] font-bold text-primary"
        >
          {days} days
        </p>
      </div>
    </div>
  );
}
