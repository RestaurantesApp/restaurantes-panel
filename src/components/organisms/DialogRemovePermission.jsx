//Componenete para el modal de eliminar permiso
import React, { useState, useContext } from 'react'
// Hooks
import { AuthContext } from '../../context'

// Components
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'

// Services
import { apiRemovePermission } from '../../services/apis'
import { convertMethod, convertPath } from '../../core/utils'

export const DialogRemovePermission = ({
  idPermission = '',
  idUser = '',
  name = '',
  permission = {},
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
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
    const params = { idPermission, token, idUser }
    const response = await apiRemovePermission(params)
    const { success, message } = response
    if (success) {
      setOpen(false)
      onDismiss()
    } else {
      setShowAlert(true)
      setAlert({
        title: 'Error',
        description: message,
        severity: 'error',
      })
    }
    setLoader(false)
  }
  let path = convertPath(permission.path)
  let method = convertMethod(permission.method)
  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Remover Permiso"
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
            text="¿Está seguro que desea remover el siguiente Permiso?"
            className="font-normal"
          />
          <TextCustom text={method + ' ' + path} className="p-4 text-2xl" />
          <TextCustom text={`Usuario: ${name}`} className=" text-secondary" />
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
          text="Eliminar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  )
}
