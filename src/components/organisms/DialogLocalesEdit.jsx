//Componente para editar una ruta local
import { GoogleMapsCustom } from '../../services/index'
import { useState, useEffect, useContext } from 'react'
// Hooks
import { useMessage } from '../../hooks'
import { AuthContext } from '../../context'
// Components
import { DialogActions, DialogContent, IconButton } from '@mui/material'
import { DialogCustom } from '../templates'
import {
  AlertCustom,
  ButtonCustom,
  Loader,
  TextInputCustom,
  SwitchCustom,
  TextCustom,
} from '../atoms'
import { UploadOutlined } from '@mui/icons-material'
// Const
import { typesValidation } from '../../common/types'
// Core
import { formValidAddLocal } from '../../core/validations'
import { apiGetLocal, apiPatchLocal } from '../../services/apis'

export const DialogLocalesEdit = ({
  idLocal = '',
  updateBy = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
  sessionExpired = false,
}) => {
  //Inicialización de variables iniciales
  const { authState } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [image, setImage] = useState('')
  const [latitud, setLatitud] = useState()
  const [longitud, setLongitud] = useState()
  const [loader, setLoader] = useState(false)
  const [enabledValid, setEnabledValid] = useState(false)
  const [active, setActive] = useState(true)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })

  const { messages, setMessages, resetMessages } = useMessage({
    name: null,
    active: true,
    phoneNumber: null,
    email: null,
    address: null,
    image: null,
    latitud: null,
    longitud: null,
  })
  const { token } = authState
  
  useEffect(() => {
    if (open) {
      loadLocal()
    } else {
      resetForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const ChangeInput = ({ target }) => {
    if (target.files === 0) return
  }

  const resetForm = () => {
    setName('')
    setActive(false)
    setPhoneNumber('')
    setEmail('')
    setAddress('')
    setImage('')
    setLatitud()
    setLongitud()
    setLoader(false)
    setShowAlert(false)
    resetMessages()
    setEnabledValid(false)
  }

  const loadLocal = async () => {
    setLoader(true)
    const params = { idLocal, token }
    const response = await apiGetLocal(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setName(data.name)
      setEmail(data.email)
      setActive(data.active)
      setAddress(data.address)
      setPhoneNumber(data.phoneNumber)
      setLatitud(data.location.latitud)
      setLongitud(data.location.longitud)
      setImage(data.image)
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
      const params = {
        idLocal,
        name,
        active,
        phoneNumber,
        email,
        address,
        image,
        latitud,
        longitud,
        updateBy,
        token,
      }
      const response = await apiPatchLocal(params)
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
  }
  const handleValidForm = () => {
    const params = {
      name,
      phoneNumber,
      email,
      address,
      latitud,
      longitud,
    }
    const response = formValidAddLocal(params)
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
  const MoveMap = (e) => {
    setLatitud(e.latLng.lat())
    setLongitud(e.latLng.lng())
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Editar Local"
      onDismiss={handleDismiss}
      maxWidth="xl"
    >
      <DialogContent>
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />

        <div className="gap-4 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ">
          <div className="flex flex-col gap-4 relative mt-4">
            <TextInputCustom
              name="Nombre Local"
              value={name}
              setValue={setName}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              required
              msgError={messages.name}
            />
            <TextInputCustom
              name="Dirección"
              value={address}
              setValue={setAddress}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              required
              msgError={messages.address}
            />
            <TextInputCustom
              name="Número de teléfono"
              value={phoneNumber}
              setValue={setPhoneNumber}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              required
              typesValidation={typesValidation.onlyNumber}
              msgError={messages.phoneNumber}
            />
            <TextInputCustom
              name="Correo electrónico"
              value={email}
              setValue={setEmail}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              maxLength={30}
              required
              msgError={messages.email}
            />
            <div className="flow-root">
              <TextCustom text="Subir imagen" />
              <div
                style={{ width: '240px', height: '160px' }}
                className=" float-left p-2 border-dashed border-2 border-indigo-600"
              ></div>
              <input type="file" id="file" style={{ display: 'none' }} />
              <IconButton
                text="Cargar imagen"
                component="label"
                color="primary"
              >
                <input type="file" hidden onChange={ChangeInput} />
                <UploadOutlined />
              </IconButton>
            </div>
            <TextInputCustom
              name="Url imagen"
              value={image}
              setValue={setImage}
              onEnter={handleAccept}
              required
            />
          </div>
          <div className="flex flex-col gap-4 relative mt-4">
            <GoogleMapsCustom
              latitud={latitud}
              longitud={longitud}
              onClick={MoveMap}
            />
            <TextInputCustom
              name="Latitud"
              value={latitud}
              setValue={setLatitud}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              required
              disabled
              msgError={messages.latitud}
            />
            <TextInputCustom
              name="Longitud"
              value={longitud}
              setValue={setLongitud}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              required
              disabled
              msgError={messages.longitud}
            />
            <div>
              <div className="text-center">
                <TextCustom text={active === true ? 'Activo' : 'Inactivo'} />
                <SwitchCustom value={active} setValue={setActive} />
              </div>
            </div>
          </div>
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
          text="Editar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  )
}
