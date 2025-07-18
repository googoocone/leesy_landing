import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import Script from "next/script"; // Script 컴포넌트를 import 합니다.

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "개인회생 전문 이서영변호사 ",
  description:
    "개인회생,개인파산 전문 이서영 변호사입니다. 10년간 오직 개인회생, 개인파산 분야의 사건만 맡아왔고 5천건 이상의 성공사례",
};

export default function RootLayout({ children }) {
  // GTM ID를 변수로 관리하면 편리합니다.
  const gtmId = "GTM-M9KFKK4K";

  return (
    <html lang="en">
      <body className={`${notoSansKR.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header></Header>
        {children}
        <Footer></Footer>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </body>
    </html>
  );
}
