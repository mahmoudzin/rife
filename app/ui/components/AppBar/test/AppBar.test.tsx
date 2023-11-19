import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppBar from "../";
import DropDown from "../DropDown";
import LayoutProvider from "../../../Layout";
import Avatar from "../Avatar";
import { act } from "react-dom/test-utils";

describe("AppBarTest", () => {
  test("Render AppBar Component", () => {
    render(<AppBar />);
    //LeftSide
    ///Logo
    const heading = screen.getByRole("heading");
    const paragraph = screen.getByRole("paragraph");

    expect(heading).toHaveTextContent("Rife App");
    expect(paragraph).toHaveTextContent("Reamber it for ever");

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("+ Add");
    expect(buttons[1]).toHaveTextContent("Study");

    //Avatar and Dropdwon
    const avatar = screen.getByTestId("avatar-image");
    const dropDown = screen.getByTestId("dropdown-element");
    const unorderlist = screen.queryByRole("list");
    const listitems = screen.queryAllByRole("listitem");
    expect(unorderlist).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(dropDown).toBeInTheDocument();
    expect(listitems).toHaveLength(4);
  });

  test("Render AppBarnd with Provider Component", () => {
    render(
      <LayoutProvider>
        <>
          <AppBar />
        </>
      </LayoutProvider>
    );

    const avatar = screen.getByTestId("avatar-image");
    const dropDown = screen.getByTestId("dropdown-element");
    const nav = screen.getByRole("navigation");

    expect(dropDown).not.toHaveClass("block");

    act(() => userEvent.click(avatar));

    expect(dropDown).toHaveClass("block");

    act(() => userEvent.click(nav));

    expect(dropDown).not.toHaveClass("block");
  });
});
