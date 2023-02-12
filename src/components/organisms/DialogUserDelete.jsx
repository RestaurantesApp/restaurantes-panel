import React, { useContext, useState, useEffect } from 'react';

// Hooks
import { AuthContext } from '../../context';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../templates';
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../atoms';

// Services
import { apiDeleteUser, apiGetUser } from '../../services/apis';

export const DialogUserDelete = ({
  idUser = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  const { authState } = useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  });
  const { token } = authState;

  useEffect(() => {
    if (open) {
      loadUser();
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const resetForm = () => {
    setShowAlert();
    setName('');
    setLoader(false);
  };

  const loadUser = async () => {
    setLoader(true);
    const params = { idUser, token };
    const response = await apiGetUser(params);
    const { success, message, data } = response;
    if (success) {
      setName(data.name);
    } else {
      setShowAlert(true);
      setAlert({
        title: 'Error',
        description: message,
        severity: 'warning',
      });
    }
    setLoader(false);
  };

  const handleAccept = async () => {
    setLoader(true);
    const params = { idUser, token };
    const response = await apiDeleteUser(params);
    const { success, message } = response;
    if (success) {
      setOpen(false);
      onDismiss();
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

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Eliminar Usuario"
      onDismiss={onDismiss}
    >
      <DialogContent>
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative items-center mt-4">
          <TextCustom
            text="¿Esta seguro que desea eliminar este Usuario?"
            className="font-normal"
          />
          <TextCustom text={name} className="font-medium" />
          <TextCustom
            text="No lo podrá recuperar"
            className="font-normal my-3 text-danger"
          />
          {loader && <Loader mode="modal" />}
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        <ButtonCustom
          text="Eliminar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  );
};
