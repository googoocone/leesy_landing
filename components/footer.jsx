// Footer.jsx 또는 Footer.tsx 파일

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-t-md">
      <div className="flex flex-row">
        <a
          href="https://forms.gle/aCmtHkH8Y65PXPwp7"
          target="_blank"
          rel="noopener noreferrer" // 외부 링크 보안 및 SEO를 위해 추가
          className="flex items-center justify-center w-full px-4 py-5 bg-white text-[#fc555c] text-xl border-gray-300 border hover:text-white font-semibold text-center transition-colors duration-200 ease-in-out hover:bg-[#ef555c]  "
          // 모바일에서 두 버튼 사이에 구분을 주고 싶다면 border-t sm:border-t-0 sm:border-l border-gray-200 (또는 버튼 색상에 맞춰서) 추가 가능
        >
          <span>맞춤 상담신청</span>
        </a>
      </div>
    </footer>
  );
}
