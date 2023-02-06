import React, { useState, useEffect } from 'react';

// Components
import { Divider } from '@mui/material';
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../../atoms';
import {
  DialogUserAdd,
  DialogUserDelete,
  DialogUserEdit,
} from '../../organisms';
import { TableCustom } from '../../templates';

// Const
import { columnsUsers } from '../../../common/tables';
import { typesTableActions } from '../../../common/types';

// Services
import { apiGetUsers } from '../../../services/apis';

const { tableEdit, tableDelete } = typesTableActions;

const Configuration = () => {
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  });

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetForm = () => {
    setShowAlert(false);
  };

  const loadUsers = async () => {
    resetForm();
    setLoader(true);
    const response = await apiGetUsers();
    const { success, message, data } = response;
    if (success) {
      setUsers(data.users);
    } else {
      setShowAlert(true);
      setAlert({
        title: 'Error',
        description: message,
        severity: 'error',
      });
    }
    setLoader(false);
  };

  const handleTableActions = (action, id, obj) => {
    setIdUser(id);
    switch (action) {
      case tableEdit:
        setShowEdit(true);
        break;
      case tableDelete:
        setShowDelete(true);
        break;
      default:
        setIdUser('');
        break;
    }
  };

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Configuración de usuarios" className="text-3xl" />
      <Divider />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Usuario"
          className="my-3"
          onClick={() => setShowAdd(true)}
        />
      </div>
      <div className="px-4">
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative">
          <TableCustom
            data={users}
            columns={columnsUsers}
            actions={[tableEdit, tableDelete]}
            actionClick={handleTableActions}
            identifierSort="name"
            identifierHidden="id"
            identifierAction="id"
          />
          {loader && <Loader mode="modal" />}
        </div>
      </div>
      <DialogUserAdd
        open={showAdd}
        setOpen={setShowAdd}
        onDismiss={loadUsers}
      />
      <DialogUserEdit
        idUser={idUser}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={loadUsers}
      />
      <DialogUserDelete
        idUser={idUser}
        open={showDelete}
        setOpen={setShowDelete}
        onDismiss={loadUsers}
      />
    </div>
  );
};

export default Configuration;
