import React, { useState } from 'react';

// Components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { HeaderMenu, SideMenu } from '../../organisms';

// Const
import { drawerWidth } from '../../../common/constants';

// Styles
import { colors } from '../../styles/theme';

const DashboardLayout = ({ children = null, window = undefined }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <Box className="flex h-screen">
      <CssBaseline />
      <HeaderMenu
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              background: colors.general,
              width: drawerWidth,
            },
          }}
        >
          <SideMenu onChange={handleNavigation} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              background: colors.general,
              width: drawerWidth,
            },
          }}
          open
        >
          <SideMenu onChange={handleNavigation} />
        </Drawer>
      </Box>
      <Box
        component="main"
        className="flex flex-col h-full"
        sx={{
          p: 3,
          width: { sm: `calc(100%)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
