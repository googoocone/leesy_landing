"use client";
import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion"; // animate와 useInView를 import합니다.
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Swiper CSS import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // Coverflow effect CSS 추가
import Image from "next/image";

const youtubeData = [
  {
    url: "https://www.youtube.com/watch?v=Pkw11F4ZCpU&t=98s",
    img: "/youtube1.jpg",
  },
  { url: "https://www.youtube.com/watch?v=wCX7mlp9c48", img: "/youtube2.jpg" },
  {
    url: "https://www.youtube.com/watch?v=cMiudoVa-Dk&t=233s",
    img: "/youtube3.jpg",
  },
  {
    url: "https://www.youtube.com/watch?v=IQYkUliruJA&t=143s",
    img: "/youtube4.jpg",
  },
  {
    url: "https://www.youtube.com/watch?v=2fdCzkfuFB4&t=202s",
    img: "/youtube5.png",
  },
];

const Section7 = () => {
  const numberRef = useRef(null); // 숫자를 표시할 span에 대한 ref
  const sectionRef = useRef(null); // 섹션 전체 또는 특정 트리거 요소에 대한 ref

  // sectionRef 요소가 화면에 30% 이상 보일 때 isInView는 true가 됩니다.
  // once: true 옵션으로 애니메이션이 한 번만 실행되도록 합니다.
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    // 요소가 화면에 보이고, numberRef가 유효할 때 애니메이션 실행
    if (isInView && numberRef.current) {
      const controls = animate(0, 10, {
        // 0에서 10까지 애니메이션
        duration: 1.5, // 애니메이션 지속 시간 (초)
        ease: "easeOut", // 부드러운 감속 효과
        onUpdate(value) {
          // 애니메이션 값이 변경될 때마다 span의 텍스트를 업데이트
          if (numberRef.current) {
            numberRef.current.textContent = Math.round(value).toString();
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView]); // isInView 값이 변경될 때마다 useEffect 실행

  return (
    // 애니메이션 트리거를 위해 sectionRef를 여기에 연결합니다.
    <div
      ref={sectionRef}
      className="w-full h-[700px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] bg-black text-white flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20 py-10 px-4"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="hidden sm:block text-[16px] sm:text-2xl md:text-[24px] mb-3 md:mb-4">
          개인회생에 대한 진정성은 후기에만 있지 않습니다
        </div>
        <div className="sm:hidden text-[16px] mb-3 md:mb-4">
          개인회생에 대한 진정성은 후기에만 있지 않습니다
        </div>
        <div className="hidden sm:block sm:text-[24px] sm:text-4xl md:text-[40px] font-normal leading-tight">
          저의
          <span className="text-[#ef555c] font-semibold">
            <span>10</span>년간의 노하우와 지식
          </span>
          을 유튜브 영상에 담았습니다
        </div>
        <div className="sm:hidden text-[24px]  font-normal leading-tight">
          저의
          <span className="text-[#ef555c] font-semibold">
            <span>10</span>년간의 노하우와 지식
          </span>
          을<br /> 유튜브 영상에 담았습니다
        </div>
      </div>
      <div className="text-center text-[16px] sm:text-2xl md:text-[24px]">
        5천건의 성공사례와 개인회생 분야에서의 1만시간을 <br />
        모두 유튜브 영상에 담아냈습니다
      </div>
      <div className="w-full max-w-[980px] aspect-video rounded-2xl bg-[#202020] flex items-center justify-center">
        <Swiper
          effect={"coverflow"} // 효과를 'coverflow'로 설정
          spaceBetween={30}
          grabCursor={true} // 마우스 커서를 잡는 모양으로 변경
          centeredSlides={true} // 활성 슬라이드를 항상 가운데로 정렬
          slidesPerView={1.5} // 한 번에 보여줄 슬라이드 개수 (CSS로 슬라이드 너비 조절 시 'auto'가 유용)
          // 또는 고정 값 (예: 3)을 사용할 수도 있습니다.
          loop={true} // 무한 루프 활성화
          coverflowEffect={{
            rotate: 0, // 슬라이드 회전 각도 (0으로 설정하면 회전 없음)
            stretch: 0, // 슬라이드 간 간격 (px 단위, 클수록 멀어짐)
            depth: 150, // 슬라이드 깊이 효과 (클수록 3D 효과 및 축소 효과가 강해짐)
            modifier: 1, // 효과 배율
            scale: 0.85, // 비활성 슬라이드의 크기 배율 (Swiper 7+). 1이 기본 크기.
            slideShadows: false, // 슬라이드 그림자 표시 여부
          }}
          pagination={{ clickable: true }} // 페이지네이션
          navigation={true} // 좌우 화살표 네비게이션
          modules={[EffectCoverflow, Pagination, Navigation]} // 사용 모듈 등록
          className="myImageSwiper" // 필요시 커스텀 스타일링을 위한 클래스
          style={{ padding: "0px 0px 0px 0px" }} // 페이지네이션이 가려지지 않도록 하단 패딩 추가 (옵션)
        >
          {youtubeData.map((video, index) => (
            <SwiperSlide
              key={video.id || video.url || index}
              // slidesPerView: 'auto' 사용 시 각 슬라이드의 너비를 지정할 수 있습니다.
              // 예: style={{ width: '80%', maxWidth: '500px' }} 또는 CSS 클래스로 정의
              className="pb-8 sm:pb-10" // 기존 패딩 유지 또는 Swiper style의 padding으로 대체
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <div className="group rounded-lg w-full h-full overflow-hidden shadow-xl cursor-pointer">
                  {/* Next.js Image 사용 시 objectFit="cover" 또는 fill prop 고려 */}
                  <img // 일반 img 태그 또는 Next/Image
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={video.img}
                    alt={video.title || "유튜브 영상 썸네일"}
                    // Next/Image 사용 시 width, height props가 필요할 수 있습니다.
                    // width={640}
                    // height={375}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section7;
