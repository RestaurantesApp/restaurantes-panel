export const columnsUsers = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Rol',
    accessor: 'role',
  },
]

export const columnsUsersPermissions = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Módulo',
    accessor: 'path',
    Cell: ({ value }) => {
      let newValue = ''
      switch (value) {
        case 'users':
          newValue = 'Usuarios'
          break
        case 'permissions':
          newValue = 'Permisos'
          break
        default:
          newValue = ' '
          break
      }
      return newValue
    },
  },
  {
    Header: 'Acción',
    accessor: 'method',
    Cell: ({ value }) => {
      let newValue = ''
      switch (value) {
        case 'GET':
          newValue = 'Obtener'
          break
        case 'POST':
          newValue = 'Crear'
          break
        case 'PATCH':
          newValue = 'Actualizar'
          break
        case 'DELETE':
          newValue = 'Eliminar'
          break
        default:
          newValue = ' '
          break
      }
      return newValue
    },
  },
]
