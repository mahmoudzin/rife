"use client";
import { useLayoutProvider } from "../../Layout";

export default function Avatar() {
  const { toggleTheDropDown } = useLayoutProvider();

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleTheDropDown();
  };
  return (
    <div
      data-testid="avatar-image"
      className="cursor-pointer flex"
      onClick={handleToggle}
    >
      <img
        className="w-10 h-10 rounded-full mx-auto"
        src="https://i.pravatar.cc/48?u=933372"
        alt=""
      />
    </div>
  );
}
