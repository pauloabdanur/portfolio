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
  min-height: 100vh;
  padding: 0 12%;
  padding-bottom: 15%;
`;
