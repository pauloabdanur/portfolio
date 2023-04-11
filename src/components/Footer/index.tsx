import { Box, IconButton, Typography } from '@mui/material';
import { SocialLinks } from './styles';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      width="100%"
      bottom="0"
      position="static"
      height="120px"
      sx={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      gap={3}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: { sm: '16px', md: '18px', lg: '20px', xl: '24px' } }}
      >
        Email para contato: phabdanur@gmail.com
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: { sm: '16px', md: '18px', lg: '20px', xl: '24px' } }}
      >
        Desenvolvido por Paulo Abdanur - Todos os direitos reservados - 2023
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
              sx={{ color: '#fff', width: { sm: '15px', md: '25px' } }}
            />
          </IconButton>
        </SocialLinks>
        <SocialLinks
          href="https://github.com/pauloabdanur/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <GitHub sx={{ color: '#fff', width: { sm: '15px', md: '25px' } }} />
          </IconButton>
        </SocialLinks>
        <SocialLinks
          href="https://www.instagram.com/pauloabdanur/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <Instagram
              sx={{ color: '#fff', width: { sm: '15px', md: '25px' } }}
            />
          </IconButton>
        </SocialLinks>
      </Box>
    </Box>
  );
};

export default Footer;
