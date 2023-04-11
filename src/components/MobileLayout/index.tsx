import { Box } from '@mui/material';

export type MobileLayoutProps = {
  children: React.ReactNode;
};

export const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <Box min-height="100vh" sx={{ backgroundColor: '#1f242d' }}>
      {children}
    </Box>
  );
};
