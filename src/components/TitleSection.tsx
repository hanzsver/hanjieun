"use client";

import { Spacing, Title, SubTitle, HighlightChip, Box } from "../styles/common";

const TitleSection = () => {
  return (
    <Spacing size="l">
      <Spacing size="m">
        <Title>
          반갑습니다.
          <br />
          맡기면 편안한 웹 퍼블리셔,
          <br />
          한지은입니다.
        </Title>
      </Spacing>
      <Spacing size="m">
        <SubTitle>
          5년 차 웹 퍼블리셔로 일하고 있으며,
          <br />
          <HighlightChip>트렌디하고 아름다운 인터페이스</HighlightChip>와
          <HighlightChip>읽기 쉽고 효율적인 코드</HighlightChip>를 좋아합니다.
        </SubTitle>
      </Spacing>
      <Box>
        UI 컴포넌트화, 스타일 모듈화를 통해 반복 작업을 자동화하고, 비효율적인
        프로세스를 개선하여 코드 품질을 높이기 위해 노력합니다.
        <br />
        단순한 HTML 마크업을 넘어 SPA/SSR 환경에서의 마크업 및 목업 데이터
        바인딩을 구현합니다.
        <br /> 두 회사에서 첫 퍼블리셔로 투입되어 팀 문화를 주도적으로 형성한
        경험이 있습니다. 적극적인 신기술 도입과 적합성 검토를 통해 팀원들의 기술
        스택 발전 및 경쟁력 강화를 위해 고민하고, 기여하고자 합니다.
      </Box>
    </Spacing>
  );
};

export default TitleSection;
