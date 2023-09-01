import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 312px 1fr;
  gap: 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "pic data"
      "description description";
    padding: 16px;
    gap: 16px;
  }
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;
  grid-row: span 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-area: pic;
    width: 168px;
    height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-area: data;
    gap: 12px;
    justify-content: space-evenly;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 8px;
    justify-content: space-between;
  }
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 20px;
    margin-bottom: -6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
    margin-bottom: -4px;
  }
`;

export const Year = styled.span`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 13px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 12px;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 8px;
    font-size: 10px;
    margin-bottom: 4px;
  }
`;

export const Tag = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.mystic};
  color: ${({ theme }) => theme.colors.woodSmoke};
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 4px 8px;
  }
`;

export const MovieDescription = styled.article`
  font-size: 20px;
  line-height: 32px;
  margin-top: -80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: -16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    line-height: 25px;
    font-size: 17px;
    margin: 0;
    grid-area: description;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    line-height: 22.4px;
    font-size: 14px;
  }
`;