import styled from "styled-components";

export const Container = styled.div`
  font-family: "Londrina Solid", sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 230px;
  margin-top: 70px;
  border-radius: 6px;
  border: 2px solid #2a2a2a;

  @media (min-width: 480px) {
    font-size: 24px;
    height: 300px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    height: 400px;
  }
`;
