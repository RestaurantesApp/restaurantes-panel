import dayjs from 'dayjs';

export const columnsBasic = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Primer Nombre',
    accessor: 'first_name',
  },
  {
    Header: 'Segundo Nombre',
    accessor: 'last_name',
  },
  {
    Header: 'Fecha de Nacimiento',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      const dateFormat = dayjs(new Date(value)).format('DD/MM/YYYY');
      return dateFormat;
    },
  },
  {
    Header: 'Pais',
    accessor: 'country',
  },
  {
    Header: 'Telefono',
    accessor: 'phone',
  },
];

export const columnsBasic2 = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Primer Nombre',
    accessor: 'first_name',
  },
  {
    Header: 'Segundo Nombre',
    accessor: 'last_name',
  },
];

export const columnsBasic3 = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Primer Nombre',
    accessor: 'first_name',
  },
  {
    Header: 'Segundo Nombre',
    accessor: 'last_name',
  },
  {
    Header: 'Estado',
    accessor: 'STATE',
  },
];
