import React from 'react';

// Assets
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ReactComponent as SortIcon } from '../../../assets/icons/tablas/SortIcon.svg';

const TableHeaders = ({
  actionColumnTitle = '',
  headerGroup = {},
  isActions = false,
}) => {
  return (
    <>
      {headerGroup.headers.map(column => (
        <th
          className="bg-general text-white px-3 py-2"
          {...column.getHeaderProps(column.getSortByToggleProps())}
        >
          <span className="flex items-center">
            {column.render('Header')}
            {column.isSorted ? (
              column.isSortedDesc ? (
                <ArrowDropUpIcon className="fill-white" />
              ) : (
                <ArrowDropDownIcon className="fill-white" />
              )
            ) : (
              <SortIcon className="w-3 h-3 ml-1 fill-white" />
            )}
          </span>
        </th>
      ))}
      {isActions && (
        <th className="bg-general text-white pl-3 pr-6 py-2 text-end">
          {actionColumnTitle}
        </th>
      )}
    </>
  );
};

export default TableHeaders;
