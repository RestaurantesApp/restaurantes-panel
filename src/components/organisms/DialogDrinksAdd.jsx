import React, { useContext, useEffect, useState } from 'react'

// Hooks
import { useMessage } from '../../hooks'
import { AuthContext } from '../../context'

// Components
import { DialogActions, DialogContent, Grid } from '@mui/material'
import { DialogCustom } from '../templates'
import {
    AlertCustom,
    ButtonCustom, Loader, SwitchCustom, TextCustom, TextInputCustom,
} from '../atoms'

// Const
import { typesValidation } from '../../common/types'
import { formValidAddDrinks } from '../../core/validations'
import { apiPostDrink } from '../../services/apis'



export const DialogDrinksAdd = ({
    open = false,
    setOpen = () => null,
    onDismiss = () => null,
    sessionExpired = false,
}) => {
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
        active: true,
        price: null,
    })
    const { token, personalInfo } = authState
    const idUser = personalInfo.id

    useEffect(() => {
        if (!open) {
            resetForm()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const resetForm = () => {
        setName('')
        setActive(true)
        setPrice('')
        setLoader(false)
        setShowAlert(false)
        resetMessages()
        setEnabledValid(false)
    }

    const handleAccept = async () => {
        setShowAlert(false)
        setEnabledValid(true)
        const image = 'https://www.image.com'
        if (handleValidForm()) {
            setLoader(true)
            const params = {
                name,
                price,
                active,
                image,
                idUser,
                token,
            }
            const response = await apiPostDrink(params)
            console.log(params)
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
        const response = formValidAddDrinks(params)
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
            title="Crear Bebida"
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
                        type="number"
                        typesValidation={typesValidation.onlyNumber}
                        msgError={messages.price}
                    />
                    <Grid container direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <TextCustom text="Activo" className="text-base" />
                        <SwitchCustom value={active} setValue={setActive} onBlur={() => enabledValid && handleValidForm()}
                            onEnter={handleAccept} msgError={messages.active}
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
                <ButtonCustom text="Guardar" typeColor="primary" onClick={handleAccept} />
            </DialogActions>
        </DialogCustom>
    )
}
