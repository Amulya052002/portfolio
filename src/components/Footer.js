import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
        id="footer"
      component="footer"
      sx={{
        py: 3,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: '#8892b0',
      }}
    >
      <Typography variant="body2">
        Built and designed by Amulya · © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
