import React from 'react';

// Components
import { DialogTitle } from '@mui/material';
import { IconButtonCustom } from '../../atoms';

// Assets
import CloseIcon from '@mui/icons-material/Close';

// Styles
import { colors } from '../../styles/theme';

const DialogTitleCustom = ({
  disabledIconClose = false,
  children = null,
  onClose = () => null,
}) => {
  return (
    <DialogTitle
      className="pl-5 pr-2 m-0 py-0"
      style={{
        color: colors.white,
        backgroundColor: colors.general,
      }}
    >
      <div className="flex justify-between items-center">
        {children}
        {!disabledIconClose && (
          <IconButtonCustom
            icon={<CloseIcon />}
            onClick={onClose}
            typeColor="white"
            size={'2rem'}
          />
        )}
      </div>
    </DialogTitle>
  );
};

export default DialogTitleCustom;
