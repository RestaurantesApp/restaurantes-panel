export const columnsLocales = [
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Dirección',
    accessor: 'address',
  },
  {
    Header: 'Estado',
    accessor: 'active',
    Cell: ({ value }) => {
      let newActive = ''
      if(value === true){
        newActive = 'Activo'
      }else{
        newActive = 'Inactivo'
      }
      return newActive
    }
  },
]