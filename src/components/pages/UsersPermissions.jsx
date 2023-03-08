import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

//Hooks
import { AuthContext } from '../../context'

//Components
import { Box, Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
import { TableCustom } from '../templates'

//Const
import { columnsUsersPermissions } from '../../common/tables'
import { typesTableActions } from '../../common/types'

//Services
import { apiGetUser } from '../../services/apis'

import { DialogRemovePermission, DialogSessionExpired } from '../organisms'

const { tableDelete } = typesTableActions

export const UsersPermissions = () => {
  const { idUser } = useParams()
  const { authState } = useContext(AuthContext)
  const [user, setUser] = useState([])
  const [name, setName] = useState('')
  const [permission, setPermission] = useState({})
  const [idPermission, setIdPermission] = useState('')
  const [showRemove, setShowRemove] = useState(false)
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
    loadInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadInfo = async () => {
    setLoader(true)
    const params = { idUser, token }
    const response = await apiGetUser(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setUser(data.permissions)
      setName(data.name)
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
    setIdPermission(id)
    setPermission(obj)
    switch (action) {
      case tableDelete:
        setShowRemove(true)
        break
      default:
        setIdPermission('')
        break
    }
  }

  return (
    <Box className="pb-4 p-5 flex flex-col">
      <TextCustom text={name} className="text-2xl" />
      <Divider />
      <Box className="flex justify-end">
        <ButtonCustom text="Asignar Permiso" className="my-3" />
      </Box>
      <Box className="mt-10 flex flex-col relative">
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <TableCustom
          data={user}
          columns={columnsUsersPermissions}
          actions={[tableDelete]}
          actionClick={handleTableActions}
          identifierHidden="id"
          identifierAction="id"
          isSearch
        />
        {loader && <Loader mode="modal" />}
      </Box>
      <DialogSessionExpired open={showSession} setOpen={setShowSession} />
      <DialogRemovePermission
        idPermission={idPermission}
        idUser={idUser}
        name={name}
        permission={permission}
        open={showRemove}
        setOpen={setShowRemove}
        onDismiss={loadInfo}
      />
    </Box>
  )
}
