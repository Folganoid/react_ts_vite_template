import React from 'react';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAppSelector } from '../hooks/redux';
import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';

export default function Layout() {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
