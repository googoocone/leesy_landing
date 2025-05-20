// src/components/SuccessCaseTable.jsx 또는 .tsx 파일
"use client";

import React, { useRef, useEffect, useState } from "react";
import { success } from "@/constants/success";

const STATIC_CASE_DATA = success;

const SuccessCaseTable = () => {
  const scrollRef = useRef(null);
  // isHovering 초기값을 false로 변경하여 처음부터 스크롤이 시작되도록 합니다.
  const [isHovering, setIsHovering] = useState(false);
  const gridColsClass = "grid-cols-[1fr_1.5fr_1fr_1.2fr_1.5fr]";

  // isHovering 상태 변경 시 콘솔에 로그 출력 (디버깅용)
  // console.log("isHovering state:", isHovering);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    // scrollElement가 없을 경우 아무 작업도 하지 않음 (안정성 강화)
    if (!scrollElement) {
      // console.log("Scroll element not found yet.");
      return;
    }

    if (scrollElement.scrollHeight <= scrollElement.clientHeight) {
      // console.log("Content is not tall enough to scroll.");
      return;
    }

    // 스크롤 속도 (값을 높이면 더 빨리 스크롤됩니다. 0.5 ~ 1.0 정도를 추천합니다.)
    const scrollSpeed = 0.5; // 기존 0.2에서 약간 높임
    let animationFrameId;

    const scroll = () => {
      // isHovering이 false일 때 (마우스가 올라가 있지 않을 때)만 스크롤 실행
      if (!isHovering) {
        scrollElement.scrollTop += scrollSpeed;

        // 스크롤이 끝까지 도달했는지 확인 (부동 소수점 오차 감안하여 >= 사용)
        if (
          scrollElement.scrollTop >=
          scrollElement.scrollHeight - scrollElement.clientHeight
        ) {
          // 아주 작은 지연 후 scrollTop을 0으로 설정하여 "점프"하는 느낌을 줄일 수 있음 (선택 사항)
          // setTimeout(() => { scrollElement.scrollTop = 0; }, 50);
          scrollElement.scrollTop = 0; // 맨 위로 리셋
        }
      }
      // 다음 애니메이션 프레임 요청
      animationFrameId = requestAnimationFrame(scroll);
    };

    // 마우스가 위에 있지 않을 때만 애니메이션 시작
    // (isHovering 상태가 변경될 때마다 이 useEffect가 재실행되므로,
    // isHovering이 true에서 false로 바뀔 때도 이 조건에 의해 스크롤이 재개됨)
    animationFrameId = requestAnimationFrame(scroll);

    // 컴포넌트 언마운트 시 또는 isHovering 상태 변경으로 useEffect가 다시 실행되기 전에 애니메이션 프레임 취소
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]); // isHovering 상태가 변경될 때마다 useEffect를 다시 실행

  return (
    <div
      className="w-full sm:w-[900px] h-[500px] bg-white shadow-lg rounded-lg flex flex-col overflow-hidden mx-auto sm:px-5"
      style={{ border: "1px solid #e0e0e0" }}
      onMouseEnter={() => setIsHovering(true)} // 마우스 진입 시 isHovering true로 설정
      onMouseLeave={() => setIsHovering(false)} // 마우스 이탈 시 isHovering false로 설정
    >
      <div
        className={`grid ${gridColsClass} bg-white font-semibold text-sm sm:text-lg text-gray-700 border-b`}
        style={{ padding: "20px 10px" }}
      >
        <div className="text-center">날짜</div>
        <div className="text-center">법원</div>
        <div className="text-center">이름</div>
        <div className="text-center">인가결정</div>

        <div className="text-center">탕감률</div>
      </div>

      <div
        className="w-full flex-1 overflow-y-auto text-sm sm:text-lg text-gray-800 hide-scrollbar"
        ref={scrollRef} // Ref 연결
      >
        {STATIC_CASE_DATA.map((item, index) => (
          <div
            key={index}
            className={`grid ${gridColsClass} border-b border-gray-200 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
            style={{ padding: "10px 10px" }}
          >
            <div className="text-center text-xs sm:text-lg my-auto">
              {item.date.substring(0, 7)}
            </div>
            <div className="text-center text-xs sm:text-lg my-auto">
              {item.court}
            </div>
            <div className="text-center text-xs sm:text-lg my-auto">
              {item.name}
            </div>
            <div className="text-center text-xs sm:text-lg my-auto">
              {item.decision}
            </div>

            <div className="text-center text-xs sm:text-lg my-auto">
              {item.repaymentRate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessCaseTable;
