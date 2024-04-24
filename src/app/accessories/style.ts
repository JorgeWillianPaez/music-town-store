import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2a2a2a;
  width: 100%;
  height: 500px;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 90%;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 100px;

  p {
    width: 70%;
    color: #ffffff;
  }

  button {
    width: fit-content;
  }
`;
