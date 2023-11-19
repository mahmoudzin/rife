import { render, screen } from "@testing-library/react";
import StreakDays from "../StreakDays";

describe("StreakDaysComponents", () => {
  test("The component render when the days is 0", () => {
    render(<StreakDays days={0} />);

    const icon = screen.getByRole("img");
    const paragraphs = screen.getAllByRole("paragraph");

    expect(icon).toHaveClass("fill-yellow-500");
    expect(paragraphs).toHaveLength(2);
    expect(paragraphs[0]).toHaveTextContent("Streak");
    expect(paragraphs[1]).toHaveTextContent("0 days");
  });
  test("The Component rendering when the days more than 0", () => {
    render(<StreakDays days={100} />);

    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs[1]).toHaveTextContent("100 days");
  });
});
