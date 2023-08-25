import { styled } from "styled-components";
import { ReactComponent as IconRight } from "../../images/vectorRight.svg";
import { ReactComponent as IconLeft } from "../../images/vectorLeft.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 103px 0;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    gap: 8px;
    margin: 16.5px 0 31.5px 0;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 1s;

  &:hover {
    filter: brightness(103%);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
    &:hover {
      filter: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const ButtonText = styled.span``;

export const ArrowLeft = styled(IconLeft)``;

export const ArrowRight = styled(IconRight)``;

export const PageCounter = styled.div``;

export const PageNumber = styled.span``;
