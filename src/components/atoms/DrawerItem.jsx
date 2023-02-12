import React from 'react';

// Components
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

// Assets
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TextCustom } from './';

export const DrawerItem = ({
  text = '',
  onClick = () => null,
  icon = null,
  isSelected = false,
  collapse = false,
  isCollapse = false,
  className = '',
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <ListItem
      disablePadding
      onClick={handleClick}
      className={`${className} text-white w-full px-2 rounded-md hover:bg-white/10 ${
        isSelected ? 'bg-white/10' : ''
      }`}
    >
      <div className="w-full py-1 flex cursor-pointer justify-between">
        <div className="flex items-center gap-2">
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 'auto' } }}>
            {icon}
          </ListItemIcon>
          <TextCustom text={text} className="font-light tracking-tight" />
        </div>
        {isCollapse ? collapse ? <ExpandLess /> : <ExpandMore /> : null}
      </div>
    </ListItem>
  );
};
