// src/components/Section5.jsx 또는 .tsx 파일
"use client";

import React, { useState } from "react"; // useState import
import Image from "next/image";

// 1. 각 지역별 평균 탕감률 데이터 구조화
const REPAYMENT_RATES_DATA = {
  전국: { nationwide: "51.20%", standard: "51.20%", label: "전국" }, // 기본값 및 전국 평균
  수원회생법원: { nationwide: "46.9%", standard: "64.3%", label: "수원" },
  서울회생법원: { nationwide: "54.3%", standard: "67.91%", label: "서울" },
  대전지방법원: { nationwide: "57.9%", standard: "60.24%", label: "대전" },
  인천지방법원: { nationwide: "43.5%", standard: "65.54%", label: "인천" },
  부산지방법원: { nationwide: "45.8%", standard: "62.44%", label: "부산" },
  춘천지방법원: { nationwide: "43.4%", standard: "49.64%", label: "춘천" },
  제주지방법원: { nationwide: "62.4%", standard: "59.26%", label: "제주" },
  광주지방법원: { nationwide: "57.8%", standard: "51.0%", label: "광주" },
  전주지방법원: { nationwide: "66.2%", standard: "61.39%", label: "전주" },
  대구지방법원: { nationwide: "38.9%", standard: "63.18%", label: "대구" },
  의정부지방법원: { nationwide: "58.22%", standard: "64.12%", label: "의정부" },
  창원지방법원: { nationwide: "47.9%", standard: "48.40%", label: "창원" },
  청주지방법원: { nationwide: "39.3%", standard: "55.80%", label: "청주" },
  // 여기에 다른 법원 데이터를 추가할 수 있습니다.
};

// 2. 이미지 파일 이름과 법원 데이터 키 매칭
// 각 이미지 클릭 시 어떤 법원 데이터를 보여줄지 정의합니다.
// 이미지 이름 (확장자 제외)을 키로 사용하고, REPAYMENT_RATES_DATA의 법원 이름을 값으로 사용합니다.
// 주의: 하나의 이미지에 여러 법원이 걸쳐있을 경우 대표 법원 하나만 연결합니다.
const IMAGE_KEY_TO_COURT_MAP = {
  seoul: "서울회생법원",
  daejeon: "대전지방법원",
  busan: "부산지방법원",
  junlabookdo: "전주지방법원", // 전북 -> 전주지방법원 (도청 소재지)
  choongchungbookdo: "청주지방법원", // 충북 -> 청주지방법원 (도청 소재지)
  gangwondo: "춘천지방법원", // 강원 -> 춘천지방법원 (도청 소재지)
  // gyunggido (경기도)는 수원, 의정부, 인천 등 여러 법원이 있지만 대표로 '수원' 연결
  gyunggido: "수원회생법원",
  // choongchungnamdo (충남)은 대전지방법원 관할과 일부 겹칠 수 있지만, 여기서는 대전 이미지 클릭에 우선권을 줍니다. 충남도 자체 클릭 시에는 대전으로 연결
  choongchungnamdo: "대전지방법원",
  // gyungsangbookdo (경북)은 대구지방법원 관할과 일부 겹칠 수 있지만, 여기서는 대구 이미지가 없으므로 경북 클릭 시 대구로 연결
  gyungsangbookdo: "대구지방법원",
  // gyungsangnamdo (경남)은 창원, 부산, 울산 등과 관련될 수 있지만, 대표로 '창원' 연결. 부산/울산은 별도 이미지 사용
  gyungsangnamdo: "창원지방법원",
  daegu: "대구지방법원",
  ulsan: "부산지방법원", // 울산 데이터는 없으나, 클릭 가능하므로 근처 부산 데이터로 연결
  junlanamdo: "광주지방법원", // 전남은 광주지방법원 관할과 관련. 전남 클릭 시 광주 연결
  guangju: "광주지방법원",
  // 제주지방법원, 의정부지방법원은 현재 이미지 목록에 명확히 매칭되는 개별 이미지가 없으므로 클릭 상호작용에서 제외됩니다.
};

