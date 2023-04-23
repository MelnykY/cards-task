import styled from "styled-components";

export const ButtonLoadMore = styled.button`
  display: block;
  margin: 35px auto;
  width: 196px;
  padding: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-shadow: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: currentColor;
  background-color: #5cd3a8;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: #5736a3;
    color: white;
  }
`;
