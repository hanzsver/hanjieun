"use client";

import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Limit, Spacing } from "../styles/common";
import ContactBar from "../components/ContactBar";
import TitleSection from "../components/TitleSection";
import WorkSection from "../components/WorkSection";
import Toast from "../components/Toast";

// 동적 스타일
const lightTheme = {
  colors: {
    background: "var(--color-white)",
    text: "var(--color-gray-800)",
    box: "var(--color-gray-100)",
  },
};

const darkTheme = {
  colors: {
    background: "var(--color-gray-700)",
    text: "var(--color-white)",
    box: "var(--color-gray-600)",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-family: var(--font-pretendard);
    font-smoothing: antialiased;
    transition: background-color 0.3s ease, color 0.3s ease;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }
`;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copyMessage, setCopyMessage] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage(true);
      setTimeout(() => setCopyMessage(false), 2000);
    });
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Limit as="main" size="xl">
        <Limit size="m" className="relative">
          {/* ==================== Contact Bar ==================== */}
          <ContactBar
            onThemeToggle={toggleTheme}
            copyToClipboard={copyToClipboard}
            isDarkMode={isDarkMode}
          />
          <Spacing size="xl">
            {/* ==================== Title ==================== */}
            <TitleSection />

            {/* Work Experiences */}
            <WorkSection />

            {/* Skills */}
            {/* <SkillsSection /> */}
            {/* Other Experiences */}
            {/* <OtherSection /> */}

            {/* Education */}
            {/* <EduSection /> */}
          </Spacing>
        </Limit>

        {/* ==================== Toast ==================== */}
      </Limit>
      <Toast visible={copyMessage} message="복사되었습니다!" />
    </ThemeProvider>
  );
}
