import DaysProgress from "./DaysProgress";
import MasterWords from "./MasterWords";
import StreakDays from "./StreakDays.1";

export default function Progress() {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full px-3 py-6 mb-8 border border-gray-100 dark:border-gray-700">
      <MasterWords />
      <StreakDays />
      <DaysProgress />
    </div>
  );
}
