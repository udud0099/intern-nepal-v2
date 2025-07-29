"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FiEdit2 } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Home", url: "/homepage" },
  { label: "Create a Blogs", url: "/homepage/CreateaBlogs" },
  { label: "My Application", url: "/homepage/MyApplication" },
  { label: "Applied Training", url: "/homepage/AppliedTraining" },
  { label: "My Profiles", url: "/homepage/MyProfiles" },
  { label: "Setting", url: "/homepage/Setting" },
];

type NavItem = {
  label: string;
  url: string;
};

export default function UserProfile() {
  const pathname = usePathname();

  const getLinkClasses = (url: string) => {
    const isActive = pathname === url;
    return `
      whitespace-nowrap px-2 py-1 md:px-4 md:py-2 text-sm  border border-transparent flex gap-2  flex-nowrap  items-center  
      ${isActive ? "bg-[#F8FAFC] border border-[#E2E8F0]! rounded-md" : ""}
      hover:border hover:border-[#E2E8F0] hover:rounded-md hover:bg-[#F8FAFC] 
    `;
  };
  return (
    <>
      <div className="BorderBgShadow p-4">
        <div className="grid grid-cols-3 gap-5 items-center mb-4">
          <Image
            src="/images/user.svg"
            alt="user"
            width={300}
            height={300}
            className="col-span-1"
          />
          <div className="col-span-2">
            <h1 className="mainh1">Rajesh Maharjan</h1>
            <p className="text-sm my-1">rajesh@gmail.com</p>
            <div className="BadgeBox">
              <Badge variant="destructive">Candidates</Badge>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xs font-medium">Open for </h1>
          <FiEdit2 className="w-3 cursor-pointer" />
        </div>
        <div className="BadgeBox">
          <Badge variant="secondary">Internship</Badge>
          <Badge variant="secondary">UIUX design</Badge>
          <Badge variant="secondary">Graphic Design</Badge>
        </div>

        <div>
          <nav className="w-full pt-3  flex justify-between      ">
            {/* Left: Logo + Navigation */}
            <div className="flex    w-full  gap-0.5  md:h-auto h-[40px] sm:h-[50px]   overflow-x-auto overflow-y-hidden no-scrollbar flex-row md:flex-col">
              <ul>
                {navItems.map((item: NavItem, index: number) => (
                  <li key={index}>
                    <Link href={item.url} className={getLinkClasses(item.url)}>
                      {/* <RiBox1Line className="min-w-4 w-4 h-4" /> */}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <hr />

        <br />
        <br />
        <br />
        <h1>user profile</h1>
        <h1>user profile</h1>
        <h1>user profile</h1>
        <h1>user profile</h1>
      </div>
    </>
  );
}
