import React, { useState, useEffect, useContext } from 'react'
// Hooks
import { AuthContext } from '../../context'
// Components
import { Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
import {
  DialogSessionExpired,
  DialogCategoriesDelete,
  DialogCategoriesAdd,
  DialogCategoriesEdit,
} from '../organisms'
import { TableCustom } from '../templates'
//const
import { columnsCategories } from '../../common/tables'
import { typesTableActions } from '../../common/types'
// Services
import { apiGetCategories } from '../../services/apis'

const { tableEdit, tableDelete } = typesTableActions

export const Categories = () => {
  const { authState } = useContext(AuthContext)
  const [categories, setCategories] = useState([])
  const [idCategory, setIdCategory] = useState('')
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
    loadCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetForm = () => {
    setShowAlert(false)
  }
  const loadCategories = async () => {
    resetForm()
    setLoader(true)
    const params = { token }
    const response = await apiGetCategories(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setCategories(data)
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
    setIdCategory(id)
    setActive(obj.active)
    switch (action) {
      case tableEdit:
        setShowEdit(true)
        break
      case tableDelete:
        setShowDelete(true)
        break
      default:
        setIdCategory('')
        break
    }
  }
  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Configuración de categorias" className="text-3xl" />
      <Divider />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Categoria"
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
            data={categories}
            columns={columnsCategories}
            actions={[tableEdit, tableDelete]}
            actionClick={handleTableActions}
            identifierHidden="id"
            identifierAction="id"
            isSearch
          />
          {loader && <Loader mode="modal" />}
        </div>
      </div>
      <DialogCategoriesAdd
        open={showAdd}
        setOpen={setShowAdd}
        onDismiss={loadCategories}
        sessionExpired={setShowSession}
      />
      <DialogCategoriesEdit
        idCategory={idCategory}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={loadCategories}
        sessionExpired={setShowSession}
      />
      <DialogSessionExpired open={showSession} setOpen={setShowSession} />
      <DialogCategoriesDelete
        idCategory={idCategory}
        active={active}
        open={showDelete}
        setOpen={setShowDelete}
        onDismiss={loadCategories}
        sessionExpired={setShowSession}
      />
    </div>
  )
}
