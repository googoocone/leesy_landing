// src/components/Section5.jsx 또는 .tsx 파일
"use client";

import React, { useState } from "react";
import Image from "next/image";

// 1. 각 지역별 평균 탕감률 데이터 구조화
const REPAYMENT_RATES_DATA = {
  전국: { nationwide: "51.20%", standard: "61.44%", label: "전국" },
  수원회생법원: { nationwide: "46.9%", standard: "64.3%", label: "수원" },
  서울회생법원: { nationwide: "54.3%", standard: "67.91%", label: "서울" },
  대전지방법원: { nationwide: "57.9%", standard: "60.24%", label: "대전" },
  인천지방법원: { nationwide: "43.5%", standard: "65.54%", label: "인천" },
  부산지방법원: { nationwide: "45.8%", standard: "62.44%", label: "부산" },
  춘천지방법원: { nationwide: "43.4%", standard: "49.64%", label: "춘천" },
  제주지방법원: { nationwide: "62.4%", standard: "59.26%", label: "제주" },
  광주지방법원: { nationwide: "57.8%", standard: "59.0%", label: "광주" },
  전주지방법원: { nationwide: "66.2%", standard: "67.39%", label: "전주" },
  대구지방법원: { nationwide: "38.9%", standard: "63.18%", label: "대구" },
  의정부지방법원: { nationwide: "58.22%", standard: "64.12%", label: "의정부" },
  창원지방법원: { nationwide: "47.9%", standard: "48.40%", label: "창원" },
  청주지방법원: { nationwide: "39.3%", standard: "55.80%", label: "청주" },
};

// 2. 이미지 파일 이름과 법원 데이터 키 매칭
const IMAGE_KEY_TO_COURT_MAP = {
  seoul: "서울회생법원",
  daejeon: "대전지방법원",
  busan: "부산지방법원",
  junlabookdo: "전주지방법원",
  choongchungbookdo: "청주지방법원",
  gangwondo: "춘천지방법원",
  gyunggido: "수원회생법원",
  choongchungnamdo: "대전지방법원",
  gyungsangbookdo: "대구지방법원",
  gyungsangnamdo: "창원지방법원",
  daegu: "대구지방법원",
  ulsan: "부산지방법원", // 울산은 부산지방법원 관할 데이터 사용 가정
  junlanamdo: "광주지방법원",
  guangju: "광주지방법원", // 광주는 광주지방법원 데이터 사용
};

// 3. 이미지 파일 이름에 따른 표시용 지역 이름 레이블
const IMAGE_KEY_TO_DISPLAY_LABEL = {
  seoul: "서울",
  daejeon: "대전",
  busan: "부산",
  junlabookdo: "전라북도",
  choongchungbookdo: "충청북도",
  gangwondo: "강원도",
  gyunggido: "경기도(수원)",
  choongchungnamdo: "충청남도",
  gyungsangbookdo: "경상북도",
  gyungsangnamdo: "경상남도",
  ulsan: "울산",
  junlanamdo: "전라남도",
  daegu: "대구",
  guangju: "광주",
};

