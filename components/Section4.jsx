"use client";

import React from "react";
import Slide_desc from "./Section4/Slide_desc";
import Slide_mb from "./Section4/Slide_mb";
import { success } from "@/constants/success";
import Success_yscroll from "@/components/Section4/Success_yscroll";

// Swiper 관련 모듈 import

const Section4 = () => {
  return (
    <div className="w-full h-[1900px] sm:h-[2000px]  bg-[#f7f7f7] text-[#202020] flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="hidden sm:block mb-20 text-center text-[24px] ">
          제가 담당한 사건들 중에서도 당연히 <br /> 탕감률 90% 혹은 그 이상의
          성공사례도 있습니다.
        </div>
        <div className="sm:hidden mb-5 text-center text-[18px] ">
          제가 담당한 사건들 중에서도 당연히 <br /> 탕감률 90% 혹은 그 이상의{" "}
          <br />
          성공사례도 있습니다.
        </div>
        {/* Swiper를 넣을 div */}
        <div className="hidden sm:block w-full h-[670px]">
          <Slide_desc></Slide_desc>
        </div>
        <div className="sm:hidden w-full h-[670px] px-5">
          <Slide_mb></Slide_mb>
        </div>
      </div>
      {/* 나머지 div들은 그대로 유지 */}
      <div className="hidden  w-full mt-30 sm:flex flex-col items-center justify-center">
        <div className="text-[24px]">
          그러나 이러한 극단적인 케이스는 누구에게나 발생하지 않습니다
        </div>
        <div className="text-[40px] font-semibold">
          단, <span className="text-[#d81c25]">평균 탕감률 62.55%</span>는
          지속적으로 달성하고 있습니다
        </div>
        <div className="text-sm">(2025년 5월 15일 기준)</div>
        {/* caseData 대신 STATIC_CASE_DATA 사용 */}
        <div className="flex-1 overflow-y-auto text-sm mt-20 text-gray-800">
          <Success_yscroll></Success_yscroll>
        </div>
      </div>
      <div className="sm:hidden w-full mt-30 flex flex-col items-center justify-center text-center">
        <div className="text-[18px] mb-5">
          그러나 이러한 극단적인 케이스는 <br /> 누구에게나 발생하지 않습니다
        </div>
        <div className="text-[24px] font-semibold">
          단, <span className="text-[#d81c25]">평균 탕감률 62.55%</span>는<br />
          지속적으로 달성하고 있습니다
        </div>
        <div className="text-sm">(2025년 5월 15일 기준)</div>
        {/* caseData 대신 STATIC_CASE_DATA 사용 */}
        <div className="w-full flex-1 overflow-y-auto text-sm mt-20 text-gray-800">
          <Success_yscroll></Success_yscroll>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Section4;
