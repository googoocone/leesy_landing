// components/YouTubeVideoPlayer.js
import React, { useState } from "react";
import Image from "next/image"; // Next.js의 Image 컴포넌트 사용 시, 아니면 일반 <img> 태그 사용

const YouTubeVideoPlayer = ({ videoId, title }) => {
  const [showVideo, setShowVideo] = useState(false);

  // googleusercontent.com/youtube.com/[ID] 형태의 URL을 직접 사용하거나,
  // 표준 YouTube 임베드 URL을 사용합니다. 여기서는 표준 URL을 사용합니다.
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  if (showVideo) {
    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={title || `YouTube video player for ID ${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div
      className="relative aspect-video w-full cursor-pointer group bg-black"
      onClick={handlePlayClick}
    >
      {/* Next.js Image 컴포넌트 사용 시 */}
      <Image
        src={thumbnailUrl}
        alt={title || `Thumbnail for YouTube video ID ${videoId}`}
        layout="fill"
        objectFit="cover"
        className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        priority={false} // 중요도에 따라 true/false 설정
      />
      {/* 일반 <img> 태그 사용 시
      <img
        src={thumbnailUrl}
        alt={title || `Thumbnail for YouTube video ID ${videoId}`}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy" // 이미지 지연 로딩
      />
      */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-16 h-16 text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs md:text-sm truncate">
          {title}
        </div>
      )}
    </div>
  );
};

export default YouTubeVideoPlayer;
