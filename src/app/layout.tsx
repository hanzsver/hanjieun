import { Metadata } from "next";
import { ibmPlexMono } from "../utils/fonts";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "웹 퍼블리셔 한지은",
  description: "웹 퍼블리셔 한지은의 이력서입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
