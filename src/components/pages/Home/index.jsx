import React from 'react';

// Components
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Typography
        variant="h1"
        component="h2"
        style={{ fontFamily: 'Poppins-Regular' }}
      >
        Hola Mundo
      </Typography>
    </div>
  );
};

export default Home;
