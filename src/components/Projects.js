import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
  title: 'Deep Learning-Based Optical Character Recognition',
  description:
    'Designed and implemented a handwritten digit/character recognition system using Python and machine learning, training on scanned image datasets with convolutional neural networks. Engineered custom preprocessing (denoising, deskewing) and applied data augmentation for robust digit extraction. Achieved 82.5% accuracy on test datasets.',
  tech: ['Python', 'TensorFlow/Keras', 'OpenCV', 'NumPy'],
  github: '#',
  demo: '#',
},
{
  title: '3D Multiplayer RPG with WebGL and Adaptive AI',
  description:
    'Developed an online multi-player role-playing game in HTML5 with JavaScript and NoSQL Database, WebGL and Three.js, featuring fully interactive 3D environments. Programmed adaptive AI-driven NPCs using finite state machines and reinforcement learning to deliver dynamic, non-repetitive in-game experiences.',
  tech: ['JavaScript', 'WebGL', 'Three.js', 'NoSQL'],
  github: '#',
  demo: '#',
},
{
  title: 'Tall Tales',
  description:
    'Developed a browser-based multiplayer app where 3–6 users co-create stories in real time via WebSockets, with voting mechanics guiding narrative progression each round. Implemented user profiles, replayable histories, and genre-based prompts, increasing engagement and repeat sessions during public playtests.',
  tech: ['Node.js', 'React', 'WebSockets', 'PostgreSQL'],
  github: '#',
  demo: '#',
}

  ];

  return (
    <Box id="projects" className="section" sx={{ minHeight: '100vh', py: { xs: 10, md: 12 }, px: 2 }}>
      <Container maxWidth="lg">
        <Box className="fade-in">
          <Typography variant="h2" sx={{ mb: 6, color: '#ccd6f6', textAlign: 'left' }}>
            ./pet projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  className="project-card"
                  sx={{
                    backgroundColor: '#112240',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #233554',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" sx={{ color: '#ccd6f6', fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Box>
                        <GitHubIcon
                          sx={{
                            cursor: 'pointer',
                            mr: 1,
                            color: '#8892b0',
                            transition: 'transform 0.2s ease, color 0.2s ease',
                            '&:hover': { color: '#f2c4cd', transform: 'scale(1.1)' },
                          }}
                        />
                        <LaunchIcon
                          sx={{
                            cursor: 'pointer',
                            color: '#8892b0',
                            transition: 'transform 0.2s ease, color 0.2s ease',
                            '&:hover': { color: '#f2c4cd', transform: 'scale(1.1)' },
                          }}
                        />
                      </Box>
                    </Box>

                    <Typography variant="body1" sx={{ color: '#a8b2d1', mb: 3, lineHeight: 1.6 }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: '#ccd6f6',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
