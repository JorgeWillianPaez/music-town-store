import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  label {
    margin-bottom: 4px;
  }

  input {
    width: 220px;
    padding: 4px;
    outline: none;
    border-radius: 6px;
    border: 2px solid #2a2a2a;
  }
`;
