// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // 프로젝트 파일 구조에 맞게 content 경로를 설정해주세요.
  ],
  theme: {
    extend: {
      // 여기에 애니메이션과 키프레임 추가
      animation: {
        bobbing: "bobbing 3s ease-in-out infinite", // 'bobbing'이라는 이름의 애니메이션 정의
      },
      keyframes: {
        bobbing: {
          "0%, 100%": { transform: "translateY(-6px)" }, // 시작과 끝: 살짝 위로
          "50%": { transform: "translateY(0px)" }, // 중간: 원래 위치 (또는 살짝 아래로 translateY(6px)도 가능)
        },
      },
      // 다른 extend 설정들...
    },
  },
  plugins: [],
};
