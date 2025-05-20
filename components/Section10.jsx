import Image from "next/image";
import React from "react";

const Section10 = () => {
  return (
    <>
      <div className="hidden w-full h-[900px] bg-[#f7f7f7] sm:flex items-center justify-center relative">
        <div className="w-[854px] h-[618px] relative">
          <Image src="/lawyer4.svg" width={854} height={618}></Image>
          <Image
            src="/sign.svg"
            width={144}
            height={49}
            className="absolute bottom-20 right-30"
          ></Image>
        </div>
      </div>
      <div className="sm:hidden w-full h-[1000px] bg-[#f7f7f7] flex items-center justify-center ">
        <Image src="/lawyer_mb.svg" width={435} height={759}></Image>
      </div>
    </>
  );
};

export default Section10;
