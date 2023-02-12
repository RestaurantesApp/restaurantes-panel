import React, { memo } from 'react'

// Components
import { Dialog } from '@mui/material'
import { TextCustom } from '../atoms'
import { DialogTitleCustom } from '../molecules'

const Component = ({
  children = null,
  disabledDismiss = false,
  disabledIconClose = false,
  onDismiss = () => null,
  open = false,
  setOpen = () => null,
  title = '',
  maxWidth = 'md',
}) => {
  const handleClose = () => {
    onDismiss()
    setOpen(false)
    return false
  }
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={() => !disabledDismiss && handleClose()}
      fullWidth
      maxWidth={maxWidth}
    >
      <DialogTitleCustom
        onClose={handleClose}
        disabledIconClose={disabledIconClose}
      >
        <TextCustom text={title} className="font-medium py-2" />
      </DialogTitleCustom>
      {children}
    </Dialog>
  )
}

export const DialogCustom = memo(Component)
