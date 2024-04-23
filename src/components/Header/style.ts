import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2a2a2a;
  width: 100%;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 160px;
  width: 98%;
`;

export const StyledLink = styled(Link)<{ active?: boolean }>`
  height: 68px;
  font-family: "Londrina Solid", sans-serif;
  font-size: 28px;
  color: #ffffff;
  text-transform: uppercase;
  border: 2px solid ${(props) => (props.active ? "#ffffff;" : "transparent;")}
  border-radius: 36px;
  padding: 16px;
  transition: 0.4s;

  ${(props) => (props.active ? "" : "&:hover { border: 2px solid #ffffff; }")}
`;
