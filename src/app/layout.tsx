import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "세줄일기 - 하루를 세 줄로 기록하세요",
  description: "매일 세 줄로 기록하는 특별한 순간들, 당신의 소중한 하루를 더 의미있게 만들어드립니다.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang || "ko"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
