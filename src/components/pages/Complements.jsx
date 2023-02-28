import { useEffect, useContext, useState } from 'react'

//Hooks
import { AuthContext } from '../../context'

//Components
import { Box, Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
import { TableCustom } from '../templates'

//Const
import { columnsComplements } from '../../common/tables'
import { typesTableActions } from '../../common/types'

//Services
import { apiGetComplements } from '../../services/apis'
import {
  DialogComplementsAdd,
  DialogComplementsDelete,
  DialogSessionExpired,
} from '../organisms'
import { DialogComplementsEdit } from '../organisms/DialogComplementsEdit'

const { tableDelete, tableEdit } = typesTableActions

export const Complements = () => {
  const { authState } = useContext(AuthContext)
  const [complements, setComplements] = useState([])
  const [idComplement, setIdComplement] = useState('')
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
    loadComplements()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadComplements = async () => {
    setLoader(true)
    const params = { token }
    const response = await apiGetComplements(params)
    const { success, message, data, statusCode } = response
    if (success) {
      setComplements(data)
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
    setIdComplement(id)
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
        setIdComplement('')
        setName('')
        setActive(false)
        break
    }
  }

  return (
    <Box className="pb-4 p-5 flex flex-col">
      <TextCustom text="Complementos" className="text-3xl" />
      <Divider />
      <Box className="flex justify-end">
        <ButtonCustom
          text="Crear Complemento"
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
          data={complements}
          columns={columnsComplements}
          actions={[tableEdit, tableDelete]}
          actionClick={handleTableActions}
          identifierHidden="id"
          identifierAction="id"
          isSearch
        />
        {loader && <Loader mode="modal" />}
      </Box>
      <DialogSessionExpired open={showSession} setOpen={setShowSession} />
      <DialogComplementsAdd
        open={showAdd}
        setOpen={setShowAdd}
        onDismiss={loadComplements}
      />
      <DialogComplementsDelete
        idComplement={idComplement}
        name={name}
        active={active}
        open={showDeativate}
        setOpen={setShowDeativate}
        onDismiss={loadComplements}
        sessionExpired={setShowSession}
      />
      <DialogComplementsEdit
        idComplement={idComplement}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={loadComplements}
        sessionExpired={setShowSession}
      />
    </Box>
  )
}
