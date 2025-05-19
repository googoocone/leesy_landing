import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
  return (
    <html lang="en">
      <body className={`${notoSansKR.className} antialiased`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
