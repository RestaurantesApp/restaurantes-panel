import React from 'react';

// Hooks
import { AuthProvider } from './context';

// Components
import { AppRouter } from './components/routes';
import { CssBaseline, ThemeProvider } from '@mui/material';

// Styles
import { restaurantesTheme } from './components/themes';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={restaurantesTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
