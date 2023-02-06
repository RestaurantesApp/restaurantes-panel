import React, { memo, useEffect } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';

// Assets
import SearchIcon from '@mui/icons-material/Search';

// Components
import { TextInputCustom } from '../../atoms';
import { TablePagination, TableHeaders, TableRows } from '../../molecules';

const TableCustom = ({
  columns = [],
  data = [],
  isSearch = false,
  identifierHidden = undefined,
  identifierAction = undefined,
  identifierSort = '',
  actionColumnTitle = '',
  actions = [],
  actionClick = () => null,
  isResetPagina = false,
  setIsResetPagina = () => null,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    allColumns,
    pageOptions,
    gotoPage,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      autoResetPage: false,
      initialState: {
        sortBy: [
          {
            desc: false,
            id: identifierSort,
          },
        ],
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { globalFilter, pageIndex } = state;

  useEffect(() => {
    if (identifierHidden) {
      const columnHide = allColumns.find(
        column => column.id === identifierHidden,
      );
      columnHide?.toggleHidden(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      {isSearch && (
        <div>
          <TextInputCustom
            name="Buscar"
            value={globalFilter}
            setValue={setGlobalFilter}
            className="mb-2"
            iconStart={<SearchIcon />}
          />
        </div>
      )}
      <table
        className="w-full fontPRegular border-collapse"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <TableHeaders
                headerGroup={headerGroup}
                isActions={actions.length > 0}
                actionColumnTitle={actionColumnTitle}
              />
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          <TableRows
            identifierName={identifierAction}
            isActions={actions.length > 0}
            actions={actions}
            actionClick={actionClick}
            page={page}
            prepareRow={prepareRow}
          />
        </tbody>
      </table>
      <TablePagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        previousPage={previousPage}
        isResetPagina={isResetPagina}
        setIsResetPagina={setIsResetPagina}
      />
    </div>
  );
};

export default memo(TableCustom);
