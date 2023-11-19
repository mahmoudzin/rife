import { render, screen } from "@testing-library/react";
import MasterWords from "../MasterWords";

describe("MasterWordsComponents", () => {
  test("that Icon doesn't have fill-yellow-500 class when render component with 0 words", () => {
    render(<MasterWords words={0} />);

    const icon = screen.getByRole("img");
    const paragraphs = screen.getAllByRole("paragraph");

    expect(icon).not.toHaveClass("fill-yellow-500");
    expect(paragraphs).toHaveLength(2);
    expect(paragraphs[0]).toHaveTextContent("You have masterd");
    expect(paragraphs[1]).toHaveTextContent("0 Words");
  });
  test("that Icon has fill-yellow-500 class when render component with more than 0 words", () => {
    render(<MasterWords words={100} />);

    const icon = screen.getByRole("img");
    const paragraphs = screen.getAllByRole("paragraph");

    expect(icon).toHaveClass("fill-yellow-500");
    expect(paragraphs[1]).toHaveTextContent("100 Words");
  });
});
