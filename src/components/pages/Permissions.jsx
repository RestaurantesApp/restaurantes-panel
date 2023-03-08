import React, { useState, useEffect, useContext } from 'react'
// Hooks
import { AuthContext } from '../../context'
// Components
import { Divider } from '@mui/material'
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms'
import { DialogPermissionsAdd, DialogPermissionsDelete } from '../organisms'
import { TableCustom } from '../templates'

//const
import { columnsPermissions } from '../../common/tables'
import { typesTableActions } from '../../common/types'
// Services
import { apiGetPermissions } from '../../services/apis'

const { tableDelete } = typesTableActions

export const Permissions = () => {
  //Inicialización de las variables useState
  const { authState } = useContext(AuthContext)
  const [permissions, setPermissions] = useState([])
  const [idPermission, setIdPermission] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [loader, setLoader] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  })
  const { token } = authState //destructuración para traer el token

  useEffect(() => {
    //Efecto que carga la funcion pata mostrar los permisos
    loadPermissions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetForm = () => {
    //función para resetear el formulario
    setShowAlert(false)
  }

  //Función al cargar los usuarios
  const loadPermissions = async () => {
    resetForm()
    setLoader(true)
    const params = { token }
    const response = await apiGetPermissions(params)
    const { success, message, data } = response
    if (success) {
      setPermissions(data)
    } else {
      setShowAlert(true)
      setAlert({ title: 'Error', description: message, severity: 'error' }) //descripció de la alerta
    }
    setLoader(false)
  }

  //Función de la acciones de la tabla.
  const handleTableActions = (action, id, obj) => {
    setIdPermission(id)
    switch (action) {
      case tableDelete: //En caso que la acción sea eliminar se abre el modal de eliminar.
        setShowDelete(true)
        break
      default:
        setIdPermission('')
        break
    }
  }

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Configuración de Permisos" className="text-3xl" />
      <Divider />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Permiso"
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
            data={permissions}
            columns={columnsPermissions}
            actions={[tableDelete]}
            actionClick={handleTableActions}
            identifierSort="name"
            identifierHidden="id"
            identifierAction="id"
            isSearch
          />
          {loader && <Loader mode="modal" />}
        </div>
      </div>
      <DialogPermissionsAdd
        open={showAdd}
        setOpen={setShowAdd}
        onDismiss={loadPermissions}
      />
      <DialogPermissionsDelete
        idPermission={idPermission}
        open={showDelete}
        setOpen={setShowDelete}
        onDismiss={loadPermissions}
      />
    </div>
  )
}
