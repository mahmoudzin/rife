"use client";
import { useLayoutProvider } from "@/app/ui/Layout";
import { useThemeProvider } from "@/app/ui/theme";

import { AiFillBank } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdNightlight } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

export default function DropDown() {
  const { mode, toggleMode } = useThemeProvider();
  const { openDropDown } = useLayoutProvider();
  return (
    <div
      data-testid="dropdown-element"
      className={` ${
        openDropDown ? "block" : "hidden"
      } bg-white dark:bg-[#212529] absolute border dark:border-gray-500 right-10 top-[80px] shadow-lg z-10 rounded min-w-[120px]`}
    >
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
                {mode === "dark" ? (
                  <>
                    <BsFillSunFill className="mr-2" /> light Mode
                  </>
                ) : (
                  <>
                    <MdNightlight className="mr-2" /> Dark Mode
                  </>
                )}
              </>
            ),
            func: toggleMode,
          },
          {
            id: 2,
            node: (
              <>
                <IoIosSettings className="mr-2" /> Seetings
              </>
            ),
          },
          {
            id: 3,
            node: (
              <>
                <RiLogoutBoxRLine className="mr-2" /> Logout
              </>
            ),
          },
        ]}
      />
    </div>
  );
}

interface DropDownListProps {
  items: {
    id: number;
    node: React.ReactNode | React.ReactNode[];
    func?: () => void;
  }[];
}

export function DropDownList({ items }: DropDownListProps) {
  return (
    <ul className="list-none cursor-pointer">
      {items.map((item) => (
        <DropDownItem key={item.id} func={item.func}>
          {item.node}
        </DropDownItem>
      ))}
    </ul>
  );
}

export function DropDownItem({
  children,
  func,
}: {
  children: React.ReactNode | React.ReactNode[];
  func?: () => void;
}) {
  return (
    <li
      onClick={func}
      className="py-1 px-2 flex items-center transition ease-in-out delay-150 hover:bg-gray-100 dark:hover:bg-gray-900"
    >
      {children}
    </li>
  );
}
