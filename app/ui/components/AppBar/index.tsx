"use client";
import { useLayoutProvider } from "@/app/ui/Layout";
import Logo from "@/app/ui/components/Logo";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import UserPagesLinks from "./UserPagesLinks";
import Avatar from "./Avatar";
import UserActions from "./UserActions";

export default function NavBar() {
  const { colseTheDropDown } = useLayoutProvider();
  return (
    <nav
      onClick={colseTheDropDown}
      className="py-2 px-4 border-b border-gray-100 dark:border-b-gray-700"
    >
      <div className="container mx-auto relative hidden lg:block">
        <LgScreenNavBar />
      </div>
      <div className="container mx-auto relative lg:hidden">
        <SmallScreenNavBar />
      </div>
    </nav>
  );
}

function LgScreenNavBar() {
  return (
    <div className="hidden lg:flex items-center justify-between flex-wrap">
      <LeftSide />
      <SearchBar />
      <RightSide />
      <DropDown />
    </div>
  );
}

function SmallScreenNavBar() {
  return (
    <>
      <div className="text-center mb-6">
        <Logo />
      </div>
      <SearchBar />
      <div className="flex justify-between items-center w-full fixed left-0 bottom-0 py-2 px-4 border-t border-gray-100 dark:border-b-gray-700">
        <UserPagesLinks />
        <Avatar />
        <UserActions />
      </div>
    </>
  );
}
