import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import Typewriter from 'typewriter-effect';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FractalTree from './FractalTree';

const Home = () => {
  return (
    <Box
      id="home"
      className="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        px: 2,
        pt: { xs: 12, md: 16 }, // Added top padding to avoid navbar overlap
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box className="fade-in">
          {/* Fractal Tree placed in normal flow, no absolute positioning */}
          <Box
            sx={{
              width: '100%',
              height: { xs: 200, md: 300 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: { xs: 6, md: 8 }, // Margin below tree to space out text
            }}
          >
            <FractalTree />
          </Box>

          {/* All text content starts below tree */}
          <Typography variant="h1" sx={{ color: '#ccd6f6', mb: 2 }}>
            hi, I'm <span style={{ color: '#f2c4cd' }}>Amulya</span>.
          </Typography>

          <Box
            sx={{
              mb: 4,
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#AEBDFF',
              minHeight: '80px',
            }}
          >
            <Typewriter
              options={{
                strings: [
                  'I build things for the web.',
                  'I create stuff sometimes.',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
                wrapperClassName: 'typing-effect',
              }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: '500px',
              lineHeight: 1.6,
              mx: 'auto',
              color: '#8892b0',
            }}
          >
            I'm a software engineer specializing in building digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                textTransform: 'none',
                borderColor: '#ccd6f6',
                color: '#ccd6f6',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#a8b2d1',
                  borderColor: '#ccd6f6',
                },
              }}
              href="mailto:amulyanatuva05@gmail.com"
            >
              Say hi!
            </Button>

            <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
              <a
                href="https://github.com/Amulya052002
"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }} // preserve icon color
              >
                <GitHubIcon sx={{ cursor: 'pointer', '&:hover': { color: '#f2c4cd' } }} />
              </a>

              <a
                href="https://www.linkedin.com/in/amulyanatuva/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <LinkedInIcon sx={{ cursor: 'pointer', '&:hover': { color: '#f2c4cd' } }} />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
