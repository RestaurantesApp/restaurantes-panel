
import React, { useState, useEffect, useContext } from 'react'
// Hooks
import { AuthContext } from '../../context'
// Components
import { Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
import {
  DialogSessionExpired,
  DialogLocalesAdd,
  DialogLocalesDelete,
  DialogLocalesEdit,
} from '../organisms'
import { TableCustom } from '../templates'

//const
import { columnsLocales } from '../../common/tables'
import { typesTableActions } from '../../common/types'
// Services
import { apiGetLocales } from '../../services/apis'

const { tableEdit, tableDelete } = typesTableActions

export const Locales = () => {
  //Inicialización de las variables useState
  const { authState } = useContext(AuthContext)
  const { personalInfo } = authState //Para traer el id del usuario que esta logueado
  const idUser = personalInfo.id //Id del usuario para guardar que usuario creo un local y actualizo
  const [locales, setLocales] = useState([])
  const [idLocales, setIdLocales] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showSession, setShowSession] = useState(false)
  const [loader, setLoader] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })

  const { token } = authState

  useEffect(() => {
    loadLocales()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetForm = () => {
    setShowAlert(false)
  }
  const loadLocales = async () => {
    resetForm()
    setLoader(true)
    const params = { token }
    const response = await apiGetLocales(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setLocales(data)
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

  const handleTableActions = (action, id, obj) => {
    setIdLocales(id)
    switch (action) {
      case tableEdit:
        setShowEdit(true)
        break
      case tableDelete:
        setShowDelete(true)
        break
      default:
        setIdLocales('')
        break
    }
  }

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Configuración de Locales" className="text-3xl" />
      <Divider />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Local"
          className="my-3"
          onClick={() => setShowAdd(true)}
        />
      </div>
      <div className="px-4">
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative">
          <TableCustom
            data={locales}
            columns={columnsLocales}
            actions={[tableEdit, tableDelete]}
            actionClick={handleTableActions}
            identifierSort="name"
            identifierHidden="id"
            identifierAction="id"
            isSearch
          />
          {loader && <Loader mode="modal" />}
        </div>
      </div>
      <DialogLocalesAdd createBy={idUser} open={showAdd} setOpen={setShowAdd} />
      <DialogSessionExpired open={showSession} setOpen={setShowSession} />
      <DialogLocalesEdit
        idLocal={idLocales}
        updateBy={idUser}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={loadLocales}
      />
      <DialogLocalesDelete
        idLocal={idLocales}
        open={showDelete}
        setOpen={setShowDelete}
        onDismiss={loadLocales}
      />
    </div>
  )
}

