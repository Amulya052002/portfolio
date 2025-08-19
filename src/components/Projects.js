import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Network Intrusion Detection via Clustering',
      description:
        'Unsupervised K-Means pipeline to flag abnormal SSH login patterns from enterprise logs; ~85% accuracy on brute-force intrusion attempts via engineered features (geo-IP, failures, session duration) and analyst-ready cluster visualizations.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Distributed Logging & Monitoring Platform',
      description:
        'Microservices-aware logging with Prisma + Postgres for centralized, queryable structured logs. Added correlation IDs, searchable views, and AWS CloudWatch alerts—cut incident resolution time by ~60%.',
      tech: ['Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'Docker', 'AWS EC2', 'CloudWatch'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Fable Forge',
      description:
        'Real-time, browser-based multiplayer storytelling (3–6 players) over WebSockets with voting rounds. Shipped profiles, replayable histories, and genre prompts that boosted engagement in public playtests.',
      tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Heroku'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Skill Link',
      description:
        'Full-stack recruitment intelligence: hybrid recommenders (collab filtering + MF) + LLMs to match candidates to roles with rationale. Semantic search via embeddings/pgvector; 25+ AI search modes and an insights dashboard.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL (pgvector)', 'LangChain', 'OpenAI API', 'FastAPI', 'Docker', 'AWS S3'],
      github: '#',
      demo: '#',
    },
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
