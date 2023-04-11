import {
  AppBar,
  Box,
  Button,
  Dialog,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { Close, Menu } from '@mui/icons-material';
import { useState } from 'react';
import { Transition } from './transition';
import { Link, slideRight } from './styles';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const onOpenHandler = () => setOpenMenu(true);
  const onCloseHandler = () => setOpenMenu(false);

  const sections = [
    { name: 'Início', to: 'home' },
    { name: 'Sobre mim', to: 'about' },
    { name: 'Projetos', to: 'projects' },
    { name: 'Habilidades', to: 'skills' },
  ];

  const Buttons = sections.map(({ name, to }) => {
    return (
      <Link href={`#${to}`} isSmall={isSmall}>
        <Button
          color="inherit"
          size="large"
          fullWidth={isSmall}
          onClick={onCloseHandler}
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
        <Hidden smDown>
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
        </Hidden>
        <Hidden smUp>
          <IconButton color="inherit" onClick={onOpenHandler}>
            <Menu />
          </IconButton>
          <Dialog
            open={openMenu}
            fullScreen
            fullWidth
            TransitionComponent={Transition}
            hideBackdrop
            PaperProps={{
              sx: {
                boxShadow: 'none',
                backgroundColor: '#1f242d',
              },
            }}
          >
            <AppBar position="fixed" sx={{ background: '#1f242d' }}>
              <Toolbar
                sx={{
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h5">Menu</Typography>
                <IconButton
                  color="inherit"
                  onClick={onCloseHandler}
                  sx={{ backgroundColor: '#fff' }}
                >
                  <Close />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Toolbar />
            <Box display="flex" flexDirection="column" py={3} width="100%">
              {Buttons}
            </Box>
          </Dialog>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
