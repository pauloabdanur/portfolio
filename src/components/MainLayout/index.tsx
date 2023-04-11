import { Box } from '@mui/material';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      min-height="100vh"
      // sx={{ background: 'linear-gradient(#2b1055, #7597de)' }}
      sx={{ background: '#1f242d' }}
    >
      {children}
    </Box>
  );
};
