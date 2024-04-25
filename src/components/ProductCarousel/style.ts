import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin-top: 70px;
`;

export const Title = styled.h3`
  font-family: "Londrina Solid", sans-serif;
  color: #2a2a2a;
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Line = styled.div`
  background-color: #2a2a2a;
  height: 2px;
  width: 100%;
`;

export const Cards = styled.div`
  display: flex;
  column-gap: 30px;
  overflow: auto;
  overflow-y: hidden;
`;
