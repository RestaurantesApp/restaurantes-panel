import React, { useContext, useState } from 'react'

// Hooks
import { AuthContext } from '../../context'

// Components
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'

// Services
import { apiDeleteComplement } from '../../services/apis'

export const DialogComplementsDelete = ({
  idComplement = '',
  name = '',
  active = false,
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
  sessionExpired = false,
}) => {
  const { authState } = useContext(AuthContext)
  const [loader, setLoader] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })
  const { token } = authState

  const handleAccept = async () => {
    setLoader(true)
    const params = { idComplement, active, token }
    const response = await apiDeleteComplement(params)
    const { success, message, statusCode } = response
    if (success) {
      setOpen(false)
      onDismiss()
    } else {
      if (statusCode === 401) {
        sessionExpired(true)
      } else {
        setShowAlert(true)
        setAlert({
          title: 'Error',
          description: message,
          severity: 'error',
        })
      }
    }
    setLoader(false)
  }

  const handleCancel = () => {
    setOpen(false)
    setShowAlert(false)
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Desactivar Complemento"
      onDismiss={onDismiss}
    >
      <DialogContent>
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative items-center mt-4">
          <TextCustom
            text="¿Esta seguro que desea desactivar este Complemento?"
            className="font-normal"
          />
          <TextCustom text={name} className="text-2xl p-3" />
          {loader && <Loader mode="modal" />}
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        <ButtonCustom
          text="Desactivar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  )
}
