// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 다른 Next.js 설정이 있다면 여기에 유지합니다 (예: reactStrictMode, images 등)
  // reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 기존 웹팩 설정을 수정합니다.

    // SVG 파일을 React 컴포넌트로 불러오기 위한 SVGR 로더 설정
    config.module.rules.push({
      test: /\.svg$/i, // .svg 확장자를 가진 파일에 적용
      issuer: /\.[jt]sx?$/, // .js, .jsx, .ts, .tsx 파일에서 import 하는 경우에만 해당 로더를 사용
      resourceQuery: { not: /url/ }, // 예: import logoUrl from './logo.svg?url'; 과 같이 ?url이 붙은 경우는 제외
      use: ['@svgr/webpack'], // @svgr/webpack 로더 사용
    });

    return config;
  },
};

export default nextConfig;