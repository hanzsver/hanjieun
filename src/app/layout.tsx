"use client";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import localFont from "next/font/local";
import "./globals.css";

const theme = {
  colors: {
    background: "#f0f0f0",
    text: "#333",
    primary: "#0070f3",
  },
};

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
