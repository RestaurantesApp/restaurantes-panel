import React, { useState, useEffect, useContext } from 'react'
// Components
import { Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
// Hooks
import { AuthContext } from '../../context'
import {
  DialogSessionExpired,
  DialogDrinksAdd,
  DialogDrinksEdit,
  DialogDrinksDelete,
} from '../organisms'
import { TableCustom } from '../templates'

//const
import { typesTableActions } from '../../common/types'
import { columnsDrinks } from '../../common/tables'
//Falsa data
import { apiGetDrinks } from '../../services/apis'


const { tableEdit, tableDelete } = typesTableActions

export const Bebidas = () => {
  //Inicialización de las variables useState
  const { authState } = useContext(AuthContext)
  const [drinks, setDrinks] = useState([])
  const [idDrink, setIdDrink] = useState('')
  const [active, setActive] = useState(false)
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
    loadDrinks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetForm = () => {
    setShowAlert(false)
  }

  const loadDrinks = async () => {
    resetForm()
    setLoader(true)
    const params = { token }
    const response = await apiGetDrinks(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setDrinks(data)
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
    setIdDrink(id)
    setActive(obj.active)
    switch (action) {
      case tableEdit:
        setShowEdit(true)
        break
      case tableDelete:
        setShowDelete(true)
        break
      default:
        setIdDrink('')
        setActive(false)
        break
    }
  }

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Bebidas" className="text-3xl" />
      <Divider />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Bebida"
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
            data={drinks}
            columns={columnsDrinks}
            actions={[tableEdit, tableDelete]}
            actionClick={handleTableActions}
            identifierSort="active"
            identifierHidden="id"
            identifierAction="id"
            isSearch
          />
          {loader && <Loader mode="modal" />}
        </div>
      </div>
      <DialogSessionExpired open={showSession} setOpen={setShowSession} />
      <DialogDrinksAdd
        open={showAdd}
        setOpen={setShowAdd}
        onDismiss={loadDrinks}
        sessionExpired={setShowSession}
      />
      <DialogDrinksEdit
        idDrink={idDrink}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={loadDrinks}
        sessionExpired={setShowSession}
      />
      <DialogDrinksDelete
        idDrink={idDrink}
        open={showDelete}
        setOpen={setShowDelete}
        onDismiss={loadDrinks}
        sessionExpired={setShowSession}
        active={active}
      />
    </div>
  )
}