const Section5 = () => {
  const [selectedCourt, setSelectedCourt] = useState("전국");

  const courtData =
    REPAYMENT_RATES_DATA[selectedCourt] || REPAYMENT_RATES_DATA["전국"];

  const handleImageClick = (imageKey) => {
    const courtName = IMAGE_KEY_TO_COURT_MAP[imageKey];

    if (courtName) {
      if (REPAYMENT_RATES_DATA[courtName]) {
        // 이미 선택된 지역을 다시 클릭하면 "전국"으로 리셋
        if (selectedCourt === courtName) {
          setSelectedCourt("전국");
          console.log(`Clicked ${imageKey} again, resetting to 전국`);
        } else {
          setSelectedCourt(courtName);
          console.log(`Clicked ${imageKey}, showing data for ${courtName}`);
        }
      } else {
        console.warn(
          `Data for court "${courtName}" mapped from image "${imageKey}" not found in REPAYMENT_RATES_DATA.`
        );
        setSelectedCourt("전국");
      }
    } else {
      console.warn(`No court mapping found for image key "${imageKey}".`);
      setSelectedCourt("전국");
    }
  };

  const isSelected = (imageKey) => {
    const mappedCourt = IMAGE_KEY_TO_COURT_MAP[imageKey];
    return (
      mappedCourt && mappedCourt === selectedCourt && selectedCourt !== "전국"
    );
  };

  return (
    <div className="w-full h-[1150px] sm:h-[1700px] bg-[#f7f7f7] text-[#202020] flex flex-col items-center justify-center px-4 sm:px-0">
      <div className="hidden sm:block text-center text-[24px] sm:text-[40px] font-semibold ">
        <div>저는 어쩌다 한번 잘된 케이스를 가지고</div>
        <div>광고에 활용하고 있지 않습니다</div>
        <div className="text-[18px] font-normal mt-5">
          어떤 변호사도 전체 데이터를 공개하지 않습니다.
        </div>
      </div>
      <div className="sm:hidden text-center text-[24px] sm:text-[40px] font-semibold ">
        <div>
          저는 어쩌다 한번 잘된
          <br /> 케이스를 가지고
        </div>
        <div>광고에 활용하고 있지 않습니다</div>
        <div className="text-[18px] font-normal mt-5">
          어떤 변호사도 전체 데이터를 공개하지 않습니다.
        </div>
      </div>

      <div className="w-full sm:w-[980px] h-[700px] sm:h-[1000px] shadow-lg rounded-3xl mt-20 flex flex-col items-center justify-between bg-white ">
        <div className="w-full h-[84px] text-[24px] flex sm:flex-row flex-col items-center justify-center font-semibold text-white rounded-t-3xl bg-[#5e5959]">
          {courtData.label}{" "}
          {courtData.label !== "전국" ? "평균 탕감률" : "시•도별 평균 탕감률"}
        </div>
        <div className="w-full h-full flex sm:flex-row flex-col  sm:px-[116px] items-center justify-center gap-5">
          {/* 데스크탑 */}
          <div className="hidden w-[250px] h-[500px] mb-20 sm:flex flex-row sm:flex-col items-center justify-center">
            <div className="text-[24px] text-center ">
              {courtData.label} 법원
              <br /> 평균 탕감률
            </div>
            <div className="text-[40px] font-semibold">
              {courtData.nationwide}
            </div>
            <div className="px-10 w-full h-[1px] border-black bg-black my-10"></div>
            <div className="text-[24px] text-[#D81C25] text-center">
              법무법인 스탠다드 <br /> 평균 탕감률
            </div>
            <div className="text-[40px] font-semibold text-[#D81C25]">
              {courtData.standard}
            </div>
          </div>
          <div className="hidden sm:block w-full h-full relative mt-20">
            {/* 경기도 */}
            <Image
              className={`absolute top-16 left-36.5 cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("gyunggido") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("gyunggido")
                  ? "/gyunggido_clicked.svg"
                  : "/gyunggido.svg"
              }
              width={175.42}
              height={223.36}
              alt="경기도 지도"
              onClick={() => handleImageClick("gyunggido")}
            />
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "125px", left: "180px" }}
              onClick={() => handleImageClick("gyunggido")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyunggido"]}
            </div>

            {/* 강원도 (사용자 요청에 따라 기존 로직 유지) */}
            <Image
              className={`absolute right-8 cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("gangwondo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("gangwondo")
                  ? "/gangwondo_clicked.svg"
                  : "/gangwondo.svg"
              }
              width={314.02}
              height={265.57}
              alt="강원도 지도"
              onClick={() => handleImageClick("gangwondo")}
            />
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "125px", right: "160px" }}
              onClick={() => handleImageClick("gangwondo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gangwondo"]}
            </div>

            {/* 경상북도 */}
            <Image
              className={`absolute right-[2px] top-[243px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("gyungsangbookdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("gyungsangbookdo")
                  ? "/gyungsangbookdo_clicked.svg"
                  : "/gyungsangbookdo.svg"
              }
              width={239.13}
              height={259.35}
              alt="경상북도 지도"
              onClick={() => handleImageClick("gyungsangbookdo")}
            />
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "335px", right: "80px" }}
              onClick={() => handleImageClick("gyungsangbookdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyungsangbookdo"]}
            </div>

            {/* 서울 */}
            <Image
              className={`absolute top-39 left-46 cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("seoul") ? "z-20 scale-115" : ""
              }`}
              src={isSelected("seoul") ? "/seoul_clicked.svg" : "/seoul.svg"}
              width={51.22}
              height={42.57}
              alt="서울 지도"
              onClick={() => handleImageClick("seoul")}
            />
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "175px", left: "195px" }}
              onClick={() => handleImageClick("seoul")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["seoul"]}
            </div>

            {/* 충청북도 */}
            <Image
              className={`absolute top-[227px] left-61.5 cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("choongchungbookdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("choongchungbookdo")
                  ? "/choongchungbookdo_clicked.svg"
                  : "/choongchungbookdo.svg"
              }
              width={186.17}
              height={203.43}
              alt="충청북도 지도"
              onClick={() => handleImageClick("choongchungbookdo")}
            />
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "285px", left: "280px" }}
              onClick={() => handleImageClick("choongchungbookdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["choongchungbookdo"]}
            </div>

            {/* 충청남도 */}
            <Image
              className={`absolute top-[254px] left-22.5 cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("choongchungnamdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("choongchungnamdo")
                  ? "/choongchungnamdo_clicked.svg"
                  : "/choongchungnamdo.svg"
              }
              width={207.96}
              height={177.6}
              alt="충청남도 지도"
              onClick={() => handleImageClick("choongchungnamdo")}
            />
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "325px", left: "160px" }}
              onClick={() => handleImageClick("choongchungnamdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["choongchungnamdo"]}
            </div>

            {/* 대전 */}
            <Image
              className={`absolute top-[350.5px] left-[244px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("daejeon") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("daejeon") ? "/daejeon_clicked.svg" : "/daejeon.svg"
              }
              width={38.58}
              height={50.07}
              alt="대전 지도"
              onClick={() => handleImageClick("daejeon")}
            />
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "365px", left: "250px" }}
              onClick={() => handleImageClick("daejeon")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["daejeon"]}
            </div>

            {/* 경상남도 */}
            <Image
              className={`absolute bottom-[270px] right-[49.5px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("gyungsangnamdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("gyungsangnamdo")
                  ? "/gyungsangnamdo_clicked.svg"
                  : "/gyungsangnamdo.svg"
              }
              width={222.37}
              height={205.31}
              alt="경상남도 지도"
              onClick={() => handleImageClick("gyungsangnamdo")}
            />
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "367px", right: "150px" }}
              onClick={() => handleImageClick("gyungsangnamdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyungsangnamdo"]}
            </div>

            {/* 울산 */}
            <Image
              className={`absolute bottom-[382px] right-[17.5px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("ulsan") ? "z-20 scale-115" : ""
              }`}
              src={isSelected("ulsan") ? "/ulsan_clicked.svg" : "/ulsan.svg"}
              width={62.57}
              height={65.03}
              alt="울산 지도"
              onClick={() => handleImageClick("ulsan")}
            />
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "414px", right: "30px" }}
              onClick={() => handleImageClick("ulsan")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["ulsan"]}
            </div>

            {/* 부산 */}
            <Image
              className={`absolute bottom-[338px] right-[41.5px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("busan") ? "z-20 scale-115" : ""
              }`}
              src={isSelected("busan") ? "/busan_clicked.svg" : "/busan.svg"}
              width={63.61}
              height={57.06}
              alt="부산 지도"
              onClick={() => handleImageClick("busan")}
            />
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "350px", right: "50px" }}
              onClick={() => handleImageClick("busan")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["busan"]}
            </div>

            {/* 전라북도 */}
            <Image
              className={`absolute bottom-[378.2px] left-[132.5px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("junlabookdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("junlabookdo")
                  ? "/junlabookdo_clicked.svg"
                  : "/junlabookdo.svg"
              }
              width={199.27}
              height={139.92}
              alt="전라북도 지도"
              onClick={() => handleImageClick("junlabookdo")}
            />
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "435px", left: "200px" }}
              onClick={() => handleImageClick("junlabookdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["junlabookdo"]}
            </div>

            {/* 전라남도 */}
            <Image
              className={`absolute bottom-[159px] left-[49px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("junlanamdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("junlanamdo")
                  ? "/junlanamdo_clicked.svg"
                  : "/junlanamdo.svg"
              }
              width={270.37}
              height={248.92}
              alt="전라남도 지도"
              onClick={() => handleImageClick("junlanamdo")}
            />
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "200px", left: "150px" }}
              onClick={() => handleImageClick("junlanamdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["junlanamdo"]}
            </div>

            {/* 대구 */}
            <Image
              className={`absolute bottom-[432px] right-[110px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("daegu") ? "z-20 scale-115" : ""
              }`}
              src={isSelected("daegu") ? "/daegu_clicked.svg" : "/daegu.svg"}
              width={53.77}
              height={62.49}
              alt="대구 지도"
              onClick={() => handleImageClick("daegu")}
            />
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "455px", right: "120px" }}
              onClick={() => handleImageClick("daegu")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["daegu"]}
            </div>

            {/* 광주 */}
            <Image
              className={`absolute bottom-[328px] left-[160px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("guangju") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("guangju") ? "/guangju_clicked.svg" : "/guangju.svg"
              }
              width={53.77}
              height={62.49}
              alt="광주 지도"
              onClick={() => handleImageClick("guangju")}
            />
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "335px", left: "180px" }}
              onClick={() => handleImageClick("guangju")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["guangju"]}
            </div>
          </div>

          {/* 모바일 */}
          <div className="w-full h-[120px] my-10 sm:hidden flex items-center justify-center ">
            <div>
              <div className="text-[16px] text-center ">
                {courtData.label} 법원
                <br /> 평균 탕감률
              </div>
              <div className="text-[32px] font-semibold">
                {courtData.nationwide}
              </div>
            </div>
            <div className="w-[1px] h-[80px] bg-black mx-10"> </div>
            <div>
              <div className="text-[16px] text-[#D81C25] text-center">
                법무법인 스탠다드 <br /> 평균 탕감률
              </div>
              <div className="text-[32px] font-semibold text-[#D81C25]">
                {courtData.standard}
              </div>
            </div>
          </div>

          {/* 지도 이미지 및 텍스트 레이블 영역 (모바일) */}
          <div className="sm:hidden w-full h-full relative ">
            {/* 각 지역 이미지 및 해당 레이블 */}
            {/* 경기도 */}
            <Image
              className={`absolute top-[28.97px] left-[101.79px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("gyunggido") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("gyunggido")
                  ? "/gyunggido_clicked.svg"
                  : "/gyunggido.svg"
              }
              width={78.42}
              height={100.28}
              alt="경기도 지도"
              onClick={() => handleImageClick("gyunggido")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "48.97px", left: "103.79px" }}
              onClick={() => handleImageClick("gyunggido")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyunggido"]}
            </div>

            {/* 강원도 (사용자 요청에 따라 기존 로직 유지) */}
            <Image
              className={`absolute left-[131.21px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("gangwondo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("gangwondo")
                  ? "/gangwondo_clicked.svg"
                  : "/gangwondo.svg"
              }
              width={140.37}
              height={119.24}
              alt="강원도 지도"
              onClick={() => handleImageClick("gangwondo")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "50px", left: "191.21px" }}
              onClick={() => handleImageClick("gangwondo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gangwondo"]}
            </div>

            {/* 경상북도 */}
            <Image
              className={`absolute left-[178.05px] top-[109.98px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("gyungsangbookdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("gyungsangbookdo")
                  ? "/gyungsangbookdo_clicked.svg"
                  : "/gyungsangbookdo.svg"
              }
              width={106.9}
              height={116.44}
              alt="경상북도 지도"
              onClick={() => handleImageClick("gyungsangbookdo")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "159.98px", left: "218.05px" }}
              onClick={() => handleImageClick("gyungsangbookdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyungsangbookdo"]}
            </div>

            {/* 서울 */}
            <Image
              className={`absolute top-[69.26px] left-[117.63px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("seoul") ? "z-20 scale-115" : ""
              }`}
              src={isSelected("seoul") ? "/seoul_clicked.svg" : "/seoul.svg"}
              width={22.9}
              height={19.11}
              alt="서울 지도"
              onClick={() => handleImageClick("seoul")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "69.26px", left: "127.63px" }}
              onClick={() => handleImageClick("seoul")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["seoul"]}
            </div>

            {/* 충청북도 */}
            <Image
              className={`absolute top-[102.81px] left-[146.81px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("choongchungbookdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("choongchungbookdo")
                  ? "/choongchungbookdo_clicked.svg"
                  : "/choongchungbookdo.svg"
              }
              width={83.22}
              height={91.33}
              alt="충청북도 지도"
              onClick={() => handleImageClick("choongchungbookdo")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "122px", left: "156px" }}
              onClick={() => handleImageClick("choongchungbookdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["choongchungbookdo"]}
            </div>

            {/* 충청남도 */}
            <Image
              className={`absolute top-[115.69px] left-[76.38px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("choongchungnamdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("choongchungnamdo")
                  ? "/choongchungnamdo_clicked.svg"
                  : "/choongchungnamdo.svg"
              }
              width={92.96}
              height={79.74}
              alt="충청남도 지도"
              onClick={() => handleImageClick("choongchungnamdo")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "145px", left: "96px" }}
              onClick={() => handleImageClick("choongchungnamdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["choongchungnamdo"]}
            </div>

            {/* 대전 */}
            <Image
              className={`absolute top-[158.6px] left-[145.3px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("daejeon") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("daejeon") ? "/daejeon_clicked.svg" : "/daejeon.svg"
              }
              width={17.24}
              height={22.48}
              alt="대전 지도"
              onClick={() => handleImageClick("daejeon")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "158px", left: "145px" }}
              onClick={() => handleImageClick("daejeon")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["daejeon"]}
            </div>

            {/* 경상남도 */}
            <Image
              className={`absolute left-[164.06px] top-[202.62px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("gyungsangnamdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("gyungsangnamdo")
                  ? "/gyungsangnamdo_clicked.svg"
                  : "/gyungsangnamdo.svg"
              }
              width={99.4}
              height={92.18}
              alt="경상남도 지도"
              onClick={() => handleImageClick("gyungsangnamdo")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "234px", left: "182px" }}
              onClick={() => handleImageClick("gyungsangnamdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyungsangnamdo"]}
            </div>

            {/* 울산 */}
            <Image
              className={`absolute top-[215.15px] left-[250.51px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("ulsan") ? "z-20 scale-115" : ""
              }`}
              src={isSelected("ulsan") ? "/ulsan_clicked.svg" : "/ulsan.svg"}
              width={27.97}
              height={29.2}
              alt="울산 지도"
              onClick={() => handleImageClick("ulsan")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "215px", left: "250.51px" }}
              onClick={() => handleImageClick("ulsan")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["ulsan"]}
            </div>

            {/* 부산 */}
            <Image
              className={`absolute top-[230.78px] left-[238.8px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("busan") ? "z-20 scale-115" : ""
              }`}
              src={isSelected("busan") ? "/busan_clicked.svg" : "/busan.svg"}
              width={28.43}
              height={25.62}
              alt="부산 지도"
              onClick={() => handleImageClick("busan")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "235px", left: "242px" }}
              onClick={() => handleImageClick("busan")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["busan"]}
            </div>

            {/* 전라북도 */}
            <Image
              className={`absolute left-[95.29px] bottom-[183.22px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("junlabookdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("junlabookdo")
                  ? "/junlabookdo_clicked.svg"
                  : "/junlabookdo.svg"
              }
              width={89.08}
              height={62.82}
              alt="전라북도 지도"
              onClick={() => handleImageClick("junlabookdo")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "203px", left: "115px" }}
              onClick={() => handleImageClick("junlabookdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["junlabookdo"]}
            </div>

            {/* 전라남도 */}
            <Image
              className={`absolute top-[232.77px] left-[58.05px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("junlanamdo") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("junlanamdo")
                  ? "/junlanamdo_clicked.svg"
                  : "/junlanamdo.svg"
              }
              width={120.86}
              height={111.76}
              alt="전라남도 지도"
              onClick={() => handleImageClick("junlanamdo")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "270px", left: "100px" }}
              onClick={() => handleImageClick("junlanamdo")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["junlanamdo"]}
            </div>

            {/* 대구 */}
            <Image
              className={`absolute top-[194.01px] left-[211.87px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("daegu") ? "z-20 scale-115" : ""
              }`}
              src={isSelected("daegu") ? "/daegu_clicked.svg" : "/daegu.svg"}
              width={24.04}
              height={28.06}
              alt="대구 지도"
              onClick={() => handleImageClick("daegu")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "194px", left: "212px" }}
              onClick={() => handleImageClick("daegu")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["daegu"]}
            </div>

            {/* 광주 */}
            <Image
              className={`absolute top-[249.45px] left-[108.55px] cursor-pointer transition-all duration-300 ease-in-out ${
                isSelected("guangju") ? "z-20 scale-115" : ""
              }`}
              src={
                isSelected("guangju") ? "/guangju_clicked.svg" : "/guangju.svg"
              }
              width={21.6}
              height={14.21}
              alt="광주 지도"
              onClick={() => handleImageClick("guangju")}
            />
            <div
              className="absolute text-[10px] font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "249px", left: "108px" }}
              onClick={() => handleImageClick("guangju")}
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["guangju"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
