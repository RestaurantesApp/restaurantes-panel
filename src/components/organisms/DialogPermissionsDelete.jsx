//Componenete para el modal de eliminar permiso
import React, { useState, useEffect, useContext } from 'react'
// Hooks
import { AuthContext } from '../../context'

// Components
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'

// Services
import { apiDeletePermission, apiGetPermissions } from '../../services/apis'

export const DialogPermissionsDelete = ({
  idPermission = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  //Inicialización de las variables del useState
  const { authState } = useContext(AuthContext)
  const [loader, setLoader] = useState(false)
  const [path, setPath] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })

  const { token } = authState //Se destructura el token

  useEffect(() => {
    if (open) {
      loadPermission()
    } else {
      resetForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const resetForm = () => {
    setShowAlert()
    setPath('')
    setLoader(false)
  }

  //Trae la data desde la api y la carga
  const loadPermission = async () => {
    setLoader(true)
    const params = { idPermission, token }
    const response = await apiGetPermissions(params)
    const { success, message, data } = response
    if (success) {
      setPath(data.path)
    } else {
      setShowAlert(true)
      setAlert({
        title: 'Error',
        description: message,
        severity: 'warning',
      })
    }
    setLoader(false)
  }

  const handleAccept = async () => {
    setLoader(true)
    const params = { idPermission, token }
    const response = await apiDeletePermission(params)
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

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Eliminar Permiso"
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
            text="¿Está seguro que desea eliminar este Permiso?"
            className="font-normal"
          />
          <TextCustom text={path} className="font-medium" />
          <TextCustom
            text="No lo podrá recuperar"
            className="font-normal my-3 text-danger"
          />
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
