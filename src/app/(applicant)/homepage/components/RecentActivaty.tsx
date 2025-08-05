import Link from "next/link";

export default function RecentActivaty() {
  return (
    <>
      <div className="BorderBgShadow p-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xs font-medium">
            My Recent Internships Applications
          </h1>
          <Link href="#" className="text-[#475569] text-xs">
            View all
          </Link>
        </div>
      </div>
    </>
  );
}
