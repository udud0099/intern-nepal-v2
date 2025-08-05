import RecentActivaty from "./RecentActivaty";
import UserProfile from "./UserProfile";

export default function SideNav() {
  return (
    <>
      <div className="col-span-1  mr-4">
        <UserProfile />
        <RecentActivaty />
      </div>
    </>
  );
}
