import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2a2a2a;
  width: 100%;
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 480px) {
    display: none;
  }
`;

export const MobileNavLinks = styled.nav<{ active?: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const CloseHamburgerMenu = styled.button`
  border: 2px solid #ffffff;
  border-radius: 28px;
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  margin-top: 15px;
  width: 50px;
  height: 50px;
`;

export const NavLinks = styled.nav`
  display: none;
  width: 96%;

  @media (min-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110px;
  }

  @media (min-width: 768px) {
    width: 90%;
    height: 160px;
  }
`;

export const StyledLink = styled(Link)<{ active?: boolean }>`
  height: ${(props) => (props.active ? "44px" : "42px")};
  font-family: "Londrina Solid", sans-serif;
  font-size: 16px;
  color: #ffffff;
  text-transform: uppercase;
  border: 2px solid ${(props) => (props.active ? "#ffffff;" : "transparent;")};
  border-radius: 36px;
  padding: 10px;
  transition: 0.4s;

  ${(props) => (props.active ? "" : "&:hover { border: 2px solid #ffffff; }")}

  @media (min-width: 768px) {
    height: 68px;
    font-size: 26px;
    padding: 16px;
  }
`;
