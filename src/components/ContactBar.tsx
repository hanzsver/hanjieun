"use client";

import styled from "styled-components";
import { pxToRem } from "../utils/pxToRem";

interface ContactBarProps {
  onThemeToggle: () => void;
  copyToClipboard: (text: string) => void;
  isDarkMode: boolean;
}

const StyledContactBar = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: max-content;
  margin-left: auto;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  background-color: var(--color-primary);
  border-radius: 0 0 8px 8px;
  color: var(--color-white);
  font-size: 15px;
  font-weight: 600;

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

const ContactBar = ({
  onThemeToggle,
  copyToClipboard,
  isDarkMode,
}: ContactBarProps) => {
  return (
    <StyledContactBar className="font-ibm">
      <button type="button" onClick={onThemeToggle}>
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
            width="20"
            height="20"
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
      <div>
        <button
          type="button"
          onClick={() => copyToClipboard("vot129@naver.com")}
        >
          vot129@naver.com
        </button>
      </div>
      <div>
        <button type="button" onClick={() => copyToClipboard("010-4198-1916")}>
          010-4198-1916
        </button>
      </div>
    </StyledContactBar>
  );
};

export default ContactBar;
