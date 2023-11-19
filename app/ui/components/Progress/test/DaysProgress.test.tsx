import { render, screen } from "@testing-library/react";
import DaysProgress from "../DaysProgress";
const date = new Date();
const weekDays = [
  { name: "Su", isStuded: false },
  { name: "Mo", isStuded: false },
  { name: "Tu", isStuded: false },
  { name: "We", isStuded: true },
  { name: "Th", isStuded: false },
  { name: "Fr", isStuded: false },
  { name: "Sa", isStuded: false },
];
describe("DaysProgressComponents", () => {
  test("The component render", () => {
    render(<DaysProgress {...{ weekDays }} />);
    const listitems = screen.getAllByRole("listitem");
    const dayStatus = screen.getAllByTestId("daystatus");

    expect(listitems.length).toBe(7);
    expect(dayStatus.length).toBe(7);
    expect(dayStatus[3]).toHaveClass("bg-primary");
  });
});
