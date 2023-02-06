import React, { useState } from 'react';

// Components
import { DialogActions, DialogContent, Divider } from '@mui/material';
import {
  ButtonCustom,
  CheckBoxCustom,
  ControlLabelCustom,
  TextCustom,
} from '../../atoms';
import { DialogCustom } from '../../templates';
import { DialogTest } from '../../organisms';

const ComponentsDialog = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [show7, setShow7] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [show8, setShow8] = useState(false);

  const handleDismiss7 = () => {
    setCheck2(false);
  };

  return (
    <div className="pb-4">
      <TextCustom text="Ventanas Modales" className="text-6xl" />
      <Divider />
      {/* Tipos */}
      <div className="px-4 pt-4">
        <TextCustom text="Tipos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-2">
          <div>
            <ButtonCustom
              text="Ventana modal basica"
              className="mb-1"
              onClick={() => setShow1(true)}
            />
          </div>
          <div>
            <ButtonCustom
              text="Ventana modal sin propiedad Dismiss"
              className="mb-1"
              onClick={() => setShow2(true)}
            />
          </div>
          <div>
            <ButtonCustom
              text="Ventana modal sin icono de cerrar"
              className="mb-1"
              onClick={() => setShow3(true)}
            />
          </div>
        </div>
        <Divider />
      </div>
      {/* Botones de accion */}
      <div className="px-4 pt-4">
        <TextCustom text="Botones de accion" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-2">
          <div>
            <ButtonCustom
              text="Ventana modal con boton de accion"
              className="mb-1"
              onClick={() => setShow4(true)}
            />
          </div>
          <div>
            <ButtonCustom
              text="Ventana modal con botones de accion"
              className="mb-1"
              onClick={() => setShow5(true)}
            />
          </div>
          <div>
            <ButtonCustom
              text="Ventana modal con boton de accion deshabilitado"
              className="mb-1"
              onClick={() => setShow6(true)}
            />
          </div>
          <div>
            <ButtonCustom
              text="Ventana modal con evento dismiss"
              className="mb-1"
              onClick={() => setShow7(true)}
            />
          </div>
        </div>
        <Divider />
      </div>
      {/* Ventana Modal Avanzada */}
      <div className="px-4 pt-4">
        <TextCustom text="Ventana Modal Avanzada" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-2">
          <div>
            <ButtonCustom
              text="Ventana modal con formulario"
              className="mb-1"
              onClick={() => setShow8(true)}
            />
          </div>
        </div>
        <Divider />
      </div>
      {/* Ventanas modales basicas */}
      <div>
        <DialogCustom open={show1} setOpen={setShow1} title="Ventana modal">
          <DialogContent>
            <TextCustom text="Ventana modal basica" variant="h5" />
          </DialogContent>
        </DialogCustom>
      </div>
      <div>
        <DialogCustom
          open={show2}
          setOpen={setShow2}
          title="Ventana modal"
          disabledDismiss
        >
          <DialogContent>
            <TextCustom
              text="Ventana modal sin propiedad Dismiss"
              variant="h5"
            />
          </DialogContent>
        </DialogCustom>
      </div>
      <div>
        <DialogCustom
          open={show3}
          setOpen={setShow3}
          title="Ventana modal"
          disabledIconClose
        >
          <DialogContent>
            <TextCustom text="Ventana modal sin icono de cerrar" variant="h5" />
          </DialogContent>
        </DialogCustom>
      </div>
      {/* Ventanas con botones de acciones */}
      <div>
        <DialogCustom open={show4} setOpen={setShow4} title="Ventana modal">
          <DialogContent>
            <TextCustom text="Ventana modal con boton de accion" variant="h5" />
          </DialogContent>
          <DialogActions>
            <ButtonCustom
              text="Cerrar"
              onClick={() => setShow4(false)}
              typeColor="secondary"
            />
          </DialogActions>
        </DialogCustom>
      </div>
      <div>
        <DialogCustom open={show5} setOpen={setShow5} title="Ventana modal">
          <DialogContent>
            <TextCustom
              text="Ventana modal con botones de accion"
              variant="h5"
            />
          </DialogContent>
          <DialogActions>
            <ButtonCustom
              text="Cancelar"
              color="error"
              onClick={() => setShow5(false)}
              typeColor="secondary"
            />
            <ButtonCustom
              text="Guardar"
              onClick={() => setShow5(false)}
              typeColor="primary"
            />
          </DialogActions>
        </DialogCustom>
      </div>
      <div>
        <DialogCustom open={show6} setOpen={setShow6} title="Ventana modal">
          <DialogContent>
            <TextCustom
              text="Ventana modal con boton de accion deshabilitado"
              variant="h6"
            />
            <ControlLabelCustom name={'Estoy de acuerdo con los terminos'}>
              <CheckBoxCustom value={check1} setValue={setCheck1} />
            </ControlLabelCustom>
            <div>
              <TextCustom text="Nota: " className="font-bold" />
              <TextCustom
                text="Esta ventana modal no resetea el valor del CheckBox al cerrarse"
                className="italic"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <ButtonCustom
              text="Cancelar"
              color="error"
              onClick={() => setShow6(false)}
              typeColor="secondary"
            />
            <ButtonCustom
              text="Guardar"
              onClick={() => setShow6(false)}
              disabled={!check1}
              typeColor="primary"
            />
          </DialogActions>
        </DialogCustom>
      </div>
      <div>
        <DialogCustom
          open={show7}
          setOpen={setShow7}
          title="Ventana modal"
          onDismiss={handleDismiss7}
        >
          <DialogContent>
            <TextCustom text="Ventana modal con evento dismiss" variant="h6" />
            <ControlLabelCustom name={'Estoy de acuerdo con los terminos'}>
              <CheckBoxCustom value={check2} setValue={setCheck2} />
            </ControlLabelCustom>
          </DialogContent>
          <DialogActions>
            <ButtonCustom
              text="Cancelar"
              color="error"
              onClick={() => {
                setShow7(false);
                handleDismiss7();
              }}
              typeColor="secondary"
            />
            <ButtonCustom
              text="Guardar"
              onClick={() => {
                setShow7(false);
                handleDismiss7();
              }}
              typeColor="primary"
              disabled={!check2}
            />
          </DialogActions>
        </DialogCustom>
      </div>
      {/* Ventanas modal avanzada */}
      <DialogTest open={show8} setOpen={setShow8} />
    </div>
  );
};

export default ComponentsDialog;
