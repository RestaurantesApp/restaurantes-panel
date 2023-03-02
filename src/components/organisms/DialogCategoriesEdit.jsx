import React, { useState, useEffect, useContext } from 'react'
// Hooks
import { useMessage } from '../../hooks'
import { AuthContext } from '../../context'
// Components
import { Box, DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import {
  AlertCustom,
  ButtonCustom,
  ControlLabelCustom,
  Loader,
  SwitchCustom,
  TextInputCustom,
} from '../atoms'

// Const
import { typesValidation } from '../../common/types'
//CORE
import { formValidCategories } from '../../core/validations'
import { apiGetCategory, apiPatchCategory } from '../../services/apis'

export const DialogCategoriesEdit = ({
  idCategory = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
  sessionExpired = false,
}) => {
  const { authState } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [active, setActive] = useState(true)
  const [loader, setLoader] = useState(false)
  const [enabledValid, setEnabledValid] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })
  const { messages, setMessages, resetMessages } = useMessage({
    name: null,
    position: null,
  })

  const { token, personalInfo } = authState
  const idUser = personalInfo.id
  useEffect(() => {
    if (open) {
      loadCategory()
    } else {
      resetForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const resetForm = () => {
    setName('')
    setPosition('')
    setActive(true)
    setLoader(false)
    setShowAlert(false)
    resetMessages()
    setEnabledValid(false)
  }
  const loadCategory = async () => {
    setLoader(true)
    const params = { idCategory, token }
    const response = await apiGetCategory(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setName(data.name)
      setActive(data.active)
      setPosition(data.position)
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
    setShowAlert(false)
    setEnabledValid(true)
    if (handleValidForm()) {
      setLoader(true)
      const params = { idUser, idCategory, name, active, position, token }
      const response = await apiPatchCategory(params)
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
      name,
      position,
    }
    const response = formValidCategories(params)
    setMessages(response.msgValid)
    return response.isValid
  }

  const handleCancel = () => {
    setOpen(false)
    resetForm()
  }

  const handleDismiss = () => {
    setOpen(false)
    resetForm()
  }
  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Actualizar Categoría"
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
        <Box className="flex flex-col gap-4 relative mt-4">
          <TextInputCustom
            name="Nombre de la Categoría"
            value={name}
            setValue={setName}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            maxLength={20}
            required
            typesValidation={typesValidation.onlyLettersExtend}
            msgError={messages.name}
          />
          <TextInputCustom
            value={position}
            setValue={setPosition}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            name="Posición"
            type="number"
            required
            msgError={messages.position}
          />

          {loader && <Loader mode="modal" />}
        </Box>
        <Box className="flex flex-col gap-4 relative mt-4">
          <ControlLabelCustom name={'Activo'} align="top">
            <SwitchCustom value={active} setValue={setActive} />
          </ControlLabelCustom>
        </Box>
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
