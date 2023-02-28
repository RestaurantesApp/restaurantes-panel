//Componente modal para desactivar una categoria
import React, { useContext, useState, useEffect } from 'react'
// Hooks
import { AuthContext } from '../../context'

// Components
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'

// Services
import { apiDeleteCategory, apiGetCategory } from '../../services/apis'

export const DialogCategoriesDelete = ({
  idCategory = '',
  open = false,
  active = false,
  setOpen = () => null,
  onDismiss = () => null,
  sessionExpired = false,
}) => {
  const { authState } = useContext(AuthContext)
  const [loader, setLoader] = useState(false)
  const [name, setName] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })
  const { token } = authState
  useEffect(() => {
    if (open) {
      loadCategory()
    } else {
      resetForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const resetForm = () => {
    setShowAlert()
    setName('')
    setLoader(false)
  }

  const loadCategory = async () => {
    setLoader(true)
    const params = { idCategory, token }
    const response = await apiGetCategory(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setName(data.name)
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

  const handleAccept = async () => {
    setLoader(true)
    const params = { idCategory, active, token }
    const response = await apiDeleteCategory(params)
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
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Desactivar Categoria"
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
            text="¿Está seguro que desea destivar esta Categoria?"
            className="font-normal"
          />
          <TextCustom text={name} className="font-medium" />
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
