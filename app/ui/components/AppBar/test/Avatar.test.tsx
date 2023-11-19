import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Avatar from "../Avatar";
import LayoutProvider from "../../../Layout";
import DropDown from "../DropDown";
import { act } from "react-dom/test-utils";

test("Avatar and DropDown interaction", () => {
  render(
    <LayoutProvider>
      <>
        <Avatar />
        <DropDown />
      </>
    </LayoutProvider>
  );

  const avatar = screen.getByTestId("avatar-image");
  const dropDown = screen.getByTestId("dropdown-element");

  expect(dropDown).not.toHaveClass("block");

  act(() => userEvent.click(avatar));

  expect(dropDown).toHaveClass("block");
});
