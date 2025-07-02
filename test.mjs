        <div className="w-full h-full flex px-[116px] items-center justify-center gap-5">
          <div className="w-[230px] h-[500px] mb-20 flex flex-col items-center justify-center">
            <div className="text-[24px] text-center ">
              {courtData.label} 법원
              <br /> 평균 탕감률
            </div>
            <div className="text-[40px] font-semibold">
              {courtData.nationwide}
            </div>
            <div className="px-10 w-full h-[1px] border-black bg-black my-10"></div>
            <div className="text-[24px] text-[#D81C25] text-center">
              이서영변호사 <br /> 평균 탕감률
            </div>
            <div className="text-[40px] font-semibold text-[#D81C25]">
              {courtData.standard}
            </div>
          </div>

          {/* 지도 이미지 및 텍스트 레이블 영역 */}
          <div className="w-full h-full relative mt-20">
            {/* 각 지역 이미지 및 해당 레이블 */}
            {/* 경기도 */}
            <Image
              className={`absolute top-16 left-36.5 cursor-pointer transition-all duration-300 ease-in-out ${isSelected("gyunggido") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/gyunggido.svg"
              width={175.42}
              height={223.36}
              alt="경기도 지도"
              onClick={() => handleImageClick("gyunggido")} // 이미지 클릭 이벤트 유지
            ></Image>
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "125px", left: "180px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("gyunggido")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyunggido"]}
            </div>

            {/* 강원도 */}
            <Image
              className={`absolute right-8 cursor-pointer transition-all duration-300 ease-in-out ${isSelected("gangwondo") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/gangwondo.svg"
              width={314.02}
              height={265.57}
              alt="강원도 지도"
              onClick={() => handleImageClick("gangwondo")} // 이미지 클릭 이벤트 유지
            ></Image>
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "125px", right: "160px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("gangwondo")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gangwondo"]}
            </div>

            {/* 경상북도 */}
            <Image
              className={`absolute right-[2px] top-[243px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("gyungsangbookdo") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/gyungsangbookdo.svg"
              width={239.13}
              height={259.35}
              alt="경상북도 지도"
              onClick={() => handleImageClick("gyungsangbookdo")}
            ></Image>
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "335px", right: "80px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("gyungsangbookdo")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyungsangbookdo"]}
            </div>

            {/* 서울 */}
            <Image
              className={`absolute top-39 left-46 cursor-pointer transition-all duration-300 ease-in-out ${isSelected("seoul") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/seoul.svg"
              width={51.22}
              height={42.57}
              alt="서울 지도"
              onClick={() => handleImageClick("seoul")}
            ></Image>
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "175px", left: "195px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("seoul")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["seoul"]}
            </div>

            {/* 충청북도 */}
            <Image
              className={`absolute top-[227px] left-61.5 cursor-pointer transition-all duration-300 ease-in-out ${isSelected("choongchungbookdo") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/choongchungbookdo.svg"
              width={186.17}
              height={203.43}
              alt="충청북도 지도"
              onClick={() => handleImageClick("choongchungbookdo")}
            ></Image>
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "285px", left: "280px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("choongchungbookdo")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["choongchungbookdo"]}
            </div>

            {/* 충청남도 */}
            <Image
              className={`absolute top-[254px] left-22.5 cursor-pointer transition-all duration-300 ease-in-out ${isSelected("choongchungnamdo") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/choongchungnamdo.svg"
              width={207.96}
              height={177.6}
              alt="충청남도 지도"
              onClick={() => handleImageClick("choongchungnamdo")}
            ></Image>
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "325px", left: "160px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("choongchungnamdo")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["choongchungnamdo"]}
            </div>

            {/* 대전 */}
            <Image
              className={`absolute top-[350.5px] left-[244px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("daejeon") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/daejeon.svg"
              width={38.58}
              height={50.07}
              alt="대전 지도"
              onClick={() => handleImageClick("daejeon")}
            ></Image>
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ top: "365px", left: "250px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("daejeon")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["daejeon"]}
            </div>

            {/* 경상남도 */}
            <Image
              className={`absolute bottom-[270px] right-[49.5px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("gyungsangnamdo") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/gyungsangnamdo.svg"
              width={222.37}
              height={205.31}
              alt="경상남도 지도"
              onClick={() => handleImageClick("gyungsangnamdo")}
            ></Image>
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "367px", right: "150px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("gyungsangnamdo")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["gyungsangnamdo"]}
            </div>

            {/* 울산 */}
            <Image
              className={`absolute bottom-[382px] right-[17.5px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("ulsan") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/ulsan.svg"
              width={62.57}
              height={65.03}
              alt="울산 지도"
              onClick={() => handleImageClick("ulsan")}
            ></Image>
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "414px", right: "30px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("ulsan")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["ulsan"]}
            </div>

            {/* 부산 */}
            <Image
              className={`absolute bottom-[338px] right-[41.5px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("busan") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/busan.svg"
              width={63.61}
              height={57.06}
              alt="부산 지도"
              onClick={() => handleImageClick("busan")}
            ></Image>
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "350px", right: "50px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("busan")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["busan"]}
            </div>

            {/* 전라북도 */}
            <Image
              className={`absolute bottom-[378.2px] left-[132.5px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("junlabookdo") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/junlabookdo.svg"
              width={199.27}
              height={139.92}
              alt="전라북도 지도"
              onClick={() => handleImageClick("junlabookdo")}
            ></Image>
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "435px", left: "200px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("junlabookdo")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["junlabookdo"]}
            </div>

            {/* 전라남도 */}
            <Image
              className={`absolute bottom-[159px] left-[49px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("junlanamdo") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/junlanamdo.svg"
              width={270.37}
              height={248.92}
              alt="전라남도 지도"
              onClick={() => handleImageClick("junlanamdo")}
            ></Image>
            <div
              className="absolute text-sm font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "200px", left: "150px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("junlanamdo")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["junlanamdo"]}
            </div>

            {/* 대구 */}
            <Image
              className={`absolute bottom-[432px] right-[110px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("daegu") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/daegu.svg"
              width={53.77}
              height={62.49}
              alt="대구 지도"
              onClick={() => handleImageClick("daegu")} // 이미지 클릭 이벤트 유지
            ></Image>
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "455px", right: "120px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("daegu")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["daegu"]}
            </div>

            {/* 광주 */}
            <Image
              className={`absolute bottom-[328px] left-[160px] cursor-pointer transition-all duration-300 ease-in-out ${isSelected("guangju") ? "border-2 border-red-500 z-20 shadow-xl scale-105" : ""}`}
              src="/guangju.svg"
              width={53.77}
              height={62.49}
              alt="광주 지도"
              onClick={() => handleImageClick("guangju")} // 이미지 클릭 이벤트 유지
            ></Image>
            <div
              className="absolute text-xs font-semibold text-gray-800 z-50 cursor-pointer"
              style={{ bottom: "335px", left: "180px" }} // 위치 조정 값 반영됨
              onClick={() => handleImageClick("guangju")} // 레이블 클릭 이벤트 추가
            >
              {IMAGE_KEY_TO_DISPLAY_LABEL["guangju"]}
            </div>
          </div>
          
        </div>