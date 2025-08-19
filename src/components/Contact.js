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
    role: 'Student Developer @ OSU',
    duration: 'Dec 2023 – Jun 2025 | Corvallis, OR',
    details: [
      'Developed and maintained a survey web application using React, Node.js, and MongoDB, enabling faculty to gather 5,700+ student responses each term across 80+ courses for curriculum improvement.',
      'Reduced analysis time by 60% by building RESTful APIs in Express.js for submission, retrieval, and aggregation using MongoDB pipelines, integrated with Chart.js visualizations.',
      'Enhanced platform reliability with SQL-based metadata backups, achieving 100% recovery in simulated failovers.',
      'Delivered secure, role-based dashboards with JWT authentication for admins and department heads.',
      'Migrated a legacy PHP site to React + Node.js, reducing page load time by 45% and achieving full ARIA/WCAG accessibility compliance.',
      'Tech Stack: React, Node.js, Express.js, MongoDB, SQL, JWT, Chart.js, Tailwind CSS, MUI.'
    ]
  },
  {
    company: 'DEFENCE RESEARCH AND DEVELOPMENT ORGANIZATION',
    role: 'Software Engineer Intern @DRDO',
    duration: 'Oct 2022 – Mar 2023 | Hyderabad, India',
    details: [
      'Built a secure satellite image segmentation viewer using Python (OpenCV) with GeoTIFF rendering, deployed via a restricted-access portal for enhanced remote analysis capabilities.',
      'Developed secure Node.js/Express APIs with role-based access control, compliant with defense-grade security policies.',
      'Created multilingual (English & Hindi), accessibility-compliant Angular components to improve operator usability.',
      'Built reusable, validated form modules enabling rapid rollout of 12+ secure data intake workflows.',
      'Tech Stack: Python, OpenCV, GeoTIFF, Node.js, Express.js, Angular, MongoDB, JWT.'
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
