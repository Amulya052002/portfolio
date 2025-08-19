import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#AEBDFF',
    },
    secondary: {
      main: '#8892b0',
    },
    background: {
      default: '#051f45',
      paper: '#051f45',
    },
    text: {
      primary: '#78A2d2',
      secondary: '#78A2d2',
    },
  },
  typography: {
    fontFamily: `'NTR', sans-serif`,
    h1: {
      fontSize: '4rem',
      fontWeight: 600,
      color: '#ccd6f6',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      color: '#ccd6f6',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#a8b2d1',
    },
    body1: {
      fontSize: '1.26rem',
      lineHeight: 1.6,
      color: '#a8b2d1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Contact id="contact" />
      <Projects id="projects" />
      <Footer id="footer" />
    </ThemeProvider>
  );
}

export default App;
