import styled from "styled-components";

export const ButtonElement = styled.button`
  font-family: "Londrina Solid", sans-serif;
  font-size: 24px;
  background-color: #ffffff;
  border: 2px solid transparent;
  border-radius: 50px;
  padding: 16px;
  text-transform: uppercase;
  color: #2a2a2a;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #2a2a2a;
    border: 2px solid #ffffff;
    color: #ffffff;
  }
`;
