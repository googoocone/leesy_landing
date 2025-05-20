// src/components/FloatingCallButton.jsx
"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:1899-7754"
      className="fixed bottom-14 right-6 z-50 flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 bg-[#fc555c] text-white rounded-full shadow-lg transition-colors duration-200 ease-in-out hover:scale-110 hover:bg-[#e0434f] animate-bounce" // animate-bobbing 클래스 추가
      // 참고: 사용자 코드의 bottom-18, w-12, h-12를 bottom-8, w-14, h-14, 아이콘 26px 등으로 살짝 키웠습니다. 원하시는 크기로 조절하세요.
      aria-label="전화 상담 바로가기"
    >
      <FaPhoneAlt size={18} className="sm:size-7" />{" "}
      {/* 아이콘 크기 (반응형으로도 조절 가능) */}
    </a>
  );
};

export default FloatingCallButton;
