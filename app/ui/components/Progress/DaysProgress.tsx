import { IoMdCheckmark } from "react-icons/io";
import { useThemeProvider } from "../../theme";

const date = new Date();

export default function DaysProgress({
  weekDays = [
    { name: "Su", isStuded: false },
    { name: "Mo", isStuded: false },
    { name: "Tu", isStuded: false },
    { name: "We", isStuded: true },
    { name: "Th", isStuded: false },
    { name: "Fr", isStuded: false },
    { name: "Sa", isStuded: false },
  ],
}) {
  const { mode } = useThemeProvider();
  return (
    <ul className="list-none w-full flex md:w-auto items-center justify-center ">
      {weekDays.map((day, i) => (
        <li
          key={day.name}
          className="mx-2 first-of-type:ml-0 last-of-type:mr-0 text-center"
        >
          <p className="mb-2 font-[600] text-[12px] sm:text-[1em]">
            {day.name}
          </p>
          <span
            data-testid="daystatus"
            className={`flex items-center justify-center h-[25px] w-[25px] sm:h-[40px] sm:w-[40px] rounded-full ${
              i >= date.getDay() &&
              "border-2 border-blue-600 dark:border-primary"
            } ${day.isStuded ? "bg-primary" : "bg-background-100"}`}
            style={{
              boxShadow:
                i === date.getDay()
                  ? `0 0 0 8px ${mode === "dark" ? "#bcb0e2" : "#d5e1ff"}`
                  : "none",
            }}
          >
            {day.isStuded && (
              <IoMdCheckmark
                role="img"
                className="fill-white text-[2em] font-[700]"
              />
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
