import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import { Link, slideRight } from './styles';

const Header = () => {
  const sections = [
    { name: 'Início', to: 'home' },
    { name: 'Sobre mim', to: 'about' },
    { name: 'Projetos', to: 'projects' },
    { name: 'Habilidades', to: 'skills' },
  ];

  const Buttons = sections.map(({ name, to }) => {
    return (
      <Link href={`#${to}`}>
        <Button
          color="inherit"
          size="large"
          sx={{ fontSize: { sm: '10px', md: '14px', lg: '16px', xl: '18px' } }}
        >
          {name}
        </Button>
      </Link>
    );
  });

  return (
    <AppBar position="fixed" sx={{ background: 'transparent' }}>
      <Toolbar>
        <Box>
          <a href="#home">
            <Typography
              variant="h5"
              sx={{
                width: 'fit-content',
                cursor: 'pointer',
                animation: `${slideRight} 1s ease forwards`,
                fontSize: { sm: '16px', md: '18px', lg: '22px', xl: '28px' },
              }}
            >
              Paulo Abdanur
            </Typography>
          </a>
        </Box>
        <Box marginLeft="auto">{Buttons}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
