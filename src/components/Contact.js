import React from 'react';
import { Box, Typography, Tabs, Tab, Container } from '@mui/material';

// Reusable TabPanel component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// Experience content
const experiences = [
  {
  company: 'OREGON STATE UNIVERSITY',
  role: 'Full Stack Developer @ OSU',
  duration: 'Sep 2023 – Jun 2025 | Corvallis, OR',
  details: [
    'Maintained and improved the Disability Access Services website with React, HTML, CSS, and JavaScript, supporting digital accessibility for over 3000 students and staff.',
    'Maintained user authentication/authorization systems leveraging JWT and OAuth, supporting secure, role-based access for students and staff.',
    'Automated accommodation requests and notification systems using Node.js, and led usability and accessibility audits to enhance user experience and WCAG 2.1/ADA compliance.',
    'Converted Word and PDF course materials into accessible, screen-reader-friendly HTML for disabled students, promoting digital inclusion and usability.',
    'Tech Stack: React, Node.js, HTML, CSS, JavaScript, JWT, OAuth.'
  ]
},
{
  company: 'OREGON STATE UNIVERSITY',
  role: 'Research Assistant @ OSU',
  duration: 'Feb 2024 – Jun 2024 | Corvallis, OR',
  details: [
    'Increased wildlife abundance prediction accuracy by 40% by developing ensemble machine learning workflows (Random Forests, deep learning) on 60k+ noisy citizen science datasets (Python, R).',
    'Enhanced insight into species patterns by engineering contextual spatial and temporal features, visualizing data with matplotlib and ggplot2.',
    'Tech Stack: Python, R, Random Forests, Deep Learning, Matplotlib, ggplot2.'
  ]
},
{
  company: 'DEFENCE RESEARCH AND DEVELOPMENT ORGANIZATION',
  role: 'Research Assistant @ DRDO',
  duration: 'Jun 2022 – Mar 2023 | Hyderabad, India',
  details: [
    'Developed and optimized YOLOv3-based object detection models for military vehicle and drone recognition, integrating OpenCV for image processing to reduce misclassification rates by 75%.',
    'Implemented a geo-overlay dashboard with Raspberry Pi, streaming real-time video and GPS data to improve operational awareness.',
    'Validated model performance and authored technical documentation for use in defense-grade AI systems, collaborating with engineers on deployment and integration.',
    'Tech Stack: Python, OpenCV, YOLOv3, Raspberry Pi.'
  ]
}

];

export default function Contact() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id="contact"
      className="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 10, md: 12 },
        px: 2,
        bgcolor: '#051f45',
        boxSizing: 'border-box',
      }}
    >
      {/* Container added to match About/Projects section padding */}
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* Heading aligned consistently with rest of page */}
          <Typography variant="h2" sx={{ mb: 6, color: '#ccd6f6' }}>
            ./experience
          </Typography>

          <Box
            sx={{
              display: 'flex',
              height: { xs: 'auto', md: 400 },
              flexDirection: { xs: 'column', md: 'row' },
              width: '100%',
              gap: 2,
            }}
          >
            {/* Vertical Tabs */}
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Experience Tabs"
              sx={{
                borderRight: 1,
                borderColor: '#233554',
                minWidth: { xs: '100%', md: 250 },
                flexShrink: 0,
              }}
            >
              {experiences.map((exp, index) => (
                <Tab
                  key={index}
                  label={exp.company}
                  {...a11yProps(index)}
                  sx={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start', // 🔹 Align text to the left
                    textAlign: 'left',
                    whiteSpace: 'normal',
                    textTransform: 'none',
                    fontSize: '1.2rem', // ← Increase this value to make it bigger (e.g., '1.2rem' or '18px')
                    fontWeight: 500, 
                    maxWidth: '100%',
                    color: '#8892b0',
                    '&.Mui-selected': {
                      color: '#f2c4cd',
                    },
                  }}
                />
              ))}
            </Tabs>

            {/* Tab Content */}
{experiences.map((exp, index) => (
  <TabPanel key={index} value={value} index={index}>
    <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 1 }}>
      {/* Highlight @OSU / @DRDO in pink */}
      {exp.role.split('@')[0]}
      <span style={{ color: '#f2c4cd' }}>@{exp.role.split('@')[1]}</span>
    </Typography>

    <Typography variant="subtitle1" sx={{ color: '#8892b0', mb: 2 }}>
      {exp.duration}
    </Typography>

    {/* Bullet list with pink bullets */}
    <Box
      component="ul"
      sx={{
        m: 0,
        pl: 3,
        color: '#8892b0',
        lineHeight: 1.7,
        listStyleType: '">"',
        '& li': {
          marginBottom: 1,
          color: '#8892b0',
        },
        '& li::marker': {
          color: '#f2c4cd', // 🔹 Light pink bullets
        },
      }}
    >
      {exp.details.slice(0, 3).map((item, i) => (
        <Box key={i} component="li">
          {item}
        </Box>
      ))}
    </Box>
  </TabPanel>
))}


          </Box>
        </Box>
      </Container>
    </Box>
  );
}
