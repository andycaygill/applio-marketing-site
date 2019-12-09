import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => {
  return (
    <HeroContainer>
      <p>test</p>
      testing
    </HeroContainer>
  );
};
