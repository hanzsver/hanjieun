"use client";

import styled from "styled-components";
import { pxToRem } from "../utils/pxToRem";

// 동적 스타일
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
  margin-top: ${({ size }) => spacingMap[size]};
  margin-bottom: ${({ size }) => spacingMap[size]};
`;

// 개별 스타일
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const ContactBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

const SubContent = styled.div`
  margin: 135px 0;
`;

const Title = styled.h2`
  font-size: ${pxToRem(44)};
  font-weight: 600;
`;

const SubTitle = styled.h3`
  font-size: ${pxToRem(24)};
  font-weight: 600;
`;

export default function Home() {
  return (
    <Container>
      <ContactBar>이거슨 팝업</ContactBar>
      <Limit as="main" size="xl">
        <SubContent>
          <Limit size="m">
            {/* Title */}
            <Spacing size="l">
              <Spacing size="m">
                <Title>
                  대타이틀.
                  <br />
                  대타이틀 대타이틀 대타이틀대타이틀.
                </Title>
              </Spacing>
              <SubTitle>
                소타이틀 소타이틀 소타이틀,
                소타이틀소타이틀소타이틀소타이틀소타이틀소타이틀소타이틀소타이틀.
              </SubTitle>
            </Spacing>

            {/* Skills */}
            <Spacing size="l">
              <SubTitle>소타이틀</SubTitle>
            </Spacing>
          </Limit>
        </SubContent>
      </Limit>
    </Container>
  );
}
