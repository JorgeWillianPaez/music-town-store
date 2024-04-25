import styled from "styled-components";

export const Container = styled.div<{ cartHasItems?: boolean }>`
  font-family: "Londrina Solid", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.cartHasItems ? "" : "center")};
  align-items: ${(props) => (props.cartHasItems ? "" : "center")};
  width: 70%;
  height: 230px;
  margin-top: 70px;
  border-radius: 6px;
  border: 2px solid #2a2a2a;
  overflow: auto;
  overflow-x: hidden;

  p {
    width: 90%;
    text-align: center;
    font-size: 16px;
  }

  @media (min-width: 480px) {
    height: 300px;
    p {
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
    height: 400px;

    p {
      font-size: 32px;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 2px solid #2a2a2a;

  &:last-child {
    border-bottom: none;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const RemoveProductButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;
