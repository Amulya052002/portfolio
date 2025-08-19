import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  const menuItems = [
    { text: 'about', link: '#about' },
    { text: 'experience', link: '#contact' },
    { text: 'projects', link: '#projects' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: '#051f45',
        zIndex: 1201, // ensure it's above other content
        py: 1.5,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 8 } }}>
        <Typography
          variant="h6"
          component="a"
          href="#home"
          sx={{
            textDecoration: 'none',
            color: '#ccd6f6',
            fontSize: '1.3rem',
            fontWeight: 600,
          }}
        >
          ./amulya natuva
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {menuItems.map((item, index) => (
            <Button
              key={item.text}
              href={item.link}
              sx={{
                color: '#ccd6f6',
                fontSize: { xs: '0.9rem', md: '1.3rem' },
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { color: '#f2c4cd' },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
