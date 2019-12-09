import App from "next/app";
import React from "react";
import Head from "next/head";
import "../public/css/normalize.css";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

const CSSVaribles = createGlobalStyle`
  :root {
    --applio-dark-blue: #24195a;
    --applio-royal-blue: #3a55a4;
    --applio-bright-blue: #3fc6f3;
    --applio-light-blue: #70cde8;
    --applio-purple: #5952a2;
    --applio-pink: #cf4e9c;
    --applio-yellow: #fde006;
    --applio-red: #bd2c2c;
    --applio-light-grey: #dedede;
    --applio-grey: #c9c9c9;
    --applio-off-white: #f9f9f9;
    --applio-font: "Montserrat", sans-serif;
    --applio-container-width: '1200px'
  }
`;

const BoxModelDefaults = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  `;

const TypographyDefaults = createGlobalStyle`

  html {
    font-size: 62.5%;
    min-width: 320px;
  }

  body,
  input,
  select,
  textarea {
    color: var(--applio-dark-blue);
    font-family: var(--applio-font);
    font-size: 1.6rem;
    line-height: 1.7;
  }

  a {
    color: var(--applio-bright-blue);
    text-decoration: none;

    &:hover {
      color: var(--applio-purple);
      text-decoration: underline;
    }

  }

  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }

  p {
    margin: 0 0 20px 0;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    font-weight: 700;
    line-height: 1.3;
    margin: 0 0 20px 0;

    a {
      color: inherit;
      border-bottom: 0;
    }
  }

  h1,
  .h1 {
    font-size: 4.8rem;
    line-height: 1.2;
  }

  h2,
  .h2 {
    font-size: 3.5rem;
  }

  h3,
  .h3 {
    font-size: 2.8rem;
  }

  h4,
  .h4 {
    font-size: 2rem;
  }

  h5,
  .h5 {
    font-size: 1.5rem;
  }

  h6,
  .h6 {
    font-size: 1.2rem;
  }

  sub {
    font-size: 0.8rem;
    position: relative;
    top: 0.5rem;
  }

  sup {
    font-size: 0.8rem;
    position: relative;
    top: -0.5rem;
  }

  hr {
    border: 0;
    border-bottom: solid var(--applio-purple);
    margin: 20px 0;
  }

`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <CSSVaribles />
        <BoxModelDefaults />
        <TypographyDefaults />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
