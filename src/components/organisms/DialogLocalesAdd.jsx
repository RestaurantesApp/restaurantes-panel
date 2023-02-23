//Componente para agregar un nuevo ruta loca
import { useState } from 'react'

// Components
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import {
  AlertCustom,
  ButtonCustom,
} from '../atoms'

export const DialogLocalesAdd = ({
  open = false,
  setOpen = () => null,
  // onDismiss = () => null,
}) => {
  //Inicialización de variables iniciales
  // const [name, setName] = useState('')
  // const [active, setActive] = useState('')
  // const [phoneNumber, setPhoneNumber] = useState('')
  // const [email, setEmail] = useState('')
  // const [address, setAddress] = useState('')
  // const [image, setImage] = useState('')
  // const [latitud, setLatitud] = useState('')
  // const [longitud, setLongitud] = useState('')
  // const [loader, setLoader] = useState(false)
  // const [enabledValid, setEnabledValid] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })

  // const { messages, setMessages, resetMessages } = useMessage({
  //   name: null,
  //   active: null,
  //   phoneNumber: null,
  //   email: null,
  //   address: null,
  //   image: null,
  //   latitud: null,
  //   longitud: null,
  // })

  // const resetForm = () => {
  //   setName('')
  //   setActive('')
  //   setPhoneNumber('')
  //   setEmail('')
  //   setAddress('')
  //   setImage('')
  //   setLatitud('')
  //   setLongitud('')
  //   setLoader(false)
  //   setShowAlert(false)
  //   resetMessages()
  //   setEnabledValid(false)
  // }
  const handleCancel = () => {
    setOpen(false)
    // resetForm()
  }
  const handleDismiss = () => {
    // resetForm()
  }

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Crear Local"
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
        <div className="flex flex-col gap-4 relative mt-4"></div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        <ButtonCustom text="Guardar" typeColor="primary" />
      </DialogActions>
    </DialogCustom>
  )
}
