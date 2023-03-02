export const columnsExtras = [
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Precio',
    accessor: 'price',
  },
  {
    Header: 'Estado',
    accessor: 'active',
    Cell: ({ value }) => {
      let newValue = ''
      switch (value) {
        case true:
          newValue = 'Activo'
          break
        case false:
          newValue = 'Inactivo'
          break
        default:
          newValue = ' '
          break
      }
      return newValue
    },
  },
]