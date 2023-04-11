import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import {
  MyButton,
  MyContainer,
  MyText,
  Job,
  ProfileImg,
  SocialLinks,
} from './styles';

import profilePic from '../../../assets/images/profile.png';
import curriculo from '../../../assets/archive/curriculo.pdf';

const HomeMobile = () => {
  return (
    <MyContainer id="home">
      <Box id="homeContent">
        <Box display="flex" justifyContent="center">
          <ProfileImg src={profilePic} alt="" />
        </Box>
        <MyText variant="h3" fontWeight="700" fontSize="40px">
          Olá! Meu nome é
        </MyText>
        <Typography variant="h2" fontWeight="700">
          Paulo Abdanur
        </Typography>
        <Typography variant="h4" fontWeight="700">
          E sou um <Job>Desenvolvedor FrontEnd</Job>
        </Typography>
        <Typography variant="body1" fontWeight="500" fontSize="20px">
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
