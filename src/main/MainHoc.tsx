"use client";
import React, { useState } from 'react'
import { Paper, Switch, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { persistor, store } from '@/data/store';
import { PersistGate } from 'redux-persist/integration/react';
import BasicNavBar from '@/common/components/BasicNavBar';
import ThemeToggler from './theme.update.component';
import { darkTheme, lightTheme } from '@/styles/MUI/theme';

export default function MainHoc({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <BasicNavBar />
            <Paper sx={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}>
              <ThemeToggler isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              {children}
            </Paper>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
