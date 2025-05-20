"use client";

import React from "react";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { width: 0 },
  visible: { width: "190px", transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInMb = {
  hidden: { width: 0 },
  visible: { width: "118px", transition: { duration: 0.8, ease: "easeInOut" } },
};

const Section3 = () => {
  return (
    <div className="w-full h-[554px] sm:h-[530px] bg-[#202020] flex flex-col items-center justify-center">
      <div className="text-white text-center text-[20px] sm:text-[24px] w-[270px] sm:w-full">
        <div className="mb-4">
          누구나 <strong>탕감률 90%</strong>를 받을 수 있단 광고 메시지에 속아
        </div>
        <div>큰 기대를 하고 오시는 분들은 실망하실 수 있습니다</div>
        <div className="hidden sm:block mx-auto w-[545px]  mt-7 bg-[#ef555c] px-5 py-3 font-semibold">
          저는 변호사의 직을 걸고 있는 그대로만 얘기합니다.
        </div>
        <div className="sm:hidden mt-5 bg-[#ef555c] px-5 py-3 font-semibold">
          저는 변호사의 직을 걸고
          <br /> 있는 그대로만 얘기합니다.
        </div>
      </div>
      <div className="hidden sm:block mt-20 text-[40px] text-white font-semibold relative overflow-hidden">
        <div className="z-10">지금 부터 있는 그대로 보여드리겠습니다</div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideIn}
          viewport={{ once: true, amount: 0.6 }}
          className="w-20 absolute bottom-2 left-42 h-2 bg-[#ef555c]/80"
          style={{ width: "40px" }} // 초기 넓이 설정 (visible 상태에서는 100% 됨)
        />
      </div>
      <div className="sm:hidden mt-20 text-[24px] sm:text-[40px] text-white font-semibold relative overflow-hidden">
        <div className="z-10 text-center">
          지금 부터
          <br /> 있는 그대로 보여드리겠습니다
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInMb}
          viewport={{ once: true, amount: 0.6 }}
          className="absolute bottom-0.5 left-0 h-2 bg-[#ef555c]/80"
          style={{ width: "40px" }} // 초기 넓이 설정 (visible 상태에서는 100% 됨)
        />
      </div>
    </div>
  );
};

export default Section3;
