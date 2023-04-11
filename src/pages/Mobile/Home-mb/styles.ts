import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Button, Container, Typography } from '@mui/material';

export const slideBottom = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
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

export const slideLeft = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const zoomIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const MyText = styled(Typography)``;

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px 10%;
`;

export const ProfileImg = styled.img`
  margin-bottom: 20px;
  max-width: 300px;
  opacity: 0;
  animation: ${zoomIn} 1s ease forwards;
  animation-delay: 1s;
`;

export const SocialLinks = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #0ef;
  color: #0ef;
  border-radius: 50%;
  text-decoration: none;

  width: 40px;
  height: 40px;
  font-size: 20px;
  margin: 30px 15px 30px 0;

  transition: 0.5s ease;
  opacity: 0;
  animation: ${slideLeft} 1s ease forwards;
  animation-delay: 1s;

  &:hover {
    box-shadow: 0 0 20px #0ef;
  }
`;

export const MyButton = styled(Button)`
  display: inline-block;
  background: #0ef;
  color: #1f242d;
  opacity: 0;
  animation: ${slideTop} 1s ease forwards;
  animation-delay: 2s;
  border-radius: 40px;
  padding: 12px 28px;
  box-shadow: 0 0 10px #0ef;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;

  &:hover {
    background: #0ef;
    color: #1f242d;
    box-shadow: 0 0 20px #0ef;
  }
`;

export const Job = styled.p`
  color: #0ef;
`;
