import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full sm:w-[1200px] mx-auto h-[70px] px-4 flex items-center justify-center">
      {/* <Image
        className="sm:hidden"
        src="/logo.svg"
        width={108}
        height={21}
        alt="법률사무소 우인 로고"
      ></Image>
      <Image
        className="hidden sm:block"
        src="/logo.svg"
        width={162}
        height={32}
        alt="법률사무소 우인 로고"
      ></Image> */}
      <button className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-md sm:text-lg bg-[#b73d24] text-white cursor-pointer hover:font-semibold">
        상담전화 : 1899-1440
      </button>
    </div>
  );
};

export default Header;
