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

import profilePic from '../../assets/images/profile.png';
import curriculo from '../../assets/archive/curriculo.pdf';

const Home = () => {
  return (
    <MyContainer
      id="home"
      sx={{
        padding: {
          sm: '30px 10% 0',
          md: '50px 10% 0',
          lg: '70px 10% 0',
        },
      }}
    >
      <Box
        id="homeContent"
        sx={{
          minWidth: { sm: '350px', md: '500px', lg: '550px', xl: '600px' },
        }}
      >
        <MyText
          variant="h3"
          fontWeight="700"
          sx={{
            opacity: 0,
            animation: `${slideTop} 1s ease forwards`,
            animationDelay: '0.7s',
            fontSize: {
              xs: '14px',
              sm: '20px',
              md: '28px',
              lg: '32px',
              xl: '40px',
            },
          }}
        >
          Olá! Meu nome é
        </MyText>
        <Typography
          variant="h1"
          fontWeight="700"
          margin="-3px 0"
          sx={{
            opacity: 0,
            animation: `${slideRight} 1s ease forwards`,
            animationDelay: '1s',
            fontSize: {
              xs: '20px',
              sm: '28px',
              md: '44px',
              lg: '56px',
              xl: '56px',
            },
          }}
        >
          Paulo Abdanur
        </Typography>
        <Typography
          variant="h3"
          fontWeight="700"
          marginBottom="20px"
          sx={{
            opacity: 0,
            animation: `${slideBottom} 1s ease forwards`,
            animationDelay: '0.7s',
            display: 'flex',
            fontSize: {
              xs: '14px',
              sm: '20px',
              md: '28px',
              lg: '32px',
              xl: '32px',
            },
            gap: '10px',
          }}
        >
          E sou um <Job>Desenvolvedor FrontEnd</Job>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            opacity: 0,
            animation: `${slideLeft} 1s ease forwards`,
            animationDelay: '1s',
            fontSize: { xs: '8px', sm: '12px', md: '14px', lg: '18px' },
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
      <Box>
        <ProfileImg src={profilePic} alt="" />
      </Box>
    </MyContainer>
  );
};

export default Home;
