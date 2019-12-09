import React from "react";
import styled from "styled-components";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";

const Wrapper = styled.div``;

export default () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Footer />
    </Wrapper>
  );
};
