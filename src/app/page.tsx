"use client";

import { useState } from "react";
import { ThemeProvider, createGlobalStyle, styled } from "styled-components";
import { pxToRem } from "../utils/pxToRem";

// 동적 스타일
const lightTheme = {
  colors: {
    background: "var(--color-white)",
    text: "var(--color-gray-800)",
  },
};

const darkTheme = {
  colors: {
    background: "var(--color-gray-700)",
    text: "var(--color-white)",
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

const Limit = styled.div<{ size: "s" | "m" | "l" | "xl" }>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ size }) => `var(--limit-${size})`};
`;

const spacingMap = {
  s: pxToRem(20),
  m: pxToRem(40),
  l: pxToRem(80),
};

const Spacing = styled.div<{ size: keyof typeof spacingMap }>`
  padding-top: ${({ size }) => spacingMap[size]};
  padding-bottom: ${({ size }) => spacingMap[size]};
`;

// 개별 스타일
const ContactBar = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  background-color: var(--color-primary);
  border-radius: 0 0 8px 8px;
  color: var(--color-white);
  font-weight: 700;

  * + * {
    &::before {
      content: "";
      display: inline-block;
      width: ${pxToRem(1)};
      height: ${pxToRem(12)};
      margin: 0 ${pxToRem(16)};
      background-color: var(--color-white);
      opacity: 0.2;
    }
  }
`;

const SubContent = styled.div``;

const Title = styled.h2`
  line-height: 1.37;
  font-size: ${pxToRem(44)};
  font-weight: 600;
`;

const SubTitle = styled.h3`
  line-height: ${pxToRem(32)};
  margin-bottom: ${pxToRem(20)};
  font-size: ${pxToRem(24)};
  font-weight: 700;
`;

const HighlightChip = styled.em`
  padding: ${pxToRem(6)} ${pxToRem(12)};
  margin: 0 ${pxToRem(8)};
  border-radius: 8px;
  border: 1px solid var(--color-primary);
  font-style: normal;
  font-size: ${pxToRem(18)};
  color: var(--color-primary);
  vertical-align: text-bottom;

  &:first-of-type {
    margin-left: 0;
  }
`;

const Box = styled.div`
  line-height: 1.74;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  background-color: #f5f5f5;
  border-radius: 8px;
  font-size: ${pxToRem(15)};
  font-weight: 400;
`;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Limit as="main" size="xl">
        <SubContent>
          <Limit size="m" className="relative">
            {/* 상단 고정 바 */}
            <ContactBar className="font-ibm">
              <button type="button" onClick={toggleTheme}>
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <p>vot129@naver.com</p>
              <p>010-4198-1916</p>
            </ContactBar>
            {/* Title */}
            <Spacing size="l">
              <Spacing size="m">
                <Title>
                  한지은입니다. <br /> 한지은입니다.
                </Title>
              </Spacing>
              <Spacing size="m">
                <SubTitle>
                  5년 차 웹 퍼블리셔로 일하고 있으며,
                  <br />
                  <HighlightChip>트렌디하고 아름다운 인터페이스</HighlightChip>
                  와<HighlightChip>읽기 쉽고 효율적인 코드</HighlightChip>를
                  좋아합니다.
                </SubTitle>
              </Spacing>
              <Box>
                UI 컴포넌트화, 스타일 모듈화를 통해 반복 작업을 자동화하고,
                비효율적인 프로세스를 개선하여 코드 품질을 높이는 데 주력합니다.
                <br />
                단순한 HTML 마크업을 넘어 SPA/SSR 환경에서의 마크업 및 목업
                데이터 바인딩을 구현합니다.
                <br /> 두 회사에서 첫 퍼블리셔로 투입되어 팀 문화를 주도적으로
                형성한 경험이 있습니다. <br />
                적극적인 신기술 도입과 적합성 검토를 통해 팀원들의 기술 스택
                발전 및 경쟁력 강화를 위해 고민하고, 기여하고 싶습니다.
              </Box>
            </Spacing>
            {/* Skills */}
            <Spacing size="l">
              <SubTitle className="font-ibm">Skills</SubTitle>
            </Spacing>
          </Limit>
        </SubContent>
      </Limit>
    </ThemeProvider>
  );
}
