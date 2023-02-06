import React, { useEffect, useState } from 'react';

// Components
import { Alert, AlertTitle, Collapse } from '@mui/material';
import IconButtonCustom from '../IconButtonCustom';

// Assets
import CloseIcon from '@mui/icons-material/Close';

const AlertCustom = ({
  description = '',
  open = false,
  setOpen = () => null,
  severity = '',
  title = '',
}) => {
  const [showMore, setShowMore] = useState(true);
  const [typeColor, setTypeColor] = useState('');

  useEffect(() => {
    let color = '';
    switch (severity) {
      case 'info':
        color = '';
        break;
      case 'success':
        color = 'success';
        break;
      case 'warning':
        color = 'warning';
        break;
      case 'error':
        color = 'danger';
        break;
      default:
        color = 'info';
        break;
    }
    setTypeColor(color);
  }, [severity]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        action={
          <IconButtonCustom
            icon={<CloseIcon fontSize="inherit" />}
            typeColor={typeColor}
            size="1.5rem"
            onClick={handleClose}
          />
        }
        className="flex items-center py-0"
      >
        <AlertTitle
          onClick={handleShowMore}
          className="text-lg cursor-pointer"
          sx={{
            '&.MuiTypography-root': {
              margin: 0,
            },
          }}
        >
          {title}
        </AlertTitle>
        <Collapse in={showMore}>{description}</Collapse>
      </Alert>
    </Collapse>
  );
};

export default AlertCustom;
