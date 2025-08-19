import React from 'react';
import { Container, Typography, Box, Grid, Chip } from '@mui/material';
// import Navbar from './Navbar';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'TypeScript',
    'Express.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Box className="section" 
      id="about"
        sx={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: { xs: 10, md: 12 }, // Add padding top to prevent overlap with navbar
    px: 2, // Prevent content from touching screen edge on mobile
    boxSizing: 'border-box',
  }}>
        <Container maxWidth="lg">
          <Box className="fade-in">
            <Typography variant="h2" sx={{ mb: 4, color: '#ccd6f6' }}>
              ./about me
            </Typography>
            
            <Grid container spacing={6} 
            sx={{
              flexWrap: 'nowrap',               // ❗ Prevent wrapping
              flexDirection: 'row',             // Horizontal layout
              alignItems: 'flex-start',         // Align top
              justifyContent: 'space-between',
              overflowX: 'auto',                // Optional: scroll if too narrow
            }}
>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  I'm a software development engineer based in North Carolina who enjoys 
                  creating things that live on the internet. My interest in web development 
                  started back in 2016 when I decided to try editing custom Tumblr themes — 
                  turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </Typography>
      

                <Typography variant="body1" sx={{ mb: 3 }}>
                  Here are a few technologies I've been working with recently:
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      // variant="outlined"
                      sx={{
                        color: '#ccd6f6',
                        borderColor: '#ccd6f6',
                        // '&:hover': {
                        //   backgroundColor: '#f2c4cd',
                        // },
                      }}
                    />
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box
               sx={{
    width: '100%',
    maxWidth: 250,           // Limit width for responsiveness
    aspectRatio: '3/4',     // Fixed portrait ratio (adjust as needed)
    borderRadius: '4px',
    overflow: 'hidden',
    border: '2px solid #051f45',
    mx: 'auto',
  }}
>
  <img
    src="/pp.jpg"
    alt="Profile"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',    // Fills box completely, may crop slightly
      display: 'block',
    }}
                />
              </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
