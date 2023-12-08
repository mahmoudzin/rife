import Avatar from "./Avatar";
import UserActions from "./UserActions";

export default function RightSide() {
  return (
    <div className="flex">
      <UserActions />
      <Avatar />
    </div>
  );
}
