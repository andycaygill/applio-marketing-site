import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  align-items: center;
`;

const FooterCopy = styled.p`
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterCopy>
        &copy; {new Date().getFullYear()} Applio. All Rights Reserved.
      </FooterCopy>
      <img src="./images/logo-dark.svg" alt="Applio Logo" />
    </FooterContainer>
  );
}
