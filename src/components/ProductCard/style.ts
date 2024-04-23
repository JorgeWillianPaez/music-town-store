import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid #2a2a2a;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  font-family: "Londrina Solid", sans-serif;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #2a2a2a;
  width: 90%;
  text-align: center;
`;

export const Value = styled.p`
  font-family: "Londrina Solid", sans-serif;
  margin-bottom: 10px;
  color: #2a2a2a;
  font-size: 32px;
`;

export const AddCart = styled.button`
  font-family: "Londrina Solid", sans-serif;
  background-color: #2a2a2a;
  width: 100%;
  color: #ffffff;
  font-size: 22px;
  text-align: center;
  border-radius: 0px 0px 4px 4px;
  border: none;
  cursor: pointer;
  padding: 8px;
`;
