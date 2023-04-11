import styled from '@emotion/styled';

export const SocialLinks = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  text-decoration: none;

  width: 40px;
  height: 40px;
  font-size: 20px;
  margin: 30px 15px 30px 0;

  @media (max-width: 1200px) {
    font-size: 16px;
    width: 30px;
    height: 30px;
  }

  @media (max-width: 900px) {
    font-size: 14px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    box-shadow: 0 0 10px #fff;
  }
`;
