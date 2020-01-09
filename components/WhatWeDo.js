import React from "react";
import styled from "styled-components";

const WhatWeDoContainer = styled.div`
  background-color: var(--applio-dark-blue);
  background-image: url("./images/hero-bg.png"),
    linear-gradient(135deg, #24195a 0%, #3a55a4 100%);
  background-size: 110%, auto;
  background-repeat: no-repeat;
  background-position: bottom center;
  color: #fff;
`;

const HeroContent = styled.div`
  @media (min-width: 900px) {
    padding: 80px 0 50px;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3rem;

  @media (min-width: 900px) {
    font-size: 4.5rem;
  }
`;

const HeroSubHeading = styled.p`
  font-size: 2.2rem;
`;

export default () => {
  return (
    <WhatWeDoContainer>
      <HeroContent>
        <div>
          <HeroHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </HeroHeading>
          <HeroSubHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in risus id est malesuada facilisis.
          </HeroSubHeading>
          <Button path="#">Book a demo</Button>
        </div>
        <img src="./images/hero-image.svg" alt="Applio" />
      </HeroContent>
    </WhatWeDoContainer>
  );
};
