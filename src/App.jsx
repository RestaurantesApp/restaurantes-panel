import React from 'react';

// Hooks
import { AuthProvider } from './context';

// Components
import { AppRouter } from './components/routes';

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
