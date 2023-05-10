import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import {
  MyButton,
  MyContainer,
  MyText,
  Job,
  ProfileImg,
  SocialLinks,
  slideBottom,
  slideTop,
  slideRight,
  slideLeft,
} from './styles';

import profilePic from '../../../assets/images/profile.png';
import curriculo from '../../../assets/archive/curriculo.pdf';

const HomeMobile = () => {
  return (
    <MyContainer id="home">
      <Box
        id="homeContent"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" justifyContent="center">
          <ProfileImg src={profilePic} alt="" />
        </Box>
        <MyText
          variant="h4"
          fontWeight="600"
          fontSize="30px"
          textAlign="center"
          sx={{
            opacity: 0,
            animation: `${slideTop} 1s ease forwards`,
            animationDelay: '0.7s',
          }}
        >
          Olá! Meu nome é
        </MyText>
        <Typography
          variant="h3"
          fontWeight="600"
          textAlign="center"
          sx={{
            opacity: 0,
            animation: `${slideRight} 1s ease forwards`,
            animationDelay: '1s',
          }}
        >
          Paulo Abdanur
        </Typography>
        <Typography
          variant="h4"
          fontWeight="600"
          fontSize="30px"
          textAlign="center"
          sx={{
            opacity: 0,
            animation: `${slideBottom} 1s ease forwards`,
            animationDelay: '0.7s',
          }}
        >
          E sou um <Job>Desenvolvedor FrontEnd</Job>
        </Typography>
        <Typography
          variant="body1"
          fontWeight="400"
          fontSize="16px"
          marginTop="5px"
          textAlign="center"
          sx={{
            opacity: 0,
            animation: `${slideLeft} 1s ease forwards`,
            animationDelay: '1s',
          }}
        >
          Formado em Ciência da Computação desde 2017 e sempre procurando me
          aprimorar e aprender novas tecnologias!
        </Typography>
        <Box
          id="socialMedia"
          display="flex"
          alignItems="center"
          sx={{ height: { sm: '60px', md: '80px', lg: '100px' } }}
        >
          <SocialLinks
            href="https://www.linkedin.com/in/pauloabdanur/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <LinkedIn
                sx={{ color: '#0ef', width: { sm: '15px', md: '25px' } }}
              />
            </IconButton>
          </SocialLinks>
          <SocialLinks
            href="https://github.com/pauloabdanur/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <GitHub
                sx={{ color: '#0ef', width: { sm: '15px', md: '25px' } }}
              />
            </IconButton>
          </SocialLinks>
          <SocialLinks
            href="https://www.instagram.com/pauloabdanur/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <Instagram
                sx={{ color: '#0ef', width: { sm: '15px', md: '25px' } }}
              />
            </IconButton>
          </SocialLinks>
        </Box>
        <a href={curriculo} download="Currículo Paulo Abdanur">
          <MyButton>Baixar CV</MyButton>
        </a>
      </Box>
    </MyContainer>
  );
};

export default HomeMobile;
