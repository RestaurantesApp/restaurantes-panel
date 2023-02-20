import React, { useContext } from 'react'

// Hooks
import { AuthContext } from '../../context'

// Components
import { DialogActions, DialogContent } from '@mui/material'
import { DialogCustom } from '../templates'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { ButtonCustom, TextCustom } from '../atoms'

// Const
import { typesGlobalState } from '../../common/types'


const { authLogout } = typesGlobalState

export const DialogSessionExpired = ({ open = false,
    setOpen = () => null }) => {

    const { authDispatch } = useContext(AuthContext)

    const handleCancel = () => {
        setOpen(false)
    }

    const handleLogout = () => {
        authDispatch({ type: authLogout })
        setOpen(false)
    }

    return (
        <div>
            <DialogCustom
                open={open}
                setOpen={setOpen}
                title="Sesión expirada"
            >
                <DialogContent>
                    <div className="flex flex-col relative items-center mt-4">
                        <TextCustom
                            text="Su sesión ha expirado."
                            className="font-normal"
                        />
                        <ErrorOutlineIcon sx={{ fontSize: 100 }} color="warning" />
                        <TextCustom
                            text="¿Desea volver a iniciar sesión?"
                            className="font-normal my-3 text-danger"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <ButtonCustom
                        text="Cancelar"
                        typeColor="secondary"
                        onClick={handleCancel}
                    />
                    <ButtonCustom
                        text="Iniciar sesión"
                        typeColor="primary"
                        onClick={handleLogout}
                    />
                </DialogActions>
            </DialogCustom>

        </div>
    )
}
