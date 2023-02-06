import React from 'react';

// Components
import { Tooltip } from '@mui/material';
import { IconButtonCustom, TableState } from '../../atoms';

// Const
import { typesTableActions } from '../../../common/types';

// Assets
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const { tableView, tableAdd, tableEdit, tableDelete } = typesTableActions;

const TableRows = ({
  actionClick = () => null,
  actions = [],
  identifierName = 'id',
  isActions = false,
  page = [],
  prepareRow = () => null,
}) => {
  const renderActions = action => {
    let actionIcon = null;
    switch (action) {
      case tableView:
        actionIcon = (
          <Tooltip title="Ver">
            <VisibilityIcon />
          </Tooltip>
        );
        break;
      case tableAdd:
        actionIcon = (
          <Tooltip title="Agregar">
            <AddIcon />
          </Tooltip>
        );
        break;
      case tableEdit:
        actionIcon = (
          <Tooltip title="Editar">
            <EditIcon />
          </Tooltip>
        );
        break;
      case tableDelete:
        actionIcon = (
          <Tooltip title="Eliminar">
            <DeleteIcon />
          </Tooltip>
        );
        break;
      default:
        actionIcon = (
          <Tooltip title="Delete">
            <VisibilityIcon />
          </Tooltip>
        );
        break;
    }
    return actionIcon;
  };

  const renderCells = cell => {
    let element = null;
    if (cell.column.id === 'STATE') {
      element = <TableState state={cell.value} />;
    } else {
      element = cell.render('Cell');
    }
    return element;
  };

  return (
    <>
      {page.map(row => {
        prepareRow(row);
        return (
          <tr
            className="hover:bg-gray-200 even:bg-gray-100"
            {...row.getRowProps()}
          >
            {row.cells.map(cell => (
              <td
                className="border-b border-gray-300 px-3 py-2 "
                {...cell.getCellProps()}
              >
                {renderCells(cell)}
              </td>
            ))}
            {isActions && (
              <td className="border-b border-gray-300 px-3 flex justify-end">
                {actions.map((action, index) => {
                  let rowEnabled = row.original.ENABLED;
                  let enabled = true;
                  if (typeof rowEnabled === 'boolean') {
                    enabled = rowEnabled;
                  }
                  return (
                    <IconButtonCustom
                      key={index}
                      icon={renderActions(action)}
                      typeColor="default"
                      typeColorHover="primary"
                      size="1.5rem"
                      onClick={() =>
                        actionClick(
                          action,
                          row.original[identifierName],
                          row.original,
                        )
                      }
                      disabled={!enabled}
                    />
                  );
                })}
              </td>
            )}
          </tr>
        );
      })}
    </>
  );
};

export default TableRows;
