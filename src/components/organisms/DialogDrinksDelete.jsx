import React, { useContext, useEffect, useState } from 'react'
//Componente para agregar un nuevo ruta loca

// Components
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import {
  AlertCustom,
  ButtonCustom, Loader, TextCustom,
} from '../atoms'
import { apiDeleteDrink, apiGetDrink } from '../../services/apis'
import { AuthContext } from '../../context'

export const DialogDrinksDelete = ({
  idDrink = '',
  open = false,
  active = false,
  setOpen = () => null,
  onDismiss = () => null,
  sessionExpired = false,

}) => {
  //Inicialización de variables iniciales
  //Inicialización de variables iniciales
  const { authState } = useContext(AuthContext) //Token

  const [name, setName] = useState('')
  const [loader, setLoader] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })

  const { token } = authState

  useEffect(() => {
    if (open) {
      loadDrink()
    } else {
      resetForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const resetForm = () => {
    setName('')
    setLoader(false)
  }

  const loadDrink = async () => {
    setLoader(true)
    const params = { idDrink, token }
    const response = await apiGetDrink(params)
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
    const params = { idDrink, token, active }
    const response = await apiDeleteDrink(params)
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
      title="Eliminar Bebida"
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
            text="¿Esta seguro que desea desactivar esta Bebida?"
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
        <ButtonCustom text="Desactivar" typeColor="primary" onClick={handleAccept} />
      </DialogActions>
    </DialogCustom>
  )
}

