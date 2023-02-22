//Pantall de actualizar perfil de usuario
import { useState, useContext, useEffect } from 'react'
import { Divider } from '@mui/material'
import { ButtonCustom, AlertCustom, Loader, TextInputCustom } from '../atoms'
// Hooks
import { useMessage } from '../../hooks'
import { AuthContext } from '../../context'
// Components
import { DialogSessionExpired } from '../organisms'
// Const
import { typesValidation } from '../../common/types'
import { typesGlobalState } from '../../common/types'
// Core
import { formValidEditProfile } from '../../core/validations'
import { apiGetProfile, apiPatchProfile } from '../../services/apis'
//destructuración pra una constante global
const { authLogout } = typesGlobalState

export const Profile = () => {
  const { authState } = useContext(AuthContext) //Para el token y traer el id del usuario
  const { authDispatch } = useContext(AuthContext) //Para el deslogeo al actualizar
  const { personalInfo } = authState //Para traer el id del usuario que esta logueado
  const idUser = personalInfo.id //Id del usuario logueado para traer la información y actualizarlo
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loader, setLoader] = useState(false)
  const [enabledValid, setEnabledValid] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showSession, setShowSession] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })
  const { messages, setMessages } = useMessage({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  })

  const { token } = authState

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadUser = async () => {
    const params = { idUser, token }
    const response = await apiGetProfile(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setName(data.name)
      setEmail(data.email)
      setPassword('')
      setConfirmPassword('')
    } else {
      if (statusCode === 401) {
        setShowSession(true)
      } else {
        setShowAlert(true)
        setAlert({
          title: 'Error',
          description: message,
          severity: 'warning',
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
        idUser,
        name,
        email,
        password,
        token,
      }
      const response = await apiPatchProfile(params)
      const { success, message, statusCode } = response
      if (success) {
        //Si todo sale bien :)
        setShowAlert(true) //Para ver por una alerta si se actualizo
        setAlert({
          title: 'Actualizado',
          description: message,
          severity: 'info',
        })
        authDispatch({ type: authLogout }) //Por miesntras se deslogueara al actualizar el perfil independientemente cambio o no la contraseña.
        //  al momento de actualizar(se debe hacer aparte el cambio de contraseña,para asi saber cuando se cambia la contraseña)
      } else {
        if (statusCode === 401) {
          setShowSession(true)
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
      email,
      password,
      confirmPassword,
    }
    const response = formValidEditProfile(params)
    setMessages(response.msgValid)
    return response.isValid
  }
  return (
    <>
      <span className="MuiTypography-root pb-2 text-center text-3xl css-37jdci-MuiTypography-root">
        Editar Infomación Usuario
      </span>
      <Divider />
      <AlertCustom
        title={alert.title}
        description={alert.description}
        open={showAlert}
        setOpen={setShowAlert}
        severity={alert.severity}
      />
      <div className=" flex flex-col gap-4 relative mt-4 rounded-3xl overflow-hidden border-solid border-2 shadow-md">
        <div className="px-6 py-4">
          <div className="flex flex-col gap-4 relative mt-4">
            <TextInputCustom
              name="Nombre"
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
              name="Email"
              value={email}
              setValue={setEmail}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              maxLength={30}
              required
              msgError={messages.email}
            />
            <TextInputCustom
              name="Contraseña"
              value={password}
              setValue={setPassword}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              type="password"
              maxLength={25}
              msgError={messages.password}
            />
            <TextInputCustom
              name="Confirmar contraseña"
              value={confirmPassword}
              setValue={setConfirmPassword}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleAccept}
              type="password"
              maxLength={25}
              msgError={messages.confirmPassword}
            />
            <ButtonCustom
              className="mb-4"
              text="Actualizar Información"
              typeColor="primary"
              onClick={handleAccept}
            />
            {loader && <Loader mode="modal" />}
          </div>
        </div>
      </div>
      <DialogSessionExpired open={showSession} setOpen={setShowSession} />
    </>
  )
}
