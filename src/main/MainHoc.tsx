"use client";
import React, { useState } from 'react'
import ThemeToggler from './theme.update.component';
import { Paper, Switch, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '@/styles/MUI/theme';
import { Provider } from 'react-redux';
import { persistor, store } from '@/data/store';
import { PersistGate } from 'redux-persist/integration/react';
import BasicNavBar from '@/common/components/BasicNavBar';

export default function MainHoc({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BasicNavBar />
          <Paper>
            {children}
          </Paper>
        </PersistGate>
      </Provider>
    </>
  )
}
