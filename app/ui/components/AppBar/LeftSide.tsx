import Logo from "@/app/ui/components/Logo";
import UserPagesLinks from "./UserPagesLinks";

export default function LeftSide() {
  return (
    <div className="flex items-center">
      <Logo />
      {/* Tow Links */}
      <UserPagesLinks />
    </div>
  );
}
