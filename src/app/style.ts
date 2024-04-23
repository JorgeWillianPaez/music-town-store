import styled from "styled-components";
import Image from "../../public/not-found.png";

export const Container = styled.div`
  background-image: url(${Image.src});
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
  width: 100%;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 30px;
  left: 42%;

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
  width: 100%;
`;
