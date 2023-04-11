import styled from '@emotion/styled';

import { Container } from '@mui/material';

export const Image = styled.img`
  width: 70px;
  height: 70px;
`;

export const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  padding: 0 10%;
  padding-bottom: 15%;
`;
