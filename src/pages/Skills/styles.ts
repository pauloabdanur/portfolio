import styled from '@emotion/styled';

import { Container } from '@mui/material';

export const Image = styled.img`
  width: 144px;
  height: 144px;
  @media (max-width: 1400px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 1200px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
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
