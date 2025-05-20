import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Swiper 기본 스타일 import
import "swiper/css";
import "swiper/css/pagination"; // 페이지네이션 스타일
import "swiper/css/navigation"; // 네비게이션 스타일 <--- 이 부분을 추가해주세요.

import React from "react";

const Slide_desc = () => {
  return (
    <Swiper
      // 여기에 Swiper 설정을 추가합니다.
      spaceBetween={30} // 슬라이드 간 간격
      slidesPerView={3} // 한 번에 보여질 슬라이드 수
      centeredSlides={true} // 활성 슬라이드를 중앙에 배치 <--- 이 설정을 추가하면 효과가 더 자연스러워집니다.
      pagination={{ clickable: true }} // 페이지네이션 사용
      // navigation={true} // 네비게이션 버튼 사용
      modules={[Pagination, Navigation, Autoplay]} // 사용할 모듈 추가 (Autoplay도 사용하실 경우)
      // autoplay={{ // 자동 재생 설정을 원하시면 주석 해제
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      className="hidden sm:block mySwiper w-full h-full" // 부모 div 크기에 맞도록 w-full h-full 설정
    >
      {/* 각 슬라이드는 SwiperSlide 컴포넌트 안에 넣습니다. */}
      <SwiperSlide>
        {/* 첫 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success1.png"
            width={479} // 이미지 원본 크기 또는 표시하려는 크기
            height={664} // 이미지 원본 크기 또는 표시하려는 크기
            alt="성공 사례 1" // alt 속성 추가 권장
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 두 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success2.png"
            width={479}
            height={664}
            alt="성공 사례 2"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 세 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success3.png"
            width={479}
            height={664}
            alt="성공 사례 3"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 네 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success4.png"
            width={479}
            height={664}
            alt="성공 사례 4"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 다섯 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success5.png"
            width={479}
            height={664}
            alt="성공 사례 5"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 다섯 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success6.png"
            width={479}
            height={664}
            alt="성공 사례 6"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 다섯 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success7.png"
            width={479}
            height={664}
            alt="성공 사례 7"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 다섯 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success8.png"
            width={479}
            height={664}
            alt="성공 사례 8"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 다섯 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success9.png"
            width={479}
            height={664}
            alt="성공 사례 9"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 다섯 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success10.png"
            width={479}
            height={664}
            alt="성공 사례 10"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 다섯 번째 슬라이드 내용 */}
        <div className="flex items-center justify-center h-full text-2xl">
          <Image
            className="shadow-lg rounded-md"
            src="/success11.png"
            width={479}
            height={664}
            alt="성공 사례 11"
          ></Image>
        </div>
      </SwiperSlide>
      {/* 필요에 따라 SwiperSlide를 더 추가하세요. */}
    </Swiper>
  );
};

export default Slide_desc;
