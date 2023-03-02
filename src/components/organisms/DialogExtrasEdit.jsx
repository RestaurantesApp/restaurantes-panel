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
import { formValidExtra } from '../../core/validations'
import { apiGetExtra, apiPatchExtra } from '../../services/apis'

export const DialogExtrasEdit = ({
  idExtra = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
  sessionExpired = false,
}) => {
  const { authState } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
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
    price: null,
  })

  const { token, personalInfo } = authState
  const idUser = personalInfo.id
  useEffect(() => {
    if (open) {
      loadExtra()
    } else {
      resetForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const resetForm = () => {
    setName('')
    setPrice(0)
    setActive(true)
    setLoader(false)
    setShowAlert(false)
    resetMessages()
    setEnabledValid(false)
  }
  const loadExtra = async () => {
    setLoader(true)
    const params = { idExtra, token }
    const response = await apiGetExtra(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setName(data.name)
      setActive(data.active)
      setPrice(data.price)
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
      const params = { idUser, idExtra, name, active, price, token }
      const response = await apiPatchExtra(params)
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
      price,
    }
    const response = formValidExtra(params)
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
      title="Actualizar Extra"
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
            name="Nombre del Extra"
            value={name}
            setValue={setName}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            maxLength={50}
            required
            typesValidation={typesValidation.onlyLettersExtend}
            msgError={messages.name}
          />
          <TextInputCustom
            value={price}
            setValue={setPrice}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            name="Precio"
            type="number"
            required
            msgError={messages.price}
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
