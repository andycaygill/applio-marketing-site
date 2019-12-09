import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero.js";

const Wrapper = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};
