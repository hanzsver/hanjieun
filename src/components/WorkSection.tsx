"use client";

import styled from "styled-components";
import { Spacing, SubTitle } from "../styles/common";

const Left = styled.div`
  min-width: 240px;
`;

const Right = styled.div`
  width: 100%;
`;

const WorkSection = () => {
  return (
    <Spacing size="l">
      <Spacing size="l">
        <SubTitle className="font-ibm">Work Experiences</SubTitle>
      </Spacing>
      <div className="flex">
        <Left>
          <SubTitle>(주)애버커스</SubTitle>
        </Left>
        <Right>
          <SubTitle>무와니세코</SubTitle>
        </Right>
      </div>
    </Spacing>
  );
};

export default WorkSection;
