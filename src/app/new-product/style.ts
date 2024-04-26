import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }

  button {
    margin-top: 30px;
  }

  select {
    font-family: "Londrina Solid", sans-serif;
    width: 300px;
    padding: 4px;
    outline: none;
    border-radius: 6px;
    border: 2px solid #2a2a2a;
    font-size: 24px;
  }
`;
