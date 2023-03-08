import { useEffect, useContext, useState } from 'react'

//Hooks
import { AuthContext } from '../../context'

//Components
import { Box, Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
import { TableCustom } from '../templates'

//Const
import { columnsExtras } from '../../common/tables'
import { typesTableActions } from '../../common/types'

//Services
import { apiGetExtras } from '../../services/apis'
import {
  DialogExtrasAdd,
  DialogExtrasDelete,
  DialogExtrasEdit,
  DialogSessionExpired,
} from '../organisms'

const { tableDelete, tableEdit } = typesTableActions
export const Extras = () => {
  const { authState } = useContext(AuthContext)
  const [extras, setExtras] = useState([])
  const [idExtra, setIdExtra] = useState('')
  const [name, setName] = useState('')
  const [loader, setLoader] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [active, setActive] = useState(false)
  const [showDeativate, setShowDeativate] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [showSession, setShowSession] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })
  const { token } = authState

  useEffect(() => {
    loadExtras()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadExtras = async () => {
    setLoader(true)
    const params = { token }
    const response = await apiGetExtras(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setExtras(data)
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
    setIdExtra(id)
    setName(obj.name)
    setActive(obj.active)
    switch (action) {
      case tableDelete:
        setShowDeativate(true)
        break
      case tableEdit:
        setShowEdit(true)
        break
      default:
        setIdExtra('')
        setName('')
        setActive(false)
        break
    }
  }
  return (
    <Box className="pb-4 p-5 flex flex-col">
      <TextCustom text="Extras" className="text-3xl" />
      <Divider />
      <Box className="flex justify-end">
        <ButtonCustom
          text="Crear Extra"
          className="my-3 p-3"
          onClick={() => setShowAdd(true)}
        />
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
          data={extras}
          columns={columnsExtras}
          actions={[tableEdit, tableDelete]}
          actionClick={handleTableActions}
          identifierHidden="id"
          identifierAction="id"
          isSearch
        />
        {loader && <Loader mode="modal" />}
      </Box>
      <DialogSessionExpired open={showSession} setOpen={setShowSession} />
      <DialogExtrasAdd
        open={showAdd}
        setOpen={setShowAdd}
        onDismiss={loadExtras}
      />
      <DialogExtrasDelete
        idExtra={idExtra}
        name={name}
        active={active}
        open={showDeativate}
        setOpen={setShowDeativate}
        onDismiss={loadExtras}
        sessionExpired={setShowSession}
      />
      <DialogExtrasEdit
        idExtra={idExtra}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={loadExtras}
        sessionExpired={setShowSession}
      />
    </Box>
  )
}
