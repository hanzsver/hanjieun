import styled from "styled-components";
import { pxToRem } from "@/utils/pxToRem";

export const Title = styled.h2`
  line-height: 1.4;
  font-size: ${pxToRem(44)};
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  line-height: 1.75;
  margin-bottom: ${pxToRem(20)};
  font-size: ${pxToRem(24)};
  font-weight: 700;
`;

export const HighlightChip = styled.em`
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

export const Limit = styled.div<{ size: "s" | "m" | "l" | "xl" }>`
  width: 100%;
  max-width: ${({ size }) => `var(--limit-${size})`};
  ${({ size }) => size === "xl" && "width: 88vw;"}
  margin: 0 auto;
`;

export const spacingMap = {
  s: pxToRem(20),
  m: pxToRem(40),
  l: pxToRem(80),
  xl: pxToRem(100),
};

export const Spacing = styled.div<{ size: keyof typeof spacingMap }>`
  margin-top: ${({ size }) => spacingMap[size]};
  margin-bottom: ${({ size }) => spacingMap[size]};
`;

export const Box = styled.div`
  line-height: 1.75;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  background-color: ${({ theme }) => theme.colors.box};
  border-radius: 8px;
  font-size: ${pxToRem(15)};
  font-weight: 400;
`;
