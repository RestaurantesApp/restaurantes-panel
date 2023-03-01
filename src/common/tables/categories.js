export const columnsCategories = [
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Posición',
    accessor: 'position',
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