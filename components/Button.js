import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-block;
  background-image: linear-gradient(90deg, #3fc6f3 0%, #fde006 100%);
  border-radius: 25px;
  font-size: 1.6rem;
  color: #ffffff;
  text-align: center;
  padding: 10px 35px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const Button = props => (
  <Link href={props.path}>
    <StyledButton>{props.children}</StyledButton>
  </Link>
);

export default Button;
