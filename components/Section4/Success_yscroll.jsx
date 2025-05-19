// src/components/SuccessCaseTable.jsx 또는 .tsx 파일
"use client";

import React, { useRef, useEffect, useState } from "react"; // useRef, useEffect, useState import
import { success } from "@/constants/success";

// 데이터는 이미 success 상수에서 가져오는 것으로 설정되어 있습니다.
const STATIC_CASE_DATA = success;

const SuccessCaseTable = () => {
  // 스크롤될 요소에 접근하기 위한 Ref 생성
  const scrollRef = useRef(null);
  // 마우스 오버 상태를 추적하기 위한 state
  const [isHovering, setIsHovering] = useState(false);

  const gridColsClass = "grid-cols-[1fr_1.5fr_1fr_1.2fr_1.5fr_1.2fr]";

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return; // 요소가 없으면 아무것도 하지 않음

    const scrollSpeed = 0.2; // 픽셀/프레임 단위 스크롤 속도 (값이 작을수록 느림)
    let animationFrameId;

    const scroll = () => {
      // 마우스 오버 중이 아닐 때만 스크롤
      if (!isHovering) {
        // 현재 스크롤 위치에 속도를 더함
        scrollElement.scrollTop += scrollSpeed;

        if (
          scrollElement.scrollTop >=
          scrollElement.scrollHeight - scrollElement.clientHeight
        ) {
          scrollElement.scrollTop = 0; // 맨 위로 리셋
        }
      }

      // 다음 프레임에 scroll 함수 다시 실행 요청
      animationFrameId = requestAnimationFrame(scroll);
    };

    // 초기 스크롤 시작
    // isHovering 상태가 변경될 때마다 useEffect가 다시 실행되므로
    // isHovering이 false일 때만 scroll 애니메이션을 시작하도록 조건 추가
    if (!isHovering) {
      animationFrameId = requestAnimationFrame(scroll);
    }

    // 컴포넌트 언마운트 시 또는 isHovering 상태 변경 시 애니메이션 중지
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]); // isHovering 상태가 변경될 때마다 useEffect 재실행

  return (
    // 테이블 전체 컨테이너에 마우스 이벤트 리스너 추가
    <div
      className="w-full sm:w-[900px] h-[500px] bg-white shadow-lg rounded-lg flex flex-col overflow-hidden mx-auto sm:px-5"
      style={{ border: "1px solid #e0e0e0" }}
      onMouseEnter={() => setIsHovering(true)} // 마우스 진입 시 isHovering true로 설정
      onMouseLeave={() => setIsHovering(false)} // 마우스 이탈 시 isHovering false로 설정
    >
      {/* 헤더 */}
      <div
        className={`grid ${gridColsClass} bg-white font-semibold text-sm sm:text-lg text-gray-700 border-b`}
        style={{ padding: "20px 10px" }}
      >
        {/* 텍스트 정렬은 이전처럼 중앙으로 유지 */}
        <div className="text-center">날짜</div>
        <div className="text-center">법원</div>
        <div className="text-center">이름</div>
        <div className="text-center">인가결정</div>
        <div className="text-center">변제금</div>
        <div className="text-center">탕감률</div>
      </div>

      {/* 데이터 본문 (스크롤 가능 영역) - Ref와 스크롤바 숨김 클래스 추가 */}
      {/* hide-scrollbar 클래스 추가는 전역 CSS에 스타일 정의가 되어 있어야 작동합니다. */}
      <div
        className="w-full flex-1 overflow-y-auto text-sm sm:text-lg text-gray-800 hide-scrollbar"
        ref={scrollRef} // Ref 연결
      >
        {STATIC_CASE_DATA.map((item, index) => (
          <div
            key={index}
            className={`grid ${gridColsClass} border-b border-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            style={{ padding: "10px 10px" }}
          >
            {/* 텍스트 정렬은 이전처럼 중앙으로 유지 */}
            <div className="text-center text-xs my-auto">
              {item.date.substring(0, 7)}
            </div>
            <div className="text-center">{item.court}</div>
            <div className="text-center">{item.name}</div>
            <div className="text-center">{item.decision}</div>
            <div className="text-center">{item.repaymentAmount}</div>
            <div className="text-center">{item.repaymentRate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessCaseTable;
