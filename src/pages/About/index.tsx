import { Box, Typography } from '@mui/material';

import { ProfileImg, Wrapper } from './styles';

import profilePic from '../../assets/images/profile.png';

const About = () => {
  return (
    <Wrapper id="about">
      <ProfileImg src={profilePic} alt="" />
      <Box>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ fontSize: { sm: '50px', md: '70px', lg: '90px', xl: '96px' } }}
        >
          Sobre mim
        </Typography>
        <Typography
          variant="h5"
          textAlign="justify"
          marginTop="10px"
          sx={{ fontSize: { sm: '16px', md: '18px', lg: '22px', xl: '24px' } }}
        >
          Meu nome é Paulo Abdanur e desde sempre fui apaixonado por tecnologia.
          Tive meu primeiro contato com programação em 2013 na faculdade, porém,
          após ter trabalhado por anos com infraestrutura de TI, em 2019 comecei
          a estudar HTML, CSS, Javascript, React e meu foco passou a ser
          trabalhar como Desenvolvedor Front End.
        </Typography>
        <Typography
          variant="h5"
          textAlign="justify"
          marginTop="30px"
          sx={{ fontSize: { sm: '16px', md: '18px', lg: '22px', xl: '24px' } }}
        >
          Tive uma excelente oportunidade em uma Startup, onde pude aprender do
          zero como desenvolver aplicações web e mobile, tendo experiência como
          Desenvolvedor FullStack Junior.
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default About;
