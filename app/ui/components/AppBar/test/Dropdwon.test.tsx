import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDowen, { DropDownList, DropDownItem } from "../DropDown";
import { AiFillBank } from "react-icons/ai";

describe("DropDowenTest", () => {
  test("Render DropDwon Parent Component", () => {
    render(<DropDowen />);
    //have one ul
    const unorderlist = screen.queryByRole("list");
    //have four li
    const listitems = screen.queryAllByRole("listitem");

    expect(unorderlist).toBeInTheDocument();
    expect(listitems).toHaveLength(4);
  });
  test("renders DropDownList component correctly", () => {
    render(
      <DropDownList
        items={[
          {
            id: 0,
            node: (
              <>
                <AiFillBank className="mr-2" /> Words
              </>
            ),
          },
          {
            id: 1,
            node: (
              <>
                <AiFillBank className="mr-2" /> Settings
              </>
            ),
          },
        ]}
      />
    );

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent("Words");
    expect(listItems[1]).toHaveTextContent("Settings");
  });
  test("renders DeopDownItem component correctly", async () => {
    const func = jest.fn();
    render(
      <DropDownItem func={func}>
        <AiFillBank className="mr-2" /> Settings
      </DropDownItem>
    );

    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveTextContent("Settings");
    await userEvent.click(listItem);
    expect(func).toHaveBeenCalled();
  });
});
