import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// Hooks
import { AuthContext } from '../../context'

// Components
import { Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
import {
  DialogSessionExpired,
  DialogUserAdd,
  DialogUserDelete,
  DialogUserEdit,
} from '../organisms'
import { TableCustom } from '../templates'

// Const
import { columnsUsers } from '../../common/tables'
import { typesTableActions } from '../../common/types'

// Services
import { apiGetUsers } from '../../services/apis'

const { tableView, tableEdit, tableDelete } = typesTableActions

export const Users = () => {
  const { authState } = useContext(AuthContext)
  const [users, setUsers] = useState([])
  const [idUser, setIdUser] = useState('')
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
  const navigate = useNavigate()
  const { token } = authState

  useEffect(() => {
    loadUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetForm = () => {
    setShowAlert(false)
  }

  const loadUsers = async () => {
    resetForm()
    setLoader(true)
    const params = { token }
    const response = await apiGetUsers(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setUsers(data)
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
    setIdUser(id)
    switch (action) {
      case tableEdit:
        setShowEdit(true)
        break
      case tableDelete:
        setShowDelete(true)
        break
      case tableView:
        navigate(`/dashboard/usersPermissions/${id}`)
        break
      default:
        setIdUser('')
        break
    }
  }

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Configuración de usuarios" className="text-3xl" />
      <Divider />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Usuario"
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
            data={users}
            columns={columnsUsers}
            actions={[tableView, tableEdit, tableDelete]}
            actionClick={handleTableActions}
            identifierSort="name"
            identifierHidden="id"
            identifierAction="id"
          />
          {loader && <Loader mode="modal" />}
        </div>
      </div>
      <DialogUserAdd
        open={showAdd}
        setOpen={setShowAdd}
        onDismiss={loadUsers}
        sessionExpired={setShowSession}
      />
      <DialogSessionExpired open={showSession} setOpen={setShowSession} />
      <DialogUserEdit
        idUser={idUser}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={loadUsers}
        sessionExpired={setShowSession}
      />
      <DialogUserDelete
        idUser={idUser}
        open={showDelete}
        setOpen={setShowDelete}
        onDismiss={loadUsers}
        sessionExpired={setShowSession}
      />
    </div>
  )
}
