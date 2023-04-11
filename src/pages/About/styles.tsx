import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const Wrapper = styled(Container)`
  display: flex;
  height: 100vh;
  padding: 50px 10px;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  max-width: 450px;
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    max-width: 250px;
  }
`;
