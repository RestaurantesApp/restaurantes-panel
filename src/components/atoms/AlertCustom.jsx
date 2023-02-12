import React, { useState } from 'react'

// Components
import { Alert, AlertTitle, Collapse } from '@mui/material'
import { IconButtonCustom } from './'

// Assets
import CloseIcon from '@mui/icons-material/Close'

export const AlertCustom = ({
  description = '',
  open = false,
  setOpen = () => null,
  severity = '',
  title = '',
}) => {
  const [showMore, setShowMore] = useState(true)

  const renderTypeColor = () => {
    switch (severity) {
      case 'success':
        return 'success'
      case 'warning':
        return 'warning'
      case 'error':
        return 'danger'
      case 'info':
      default:
        return undefined
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        action={
          <IconButtonCustom
            icon={<CloseIcon fontSize="inherit" />}
            typeColor={renderTypeColor()}
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
  )
}
