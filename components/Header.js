import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 20px;
  width: 100%;
  position: absolute;
`;

const HeaderContent = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
  }
`;

const HeaderLinks = styled.div`
  font-weight: 700;

  a {
    display: inline-block;
    padding: 0 10px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="./images/logo.svg" alt="Applio Logo" />
        {/* <HeaderLinks>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </HeaderLinks> */}
      </HeaderContent>
    </HeaderContainer>
  );
}
