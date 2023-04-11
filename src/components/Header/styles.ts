import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const slideRight = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideTop = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Link = styled.a<{ isSmall: boolean }>`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  padding: 6px 15px;
  font-size: 25px;
  animation: ${(props) => !props.isSmall ?? `${slideTop} 1s ease forwards`};

  &:hover {
    color: #0ef;
  }
`;
