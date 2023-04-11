import { Close, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Transition } from './transition';
import { Link } from './styles';

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
      <Link href={`#${to}`}>
        <Button
          color="inherit"
          size="large"
          sx={{ fontSize: '18px' }}
          onClick={onCloseHandler}
        >
          {name}
        </Button>
      </Link>
    );
  });

  return (
    <AppBar position="fixed" sx={{ background: 'transparent' }}>
      <Toolbar>
        <Box marginRight="auto">
          <a href="#home">
            <Typography
              variant="h5"
              sx={{
                width: 'fit-content',
                cursor: 'pointer',
                fontSize: '24px',
              }}
            >
              Paulo Abdanur
            </Typography>
          </a>
        </Box>
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
              <Typography variant="h5" fontSize="26px">
                Menu
              </Typography>
              <IconButton color="inherit" onClick={onCloseHandler}>
                <Close />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Box
            display="flex"
            flexDirection="column"
            py={3}
            width="100%"
            alignItems="center"
          >
            {Buttons}
          </Box>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobile;
