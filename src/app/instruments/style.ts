import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2a2a2a;
  width: 100%;

  @media (min-width: 1024px) {
    height: 500px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 100px;
  margin-top: 50px;

  p {
    color: #ffffff;
    margin-bottom: 40px;
  }

  button {
    width: fit-content;
  }

  @media (min-width: 1024px) {
    margin-top: 0px;
    p {
      width: 70%;
      margin-bottom: 0px;
    }
  }
`;

export const InstrumentsImageTag = styled(Image)`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;
