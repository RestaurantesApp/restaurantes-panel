//Componente para modal de agregar permisos
import React, { useState, useEffect, useContext } from 'react'
// Hooks
import { useMessage } from '../../hooks'
import { AuthContext } from '../../context'
// Components
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import { AlertCustom, ButtonCustom, Loader, SelectCustom } from '../atoms'
// Const
//CORE
import { formValidAddPermission } from '../../core/validations'
import { apiPostPermission } from '../../services/apis'

export const DialogPermissionsAdd = ({
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  //Inicializando variables en useSate
  const { authState } = useContext(AuthContext)
  const [path, setPath] = useState('')
  const [method, setMethod] = useState('')
  const [loader, setLoader] = useState(false)
  const [enabledValid, setEnabledValid] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })
  const { messages, setMessages, resetMessages } = useMessage({
    path: null,
    method: null,
  })

  const { token } = authState //destructuración para traer el token

  useEffect(() => {
    if (!open) {
      resetForm()
    }
  }, [open])

  const resetForm = () => {
    setPath('')
    setMethod('')
    setLoader(false)
    setShowAlert(false)
    resetMessages()
    setEnabledValid(false)
  }

  const handleAccept = async () => {
    setShowAlert(false)
    setEnabledValid(true)
    if (handleValidForm()) {
      setLoader(true)
      const params = { path, method, token }
      const response = await apiPostPermission(params)
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
  }

  const handleValidForm = () => {
    const params = {
      path,
      method,
    }
    const response = formValidAddPermission(params)
    setMessages(response.msgValid)
    return response.isValid
  }

  const handleCancel = () => {
    setOpen(false)
    resetForm()
  }

  const handleDismiss = () => {
    resetForm()
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Crear Permiso"
      onDismiss={handleDismiss}
    >
      <DialogContent>
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col gap-4 relative mt-4">
          <SelectCustom
            name="Módulos "
            options={authState.paths}
            value={path}
            setValue={setPath}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            required
            msgError={messages.path}
          />

          <SelectCustom
            name="Acciones"
            options={authState.methods}
            value={method}
            setValue={setMethod}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            required
            msgError={messages.method}
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
          text="Guardar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  )
}