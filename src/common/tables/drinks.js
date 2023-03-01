export const columnsDrinks = [
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
      let Value = ''
      switch (value) {
        case true:
          Value = 'Activo'
          break
        case false:
          Value = 'Inactivo'
          break
        default:
          Value = ' '
          break
      }
      return Value
    },
  },
]
