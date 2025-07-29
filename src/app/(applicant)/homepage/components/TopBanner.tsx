import Image from "next/image";

export default function TopBanner() {
  return (
    <>
      <div className="bg-[#1D4ED8]  lg:rounded-[40px] md:rounded-[30px] rounded-[20px] text-white flex items-center gap-8 ">
        <div className="xl:py-11 lg:py-8 py-6 pl-[42px] flex-[.7]">
          <h1 className="lg:text-[42px] md:text-[32px] text-2xl font-normal ">
            Welcome Back
          </h1>
          <h1 className="lg:text-[42px] md:text-[32px] text-2xl font-semibold md:mt-1 md:mb-4 mb-2">
            Opportunities That Put You Ahead.
          </h1>
          <p className="lg:text-base md:text-sm text-xs font-normal">
            Intern Nepal connects you with real-world experiences that boost
            your skills, confidence, and career potential—helping you stand out
            from the crowd.
          </p>
        </div>
        <Image
          src="/images/Layer_1.png"
          alt="img"
          width={500}
          height={500}
          className=" flex-[.3]
            h-[238px]
            //  w-[310px]
              object-contain"
        />
      </div>
    </>
  );
}
