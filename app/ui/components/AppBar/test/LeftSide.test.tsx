import { render, screen } from "@testing-library/react";
import LeftSide, { Logo } from "../LeftSide";

describe("LeftSide", () => {
  test("renders LeftSide component correctly", () => {
    render(<LeftSide />);

    const heading = screen.getByRole("heading");
    const buttons = screen.getAllByRole("button");

    expect(heading).toHaveTextContent("Rife App");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("+ Add");
    expect(buttons[1]).toHaveTextContent("Study");
  });

  test("renders Logo component correctly", () => {
    render(<Logo />);

    const heading = screen.getByRole("heading");
    const paragraph = screen.getByRole("paragraph");

    expect(heading).toHaveTextContent("Rife App");
    expect(paragraph).toHaveTextContent("Reamber it for ever");
  });
});
