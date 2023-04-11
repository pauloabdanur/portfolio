import { Box, Typography } from '@mui/material';

const FooterMobile = () => {
  return (
    <Box
      width="100%"
      bottom="0"
      position="static"
      min-height="120px"
      sx={{
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      gap={3}
      padding="0 5%"
    >
      <Typography variant="h6" fontSize="14px">
        Email para contato: phabdanur@gmail.com
      </Typography>
      <Typography variant="h6" fontSize="14px">
        Desenvolvido por Paulo Abdanur - Todos os direitos reservados - 2023
      </Typography>
    </Box>
  );
};

export default FooterMobile;
