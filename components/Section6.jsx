"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Swiper 모듈 추가
import Image from "next/image";

// Swiper CSS import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 데이터 import (경로는 실제 프로젝트 구조에 맞게 수정해주세요)
import {
  jeonsesagi,
  senghalbi,
  byungwonbi,
  voicefishing,
  dobak,
  coin,
  joosick,
  saup,
  sachi,
  boodongsan,
} from "@/constants/review"; // 실제 경로로 수정 필요

const nav = [
  "전세사기",
  "생활비 부족",
  "병원비 부족",
  "보이스피싱",
  "도박",
  "코인",
  "주식",
  "사업실패",
  "사치",
  "부동산투자",
];

// 각 네비게이션 아이템에 해당하는 데이터 매핑
const dataMap = {
  전세사기: jeonsesagi,
  "생활비 부족": senghalbi,
  "병원비 부족": byungwonbi,
  보이스피싱: voicefishing,
  도박: dobak,
  코인: coin,
  주식: joosick,
  사업실패: saup,
  사치: sachi,
  부동산투자: boodongsan,
};

const Section6 = () => {
  // 현재 선택된 카테고리를 위한 state, 기본값으로 첫 번째 카테고리 설정
  const [selectedCategory, setSelectedCategory] = useState(nav[0]);
  const [currentSlides, setCurrentSlides] = useState([]);

  // selectedCategory가 변경될 때마다 currentSlides 업데이트
  useEffect(() => {
    setCurrentSlides(dataMap[selectedCategory] || []);
  }, [selectedCategory]);

  const handleNavClick = (item) => {
    setSelectedCategory(item);
  };

  return (
    <div className="w-full sm:w-[1280px] mx-auto h-[980px] sm:h-[1340px] bg-white flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="hidden sm:block text-[40px] font-semibold text-center">
          매달 쏟아지고 있는 <br />
          <span className="text-[#d81c25]">
            의뢰인들의 솔직하고 생생한 후기
          </span>
        </div>
        <div className=" sm:hidden text-[24px] font-semibold text-center">
          매달 쏟아지고 있는 <br />
          <span className="text-[#d81c25]">
            의뢰인들의
            <br /> 솔직하고 생생한 후기
          </span>
        </div>
        <div className="hidden sm:block text-center text-[24px]">
          저희 카페에서 수백명의 의뢰인들이 작성해주신 <br />
          저의 개인회생 후기를 보신다면 생각이 달라지실 것입니다.
        </div>
        <div className="sm:hidden  text-center text-[16px]">
          저희 카페에서 수백명의 의뢰인들이
          <br /> 작성해주신 저의 개인회생 후기를 보신다면
          <br /> 생각이 달라지실 것입니다.
        </div>
      </div>

      {/* 네비게이션 버튼 영역 */}
      <div className="w-full sm:max-w-[680px] my-10 md:my-20 flex flex-wrap items-center justify-center gap-3 md:gap-5 px-4">
        {nav.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className={`px-4 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base transition-colors duration-200 ease-in-out cursor-pointer
              ${
                selectedCategory === item
                  ? "bg-[#d81c25] text-white" // 선택된 버튼 스타일
                  : "bg-[#f7f7f7] text-black hover:bg-gray-200" // 기본 버튼 스타일
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Desc Swiper 슬라이드 영역 */}
      <div className="hidden sm:block w-full  px-4">
        {/* 슬라이더 너비와 패딩 조절 */}
        {currentSlides.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]} // Navigation과 Pagination 모듈 사용
            spaceBetween={30} // 슬라이드 간 간격
            slidesPerView={1.4} // 기본적으로 한 번에 1개의 슬라이드
            navigation // 네비게이션 버튼 활성화
            pagination={{ clickable: true }} // 페이지네이션 버튼 활성화 및 클릭 가능
            loop={currentSlides.length > 1}
            centeredSlides={true}
            className="mySwiper px-24" // 필요시 커스텀 CSS를 위한 클래스명
          >
            {currentSlides.map((slide, index) => (
              <SwiperSlide key={`${selectedCategory}-${index}`} className="p-1">
                <a href={slide.url} target="_blank">
                  <div className="bg-[#f7f7f7] p-6 rounded-lg shadow-md w-full sm:w-[847px] min-h-[550px] flex flex-col items-center justify-center gap-10 cursor-pointer hover:bg-gray-200">
                    <div className="flex flex-col items-center justify-center">
                      {slide.desc.split(" ")[1] == "남성" ? (
                        <Image
                          src="/man.png"
                          width={140}
                          height={120}
                          alt="회생파산연구소의뢰인"
                        ></Image>
                      ) : (
                        <Image
                          src="/girl.png"
                          width={120}
                          height={120}
                          alt="회생파산연구소의뢰인"
                        ></Image>
                      )}
                      <div className="text-[40px] text-[#ef555c] mt-5 font-semibold">
                        회생파산연구소 의뢰인
                      </div>
                      <div className="text-[24px] text-[#5e5959]">
                        {slide.name} {slide.desc}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center text-[24px]">
                      <div className="w-[160px] h-[80px] flex flex-col items-center justify-center">
                        <div>직업</div>
                        <div className="text-[#5e5959]">{slide.job}</div>
                      </div>
                      <div className="w-[1px] h-[60px] mx-5 bg-gray-500"></div>
                      <div className="w-[160px] h-[80px] flex flex-col items-center justify-center">
                        <div>거주지</div>
                        <div className="text-[#5e5959]">{slide.loc}</div>
                      </div>
                      <div className="w-[1px] h-[60px] mx-5 bg-gray-500"></div>
                      <div className="w-[160px] h-[80px] flex flex-col items-center justify-center">
                        <div>월소득</div>
                        <div className="text-[#5e5959]">{slide.income}</div>
                      </div>
                      <div className="w-[1px] h-[60px] mx-5 bg-gray-500"></div>
                      <div className="w-[160px] h-[80px] flex flex-col items-center justify-center">
                        <div>총채무</div>
                        <div className="text-[#5e5959]">{slide.debt}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-gray-500 py-10">
            선택된 카테고리에 대한 후기가 없습니다.
          </div>
        )}
      </div>
      {/* 모바일 Slide 영역 */}
      <div className="sm:hidden w-full  px-1">
        {/* 슬라이더 너비와 패딩 조절 */}
        {currentSlides.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]} // Navigation과 Pagination 모듈 사용
            spaceBetween={30} // 슬라이드 간 간격
            slidesPerView={1} // 기본적으로 한 번에 1개의 슬라이드
            navigation // 네비게이션 버튼 활성화
            pagination={{ clickable: true }} // 페이지네이션 버튼 활성화 및 클릭 가능
            loop={currentSlides.length > 1}
            centeredSlides={true}
            className="mySwiper" // 필요시 커스텀 CSS를 위한 클래스명
          >
            {currentSlides.map((slide, index) => (
              <SwiperSlide
                key={`${selectedCategory}-${index}`}
                className="p-1 h-[340px]"
              >
                <a href={slide.url} target="_blank">
                  <div className="bg-[#f7f7f7] p-6 rounded-lg shadow-md w-full sm:w-[847px] min-h-[340px] flex flex-col items-center justify-center gap-10 cursor-pointer hover:bg-gray-200">
                    <div className="flex flex-col items-center justify-center">
                      {slide.desc.split(" ")[1] == "남성" ? (
                        <Image
                          src="/man.png"
                          width={115}
                          height={120}
                          alt="회생파산연구소의뢰인"
                        ></Image>
                      ) : (
                        <Image
                          src="/girl.png"
                          width={100}
                          height={120}
                          alt="회생파산연구소의뢰인"
                        ></Image>
                      )}
                      <div className="text-[24px] text-[#ef555c] mt-5 font-semibold">
                        회생파산연구소 의뢰인
                      </div>
                      <div className="text-[16px] text-[#5e5959]">
                        {slide.name} {slide.desc}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center text-[16px]">
                      <div className="w-[75px] h-[50px] flex flex-col items-center justify-center">
                        <div>직업</div>
                        <div className="text-[#5e5959]">{slide.job}</div>
                      </div>
                      <div className="w-[1px] h-[40px] mx-2 bg-gray-400"></div>
                      <div className="w-[75px] h-[50px] flex flex-col items-center justify-center">
                        <div>거주지</div>
                        <div className="text-[#5e5959]">{slide.loc}</div>
                      </div>
                      <div className="w-[1px] h-[40px] mx-2 bg-gray-400"></div>
                      <div className="w-[75px] h-[50px] flex flex-col items-center justify-center">
                        <div>월소득</div>
                        <div className="text-[#5e5959]">{slide.income}</div>
                      </div>
                      <div className="w-[1px] h-[40px] mx-2 bg-gray-400"></div>
                      <div className="w-[95px] h-[50px] flex flex-col items-center justify-center">
                        <div>총채무</div>
                        <div className="text-[#5e5959]">{slide.debt}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-gray-500 py-10">
            선택된 카테고리에 대한 후기가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default Section6;
