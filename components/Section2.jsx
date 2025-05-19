"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 100 }, // 왼쪽에서 시작
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // 오른쪽으로 이동하며 나타남
};

const Section2 = () => {
  return (
    <div className="w-full h-[540px] sm:h-[840px] bg-white flex flex-col items-center justify-center">
      <motion.div
        className="w-full flex items-center justify-center mt-8 "
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromBottom}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="text-[18px] sm:text-[24px] mb-10">어떻게 해야</div>
      </motion.div>
      <motion.div
        className="w-full flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromBottom}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="text-[24px] sm:text-[40px]  text-center mb-20">
          제대로된{" "}
          <span className="font-semibold text-[#d81c25]">개인회생 변호사</span>
          를 <br /> 찾을 수 있을까?🤔
        </div>
      </motion.div>
      <motion.div
        className="w-full flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromBottom}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="text-[18px] sm:text-[24px] text-center px-5  sm:mb-30">
          이 문제에 대한 정답은 굉장히 쉽습니다. <br /> 정답이 궁금하시다면
          아래에서 확인하실 수 있습니다.
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5 text-gray-500">
        <div>아래로 내려보세요</div>
        <div className="animate-bounce">
          <Image
            src="/arrow_down.png"
            width={24}
            height={24}
            alt="scroll down"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Section2;
