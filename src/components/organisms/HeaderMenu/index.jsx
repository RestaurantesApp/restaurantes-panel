import React, { useContext } from 'react';

// Hooks
import { AuthContext } from '../../../hooks/context';

// Components
import { AppBar, IconButton, Toolbar } from '@mui/material';

// Assets
import Avatar from '../../../assets/images/Avatar.png';
import MenuIcon from '@mui/icons-material/Menu';
import { TextCustom } from '../../atoms';

const HeaderMenu = ({ drawerWidth, handleDrawerToggle }) => {
  const { auth } = useContext(AuthContext);
  const { personalInfo } = auth;

  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        backgroundColor: '#ffffff',
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <div className="w-full flex justify-end">
          <div className="flex items-center gap-3">
            <TextCustom text={personalInfo.name} className="text-black" />
            <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMenu;
