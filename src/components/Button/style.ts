import styled from "styled-components";

export const ButtonElement = styled.button<{ theme?: string }>`
  font-family: "Londrina Solid", sans-serif;
  font-size: 18px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#ffffff" : "#2a2a2a"};
  border: 2px solid transparent;
  border-radius: 50px;
  padding: 16px;
  text-transform: uppercase;
  color: ${(props) => (props.theme === "dark" ? "#2a2a2a" : "#ffffff")};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a2a2a" : "#ffffff"};
    border: 2px solid
      ${(props) => (props.theme === "dark" ? "#ffffff" : "#2a2a2a")};
    color: ${(props) => (props.theme === "dark" ? "#ffffff" : "#2a2a2a")};
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
