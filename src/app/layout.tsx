"use client";

import { ibmPlexMono } from "./styles/fonts";
import "./globals.css";

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