const Section5 = () => {
  // 3. 상태 관리: 현재 선택된 법원 이름을 저장
  const [selectedCourt, setSelectedCourt] = useState("전국"); // 초기값은 '전국'

  // 선택된 법원의 데이터 가져오기 (만약 선택된 법원 데이터가 없으면 전국 데이터 사용)
  const courtData =
    REPAYMENT_RATES_DATA[selectedCourt] || REPAYMENT_RATES_DATA["전국"];

  // 맵의 특정 지역 이미지 클릭 시 호출될 함수
  const handleImageClick = (imageKey) => {
    // 이미지 키에 매칭되는 법원 이름 가져오기
    const courtName = IMAGE_KEY_TO_COURT_MAP[imageKey];

    if (courtName) {
      // REPAYMENT_RATES_DATA에 해당 courtName이 존재하는지 확인 후 업데이트
      if (REPAYMENT_RATES_DATA[courtName]) {
        setSelectedCourt(courtName);
        console.log(`Clicked ${imageKey}, showing data for ${courtName}`); // 확인용 로그
      } else {
        console.warn(
          `Data for court "${courtName}" mapped from image "${imageKey}" not found in REPAYMENT_RATES_DATA.`
        );
        // 데이터 없는 법원 이름일 경우 처리 (예: 전국으로 리셋 또는 아무것도 안 함)
        setSelectedCourt("전국"); // 데이터 없는 지역 클릭 시 전국 평균 표시
      }
    } else {
      // IMAGE_KEY_TO_COURT_MAP에 정의되지 않은 이미지 클릭 시 처리
      console.warn(`No court mapping found for image key "${imageKey}".`);
      setSelectedCourt("전국"); // 매핑 안된 이미지 클릭 시 전국 평균 표시
    }
  };

  return (
    <div className="w-full h-[1700px] bg-[#f7f7f7] text-[#202020] flex flex-col items-center justify-center">
      <div className="text-center text-[40px] font-semibold ">
        <div>저는 어쩌다 한번 잘된 케이스를 가지고</div>
        <div>광고에 활용하고 있지 않습니다</div>
        <div className="text-[18px] font-normal mt-5">
          어떤 변호사도 전체 데이터를 공개하지 않습니다.
        </div>
      </div>

      <div className="w-[980px] h-[1000px] shadow-lg rounded-3xl mt-20 flex flex-col items-center justify-between bg-white">
        {" "}
        {/* 배경색 추가 */}
        <div className="w-full h-[84px] text-[24px] flex items-center justify-center font-semibold text-white rounded-t-3xl bg-[#5e5959]">
          {/* 선택된 지역 이름 표시 */}
          {courtData.label}{" "}
          {courtData.label !== "전국" ? "평균 탕감률" : "시•도별 평균 탕감률"}
        </div>
        <div className="w-full h-full flex px-[116px] items-center justify-center gap-5">
          {" "}
          {/* px-[116px]는 좌우 여백 */}
          {/* 평균 탕감률 표시 영역 */}
          <div className="w-[230px] h-[500px] mb-20 flex flex-col items-center justify-center">
            <div className="text-[24px] text-center">
              {/* 선택된 지역 또는 전국 평균 레이블 */}
              {courtData.label}
              <br /> 평균 탕감률
            </div>
            {/* 전국 평균 탕감률 표시 (선택된 지역의 전국 평균) */}
            <div className="text-[40px] font-semibold">
              {courtData.nationwide}
            </div>

            <div className="px-10 w-full h-[1px] border-black bg-black my-10"></div>

            <div className="text-[24px] text-[#D81C25] text-center">
              이서영변호사 <br /> 평균 탕감률
            </div>
            {/* 변호사 평균 탕감률 표시 (선택된 지역의 변호사 평균) */}
            <div className="text-[40px] font-semibold text-[#D81C25]">
              {courtData.standard}
            </div>
          </div>
          {/* 지도 이미지 영역 (개별 이미지들 사용) */}
          <div className="w-full h-full relative border-white border">
            {" "}
            {/* 부모 Relative 컨테이너 */}
            {/* 각 지역 Image 컴포넌트에 onClick 이벤트 핸들러 추가 */}
            <Image
              className="absolute cursor-pointer top-16 left-36.5"
              src="/gyunggido.svg"
              width={175.42}
              height={223.36}
              alt="경기도 지도" // alt 속성 추가 권장
              onClick={() => handleImageClick("gyunggido")} // 클릭 이벤트 연결
            ></Image>
            <Image
              className="absolute cursor-pointer right-7"
              src="/gangwondo.svg"
              width={314.02}
              height={265.57}
              alt="강원도 지도"
              onClick={() => handleImageClick("gangwondo")} // 클릭 이벤트 연결
            ></Image>
            <Image
              className="absolute cursor-pointer right-0 top-61"
              src="/gyungsangbookdo.svg"
              width={239.13}
              height={259.35}
              alt="경상북도 지도"
              onClick={() => handleImageClick("gyungsangbookdo")} // 클릭 이벤트 연결
            ></Image>
            {/* 서울 */}
            <Image
              className="absolute cursor-pointer top-39 left-46"
              src="/seoul.svg"
              width={51.22}
              height={42.57}
              alt="서울 지도"
              onClick={() => handleImageClick("seoul")} // 클릭 이벤트 연결
            ></Image>
            <Image
              className="absolute cursor-pointer top-57 left-61.5"
              src="/choongchungbookdo.svg"
              width={186.17}
              height={203.43}
              alt="충청북도 지도"
              onClick={() => handleImageClick("choongchungbookdo")} // 클릭 이벤트 연결
            ></Image>
            <Image
              className="absolute cursor-pointer top-64 left-22.5"
              src="/choongchungnamdo.svg"
              width={207.96}
              height={177.6}
              alt="충청남도 지도"
              onClick={() => handleImageClick("choongchungnamdo")} // 클릭 이벤트 연결
            ></Image>
            {/* 대전 */}
            <Image
              className="absolute cursor-pointer top-[351.5px] left-[244px]"
              src="/daejeon.svg"
              width={38.58}
              height={50.07}
              alt="대전 지도"
              onClick={() => handleImageClick("daejeon")} // 클릭 이벤트 연결
            ></Image>
            {/* 경상남도 */}
            <Image
              className="absolute cursor-pointer bottom-[267px] right-[47px]"
              src="/gyungsangnamdo.svg"
              width={222.37}
              height={205.31}
              alt="경상남도 지도"
              onClick={() => handleImageClick("gyungsangnamdo")} // 클릭 이벤트 연결
            ></Image>
            {/* 울산 */}
            <Image
              className="absolute cursor-pointer bottom-[379px] right-[15px]"
              src="/ulsan.svg"
              width={62.57}
              height={65.03}
              alt="울산 지도"
              onClick={() => handleImageClick("ulsan")} // 클릭 이벤트 연결 (울산 데이터는 없지만, 근처 부산 데이터로 연결)
            ></Image>
            {/* 부산 */}
            <Image
              className="absolute cursor-pointer bottom-[335px] right-[40px]"
              src="/busan.svg"
              width={63.61}
              height={57.06}
              alt="부산 지도"
              onClick={() => handleImageClick("busan")} // 클릭 이벤트 연결
            ></Image>
            {/* 전라북도 */}
            <Image
              className="absolute cursor-pointer bottom-[375px] left-[133px]"
              src="/junlabookdo.svg"
              width={199.27}
              height={139.92}
              alt="전라북도 지도"
              onClick={() => handleImageClick("junlabookdo")} // 클릭 이벤트 연결
            ></Image>
            {/* 전라남도 */}
            <Image
              className="absolute cursor-pointer bottom-[156px] left-[50px]"
              src="/junlanamdo.svg"
              width={270.37}
              height={248.92}
              alt="전라남도 지도"
              onClick={() => handleImageClick("junlanamdo")} // 클릭 이벤트 연결
            ></Image>
            <Image
              className="absolute cursor-pointer bottom-[428px] right-[110px]"
              src="/daegu.svg"
              width={53.77}
              height={62.49}
              alt="대구 지도"
              onClick={() => handleImageClick("daegu")} // 클릭 이벤트 연결
            ></Image>
            <div className="absolute bottom-[328px] left-[160px] z-10">
              광주
            </div>
            <Image
              className="absolute cursor-pointer bottom-[328px] left-[160px]"
              src="/guangju.svg"
              width={53.77}
              height={62.49}
              alt="광주 지도"
              onClick={() => handleImageClick("guangju")} // 클릭 이벤트 연결
            ></Image>
            {/* 참고: 제주지방법원, 의정부지방법원, 인천지방법원, 창원지방법원, 대구지방법원 등은 개별 이미지 없거나 다른 큰 이미지에 포함되어 있어 이 코드로는 직접 클릭하여 데이터 표시가 어렵습니다. 해당 지역 이미지를 추가하거나, 클릭 영역을 더 세분화해야 합니다. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
