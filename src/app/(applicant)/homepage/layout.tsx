import SideNav from "./components/SideNav";
import TopBanner from "./components/TopBanner";

export default function SpecialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container my-8 ">
        <TopBanner />
        <div className="grid grid-cols-4 gap-2  ">
          <SideNav />
          <div className="col-span-3">{children}</div>
        </div>
      </div>
      {/* <section className=" flex gap-8   topRoundBorder     flex-col md:flex-row  ">
      <div className="  md:w-[250px] lg:w-[400px] block ">
        <SideNav />
      </div>
      <div className="    heightAdg w-full flex justify-center    py-4 md:py-6 xl:py-8">
        <div className=" h-full   w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto max-w-[920px]">
          {children}
        </div>
      </div>
    </section> */}
    </>
  );
}
