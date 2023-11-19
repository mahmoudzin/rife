"use client";
import { useLayoutProvider } from "@/app/ui/Layout";
import DropDown from "./DropDown";
import Avatar from "./Avatar";
import LeftSide from "./LeftSide";

export default function NavBar() {
  const { colseTheDropDown } = useLayoutProvider();
  return (
    <nav
      onClick={colseTheDropDown}
      className="w-full relative flex items-center justify-between py-2 px-4 border-b border-gray-100 dark:border-b-gray-700"
    >
      <LeftSide />
      <Avatar />
      <DropDown />
    </nav>
  );
}
