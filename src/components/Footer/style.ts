import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: #2a2a2a;
  margin-top: 70px;

  @media (min-width: 480px) {
    height: 110px;
  }

  @media (min-width: 768px) {
    height: 140px;
  }
`;
