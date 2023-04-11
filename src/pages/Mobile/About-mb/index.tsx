import { Box, Typography } from '@mui/material';

import { Wrapper } from './styles';

const AboutMobile = () => {
  return (
    <Wrapper id="about">
      <Box>
        <Typography variant="h1" textAlign="center" fontSize="68px">
          Sobre mim
        </Typography>
        <Typography
          variant="h5"
          textAlign="justify"
          marginTop="25px"
          fontSize="25px"
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
          fontSize="25px"
        >
          Tive uma excelente oportunidade em uma Startup, onde pude aprender do
          zero como desenvolver aplicações web e mobile, tendo experiência como
          Desenvolvedor FullStack Junior.
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default AboutMobile;
