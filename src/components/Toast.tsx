"use client";

import styled from "styled-components";
import { keyframes } from "styled-components";

interface ToastProps {
  visible: boolean;
  message: string;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px); 
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(10px); 
  }
`;

const StyledToast = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88vw;
  max-width: var(--limit-m);
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(40px);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: var(--color-gray);
  animation: ${({ $visible }) => ($visible ? fadeInUp : fadeOutDown)} 0.3s ease
    forwards;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  background-color: #e6ffed;
  color: #2ecc71;
  border-radius: 8px;
`;

const Toast: React.FC<ToastProps> = ({ visible, message }) => {
  return (
    <StyledToast $visible={visible} role="alert">
      <IconWrapper>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <span className="sr-only">Check icon</span>
      </IconWrapper>
      <p>{message}</p>
    </StyledToast>
  );
};

export default Toast;
