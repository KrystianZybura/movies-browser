import { css, styled } from "styled-components";
import { ReactComponent as Scale } from "../../images/scale.svg";

export const Container = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr 4fr;
  align-items: end;
  justify-items: start;
  max-width: 185px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 8px;
  }

  ${({ $type }) =>
    $type === "poster" &&
    css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
        grid-gap: 10px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        grid-template-columns: auto auto;
      }
    `};
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 8px;

  ${({ $type }) =>
    $type === "poster" &&
    css`
      max-width: 126px;
      align-items: end;
    `}
`;

export const Rate = styled.span`
  font-size: 22px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-weight: 600px;
    font-size: 13px;
  }

  ${({ $type }) =>
    $type === "poster" &&
    css`
      font-size: 30px;

      @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
        font-size: 19px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 14px;
        font-weight: 500;
      }
    `}
`;

export const StyledScale = styled(Scale)`
  align-self: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 17px;
    height: 12px;
    align-self: center;
    margin: 0;
  }

  ${({ $type }) =>
    $type === "movieInfo" &&
    css`
      width: 24px;
      height: 17px;
      margin: 0px;
    `}
`;

export const Votes = styled.span`
  font-size: 14px;

  ${({ $type }) =>
    $type === "poster" &&
    css`
      font-size: 16px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
    align-self: center;
    color: ${({ theme }) => theme.colors.waterloo};

    ${({ $type }) =>
      $type === "poster" &&
      css`
        margin-bottom: 1px;
        width: 150px;
        align-self: end;
        color: inherit;
      `}
  }
`;
