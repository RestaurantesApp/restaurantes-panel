import React from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom } from '../../atoms';
import { TableCustom } from '../../templates';

// Const
import {
  columnsBasic,
  columnsBasic2,
  columnsBasic3,
} from '../../../common/tables';
import { typesTableActions } from '../../../common/types';

// Fake Data
import users from '../../../common/tables/users.json';
import usersMin from '../../../common/tables/users-min.json';

const { tableAdd, tableEdit, tableDelete, tableView } = typesTableActions;

const ComponentsTable = () => {
  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Tablas" className="text-6xl" />
      <Divider />
      {/* Tipos de Tablas */}
      <div className="px-4 pt-4">
        <div>
          <TextCustom text="Tabla básica" className="text-xl" />
          <Divider className="mb-2" />
          <TableCustom data={users} columns={columnsBasic} />
        </div>
        <div className="mt-10">
          <TextCustom text="Tabla con búsqueda" className="text-xl" />
          <Divider className="mb-2" />
          <TableCustom data={usersMin} columns={columnsBasic} isSearch />
        </div>
        <div className="mt-10">
          <TextCustom
            text="Tabla con ordenamiento por defecto"
            className="text-xl"
          />
          <Divider className="mb-2" />
          <TableCustom
            data={usersMin}
            columns={columnsBasic}
            identifierSort="first_name"
          />
        </div>
        <div className="mt-10">
          <TextCustom text="Tabla con columna id oculta" className="text-xl" />
          <Divider className="mb-2" />
          <TableCustom
            data={usersMin}
            columns={columnsBasic}
            identifierHidden="id"
          />
        </div>
        <div className="mt-10">
          <TextCustom text="Tabla con botones de acción" className="text-xl" />
          <Divider className="mb-2" />
          <TableCustom
            data={usersMin}
            columns={columnsBasic2}
            actions={[tableView, tableAdd, tableEdit, tableDelete]}
            actionClick={(action, id, obj) => console.log(action, id, obj)}
          />
        </div>
        <div className="mt-10">
          <TextCustom
            text="Cambiando orden de botones de acción"
            className="text-xl"
          />
          <Divider className="mb-2" />
          <TableCustom
            data={usersMin}
            columns={columnsBasic2}
            actions={[tableDelete, tableEdit, tableView]}
            actionClick={(action, id, obj) => console.log(action, id, obj)}
          />
        </div>
        <div className="mt-10">
          <TextCustom
            text="Título para la columna acción"
            className="text-xl"
          />
          <Divider className="mb-2" />
          <TableCustom
            data={usersMin}
            columns={columnsBasic2}
            actionColumnTitle="Acciones"
            actions={[tableView, tableAdd, tableEdit, tableDelete]}
            actionClick={(action, id, obj) => console.log(action, id, obj)}
          />
        </div>
        <div className="mt-10">
          <TextCustom
            text="Columna first_name como identificador de acciones"
            className="text-xl"
          />
          <Divider className="mb-2" />
          <TableCustom
            data={usersMin}
            columns={columnsBasic2}
            identifierAction="first_name"
            actions={[tableView, tableAdd, tableEdit, tableDelete]}
            actionClick={(action, id, obj) => console.log(action, id, obj)}
          />
        </div>
        <div className="mt-10">
          <TextCustom text="Estados para tabla" className="text-xl" />
          <Divider className="mb-2" />
          <TableCustom
            data={usersMin}
            columns={columnsBasic3}
            identifierSort="STATE"
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default ComponentsTable;
