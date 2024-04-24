import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fefef3;

  h2 {
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  font-family: "Londrina Solid", sans-serif;
  font-size: 24px;
  background-color: #2a2a2a;
  color: #ffffff;
  padding: 12px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
