// Footer.jsx 또는 Footer.tsx 파일

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-t-md">
      {/* shadow-t-md는 위쪽에 그림자 효과를 주기 위한 예시 클래스입니다. 
        Tailwind CSS에 기본으로 없는 유틸리티일 수 있으니, 
        필요하시면 tailwind.config.js에 직접 추가하시거나 다른 그림자 클래스를 사용하세요.
        예: 'shadow-[-0px_-2px_6px_-1px_rgba(0,0,0,0.1)]'
        간단하게는 border-t border-gray-200 등을 사용할 수도 있습니다.
      */}
      <div className="flex flex-row">
        <a
          href="https://docs.google.com/forms/d/1UzYXWglJT6K19UVGlVrikLyr5EilzQfbNPqxsb5QF7g/edit"
          target="_blank"
          rel="noopener noreferrer" // 외부 링크 보안 및 SEO를 위해 추가
          className="flex items-center justify-center w-full px-4 py-3 bg-white text-[#fc555c] border-gray-300 border hover:text-white font-semibold text-center transition-colors duration-200 ease-in-out hover:bg-[#ef555c]  "
          // 모바일에서 두 버튼 사이에 구분을 주고 싶다면 border-t sm:border-t-0 sm:border-l border-gray-200 (또는 버튼 색상에 맞춰서) 추가 가능
        >
          {/* 아이콘을 추가하고 싶다면 여기에 (예: 메시지 또는 설문지 아이콘) */}
          <span>맞춤 상담신청</span>
        </a>
      </div>
    </footer>
  );
}
