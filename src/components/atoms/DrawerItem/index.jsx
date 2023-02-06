import React from 'react';

// Components
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Assets
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// Styles
import './styles.css';

const DrawerItem = ({
  text = '',
  onClick = () => null,
  icon = null,
  isSelected = false,
  collapse = false,
  isCollapse = false,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <ListItem
      disablePadding
      onClick={handleClick}
      className={`drawer-item-color my-0 w-full ${
        isSelected ? 'drawer-item-color-select' : ''
      }`}
    >
      <div className="w-full py-2 flex cursor-pointer items-center">
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText className="txt-nav" primary={text} />
        {isCollapse ? collapse ? <ExpandLess /> : <ExpandMore /> : null}
      </div>
    </ListItem>
  );
};

export default DrawerItem;
