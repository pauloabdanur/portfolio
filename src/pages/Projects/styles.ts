import styled from '@emotion/styled';
import { Button, Container } from '@mui/material';

export const Image = styled.img`
  height: 260px;
  max-width: 100%;
  @media (max-width: 1200px) {
    height: 230px;
  }
  @media (max-width: 900px) {
    height: 200px;
  }
`;

export const MyContainer = styled(Container)`
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const MyButton = styled(Button)`
  display: inline-block;
  padding: 12px 28px;
  background: #0ef;
  border-radius: 40px;
  box-shadow: 0 0 10px #0ef;
  font-size: 16px;
  color: #1f242d;
  letter-spacing: 1px;
  font-weight: 600;
  margin-top: 30px;

  @media (max-width: 1200px) {
    padding: 10px 24px;
    box-shadow: 0 0 8px #0ef;
    font-size: 14px;
  }

  @media (max-width: 900px) {
    padding: 8px 20px;
    box-shadow: 0 0 8px #0ef;
    font-size: 12px;
  }

  &:hover {
    background: #0ef;
    color: #1f242d;
    box-shadow: 0 0 20px #0ef;
  }
`;
