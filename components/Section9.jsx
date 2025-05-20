import Image from "next/image";
import React from "react";

const Section9 = () => {
  return (
    <>
      <div className="hidden w-full h-[2100px] bg-white sm:flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-20">
          <div className="text-[32px] font-semibold text-center mb-5">
            탕감률, 월 변제금 못지 않게
            <br />
            <span className="text-[#d81c25]">의뢰인과의 소통</span> 역시
            중요하게 생각합니다
          </div>
          <div className="text-[24px] text-[#202020]">
            돈만 받고 나면 연락이 안되는 그런 사무실이 아닙니다.
          </div>
        </div>
        <div className="text-center text-[40px] font-semibold relative">
          <span className="relative z-10">
            1:1 전담 직원 배정 후,
            <br /> 언제든지 소통 가능한 카카오톡방 개설
          </span>
          <div className="w-[610px] h-[10px] bg-[#ffc5c7]/80 absolute bottom-1 left-2"></div>
        </div>
        <div className="w-[980px] h-[650px] rounded-2xl bg-[#f7f7f7] flex items-center justify-center my-20">
          <Image src="/kakao.svg" width={820} height={490}></Image>
        </div>
        <div className="text-[40px] font-semibold text-center relative mb-10">
          <span className="relative z-10">
            불안할 땐 언제든지 방문상담 가능
          </span>
          <div className="w-[225px] h-[10px] bg-[#ffc5c7]/80 absolute bottom-2 right-1"></div>
        </div>
        <button className="w-[302px] h-[90px] text-[32px] text-white font-semibold flex items-center justify-center bg-[#ef555c] rounded-full cursor-pointer hover:text-[#ef555c] hover:bg-white hover:border-[#ef555c] hover:border mb-20">
          방문상담 예약
        </button>
        <div className="w-[980px] h-[370px] relative">
          <Image src="/consult.svg" width={980} height={370}></Image>
        </div>
      </div>
      {/* 모바일 화면 */}
      <div className="sm:hidden w-full h-[2130px] bg-white flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="text-[18px] font-semibold text-center mb-5">
            탕감률, 월 변제금 못지 않게
            <br />
            <span className="text-[#d81c25]">의뢰인과의 소통</span> 역시
            중요하게 생각합니다
          </div>
          <div className="text-[16px] text-[#202020]">
            돈만 받고 나면 연락이 안되는
            <br /> 그런 사무실이 아닙니다.
          </div>
        </div>
        <div className="text-center text-[24px] font-semibold relative">
          <span className="relative z-10">
            1:1 전담 직원 배정 후,
            <br /> 언제든지 소통 가능한 <br />
            카카오톡방 개설
          </span>
          <div className="w-[156px] h-[5px] bg-[#ffc5c7]/80 absolute bottom-1.5 left-7"></div>
        </div>
        <div className="w-full h-[802px] rounded-2xl bg-[#f7f7f7] flex items-center justify-center my-10">
          <Image src="/kakao_mb.svg" width={343} height={775}></Image>
        </div>
        <div className="text-[24px] font-semibold text-center relative mb-5">
          <span className="relative z-10">
            불안할 땐<br /> 언제든지 방문상담 가능
          </span>
          <div className="w-[224px] h-[5px] bg-[#ffc5c7]/80 absolute bottom-1 right-1"></div>
        </div>
        <button className="w-[200px] h-[75px] text-[24px] text-white font-semibold flex items-center justify-center bg-[#ef555c] rounded-full cursor-pointer hover:text-[#ef555c] hover:bg-white hover:border-[#ef555c] hover:border mb-10">
          방문상담 예약
        </button>
        <div className="w-full h-[514px] relative flex items-center justify-center">
          <Image src="/consult_mb.svg" width={343} height={514}></Image>
        </div>
      </div>
    </>
  );
};

export default Section9;
