import styled from "styled-components";
import { pxToRem } from "@/utils/pxToRem";

export const Title = styled.h2`
  line-height: 1.4;
  font-size: ${pxToRem(44)};
  font-weight: 600;
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
