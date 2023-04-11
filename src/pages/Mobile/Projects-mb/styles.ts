import styled from '@emotion/styled';
import { Button, Container } from '@mui/material';

export const Image = styled.img`
  height: 180px;
  max-width: 100%;
`;

export const MyContainer = styled(Container)`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  padding: 0 5%;
  padding-bottom: 20%;
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

  &:hover {
    background: #0ef;
    color: #1f242d;
    box-shadow: 0 0 20px #0ef;
  }
`;
