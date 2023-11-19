"use client";
import React, { createContext, useContext, useState } from "react";
import AppBar from "../components/AppBar";

interface ILayoutProvider {
  openTheDropDown: () => void;
  colseTheDropDown: () => void;
  toggleTheDropDown: () => void;
  openDropDown: boolean;
}
export const LayoutContext = createContext<ILayoutProvider>({
  openTheDropDown: () => {},
  colseTheDropDown: () => {},
  toggleTheDropDown: () => {},
  openDropDown: false,
});

interface ThemeContextProps {
  children: JSX.Element | JSX.Element[];
}

const LayoutProvider = ({ children }: ThemeContextProps) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const openTheDropDown = () => setOpenDropDown(true);
  const colseTheDropDown = () => setOpenDropDown(false);
  const toggleTheDropDown = () => setOpenDropDown((prevState) => !prevState);

  const value: ILayoutProvider = {
    openTheDropDown,
    colseTheDropDown,
    toggleTheDropDown,
    openDropDown,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useLayoutProvider = () => useContext(LayoutContext);

function Main({ children }: { children: JSX.Element | JSX.Element[] }) {
  const { colseTheDropDown } = useLayoutProvider();
  return (
    <main onClick={colseTheDropDown} className="container mx-auto pt-10">
      {children}
    </main>
  );
}

LayoutProvider.AppBar = AppBar;
LayoutProvider.Main = Main;

export default LayoutProvider;
