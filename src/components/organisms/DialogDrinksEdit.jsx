//Componente para agregar un nuevo ruta loca

// Components
import { DialogActions, DialogContent, Grid } from '@mui/material'
import { DialogCustom } from '../templates'
import {
    AlertCustom,
    ButtonCustom, Loader, SwitchCustom, TextCustom, TextInputCustom,
} from '../atoms'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context'
import { useMessage } from '../../hooks'
import { apiGetDrink, apiPatchDrink } from '../../services/apis'
import { formValidEditDrinks } from '../../core/validations'
// Const
import { typesValidation } from '../../common/types'

export const DialogDrinksEdit = ({
    idDrink = '',
    open = false,
    setOpen = () => null,
    onDismiss = () => null,
    sessionExpired = false,
}) => {
    //Inicialización de variables iniciales
    const { authState } = useContext(AuthContext) //Token

    const [name, setName] = useState('')
    const [active, setActive] = useState(true)
    const [price, setPrice] = useState('')
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
        active: true,
    })
    const { token, personalInfo } = authState
    const idUser = personalInfo.id


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
        setActive(false)
        setPrice('')
        setLoader(false)
        setShowAlert(false)
        resetMessages()
        setEnabledValid(false)
    }


    const loadDrink = async () => {
        setLoader(true)
        const params = { idDrink, token }
        const response = await apiGetDrink(params)
        const { success, message, data, statusCode } = response
        if (success) {
            setName(data.name)
            setPrice(data.price)
            setActive(data.active)
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
            const image = 'https://www.image.com'
            const params = {
                name,
                price,
                active,
                token,
                image,
                idUser,
                idDrink,
            }

            const response = await apiPatchDrink(params)
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
            price,
            active,
        }
        const response = formValidEditDrinks(params)
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
            title="Editar Bebida"
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
                    <TextInputCustom
                        value={name}
                        setValue={setName}
                        name="Nombre de la Bebida"
                        onBlur={() => enabledValid && handleValidForm()}
                        onEnter={handleAccept}
                        maxLength={20}
                        required
                        typesValidation={typesValidation.onlyLettersExtend}
                        msgError={messages.name}
                    />
                    <TextInputCustom
                        value={price}
                        setValue={setPrice}
                        name="Precio"
                        onBlur={() => enabledValid && handleValidForm()}
                        onEnter={handleAccept}
                        required
                        typesValidation={typesValidation.onlyNumber}
                        msgError={messages.price}
                    />
                    <Grid container direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <TextCustom text="Activo" className="text-base" />
                        <SwitchCustom value={active} setValue={setActive}
                            onEnter={handleAccept}
                            required fontSize={40} />
                    </Grid>
                    {loader && <Loader mode="modal" />}
                </div>
            </DialogContent>

            <DialogActions>
                <ButtonCustom
                    text="Cancelar"
                    typeColor="secondary"
                    onClick={handleCancel}
                />
                <ButtonCustom text="Actualizar" typeColor="primary" onClick={handleAccept} />
            </DialogActions>
        </DialogCustom>
    )
}

