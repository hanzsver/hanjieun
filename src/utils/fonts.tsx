import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

const cls = (...classnames: string[]) => classnames.join(" ");

export const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const FontClassNames = cls(ibmPlexMono.className, pretendard.className);
