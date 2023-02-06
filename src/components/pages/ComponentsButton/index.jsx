import React from 'react';

// Components
import { Divider } from '@mui/material';
import { ButtonCustom, IconButtonCustom, TextCustom } from '../../atoms';

// Assets
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';

const ComponentsButton = () => {
  return (
    <div className="pb-4">
      <TextCustom text="Componentes para botones" className="text-6xl" />
      <Divider />
      <ButtonCustom text="Por defecto" />
      {/* Variante de Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Variantes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <ButtonCustom text="Contained" variant="contained" />
            <ButtonCustom text="Contained" variant="contained" disabled />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Outlined" variant="outlined" />
            <ButtonCustom text="Outlined" variant="outlined" disabled />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Text" variant="text" />
            <ButtonCustom text="Text" variant="text" disabled />
          </div>
        </div>
        <Divider />
      </div>
      {/* Colores para Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <ButtonCustom text="Por defecto" />
            <ButtonCustom text="Por defecto" variant="outlined" />
            <ButtonCustom text="Por defecto" variant="text" />
            <ButtonCustom text="Por defecto" disabled />
            <ButtonCustom text="Por defecto" variant="outlined" disabled />
            <ButtonCustom text="Por defecto" variant="text" disabled />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Primario" typeColor="primary" />
            <ButtonCustom
              text="Primario"
              typeColor="primary"
              variant="outlined"
            />
            <ButtonCustom text="Primario" typeColor="primary" variant="text" />
            <ButtonCustom text="Primario" typeColor="primary" disabled />
            <ButtonCustom
              text="Primario"
              typeColor="primary"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Primario"
              typeColor="primary"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Secundario" typeColor="secondary" />
            <ButtonCustom
              text="Secundario"
              typeColor="secondary"
              variant="outlined"
            />
            <ButtonCustom
              text="Secundario"
              typeColor="secondary"
              variant="text"
            />
            <ButtonCustom text="Secundario" typeColor="secondary" disabled />
            <ButtonCustom
              text="Secundario"
              typeColor="secondary"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Secundario"
              typeColor="secondary"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Exitoso" typeColor="success" />
            <ButtonCustom
              text="Exitoso"
              typeColor="success"
              variant="outlined"
            />
            <ButtonCustom text="Exitoso" typeColor="success" variant="text" />
            <ButtonCustom text="Exitoso" typeColor="success" disabled />
            <ButtonCustom
              text="Exitoso"
              typeColor="success"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Exitoso"
              typeColor="success"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Alerta" typeColor="danger" />
            <ButtonCustom text="Alerta" typeColor="danger" variant="outlined" />
            <ButtonCustom text="Alerta" typeColor="danger" variant="text" />
            <ButtonCustom text="Alerta" typeColor="danger" disabled />
            <ButtonCustom
              text="Alerta"
              typeColor="danger"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Alerta"
              typeColor="danger"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Advertencia" typeColor="warning" />
            <ButtonCustom
              text="Advertencia"
              typeColor="warning"
              variant="outlined"
            />
            <ButtonCustom
              text="Advertencia"
              typeColor="warning"
              variant="text"
            />
            <ButtonCustom text="Advertencia" typeColor="warning" disabled />
            <ButtonCustom
              text="Advertencia"
              typeColor="warning"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Advertencia"
              typeColor="warning"
              variant="text"
              disabled
            />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Gris" typeColor="default" />
            <ButtonCustom text="Gris" typeColor="default" variant="outlined" />
            <ButtonCustom text="Gris" typeColor="default" variant="text" />
            <ButtonCustom text="Gris" typeColor="default" disabled />
            <ButtonCustom
              text="Gris"
              typeColor="default"
              variant="outlined"
              disabled
            />
            <ButtonCustom
              text="Gris"
              typeColor="default"
              variant="text"
              disabled
            />
          </div>
        </div>
        <Divider />
      </div>
      {/* Iconos en botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Iconos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <ButtonCustom
            text="Contained"
            variant="contained"
            endIcon={<SendIcon className="text-white" />}
          />
          <ButtonCustom
            text="Outlined"
            variant="outlined"
            endIcon={<SendIcon className="text-gray-600" />}
          />
          <ButtonCustom
            text="Text"
            variant="text"
            endIcon={<SendIcon className="text-gray-600" />}
          />
          <ButtonCustom
            text="Contained"
            variant="contained"
            startIcon={<ReplyIcon className="text-white" />}
          />
          <ButtonCustom
            text="Outlined"
            variant="outlined"
            startIcon={<ReplyIcon className="text-gray-600" />}
          />
          <ButtonCustom
            text="Text"
            variant="text"
            startIcon={<ReplyIcon className="text-gray-600" />}
          />
        </div>
        <Divider />
      </div>
      {/* TextTransform de Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="TextTransform" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextCustom
            text="Texto por defecto: Por defecto"
            className="text-lg"
          />
          <div className="flex gap-1">
            <TextCustom text="none:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="none" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="capitalize:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="capitalize" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="lowercase:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="lowercase" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="uppercase:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="uppercase" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Colores */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} />
            <TextCustom text="Icon Button Por Defecto" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} disabled />
            <TextCustom text="Icon Button Deshabilitado" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} typeColor="primary" />
            <TextCustom text="Icon Button Primario" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} typeColor="secondary" />
            <TextCustom text="Icon Button Secundario" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} typeColor="success" />
            <TextCustom text="Icon Button Exitoso" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} typeColor="danger" />
            <TextCustom text="Icon Button Alerta" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} typeColor="warning" />
            <TextCustom text="Icon Button Advertencia" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} typeColor="default" />
            <TextCustom text="Icon Button Gris" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Colores con Hover */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores con Hover" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} typeColorHover="default" />
            <TextCustom text="Icon Button Por Defecto con hover Gris" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom
              icon={<DeleteIcon />}
              typeColorHover="default"
              disabled
            />
            <TextCustom text="Icon Button Deshabilitado" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom
              icon={<DeleteIcon />}
              typeColor="default"
              typeColorHover="primary"
            />
            <TextCustom text="Icon Button Gris con hover Primario" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom
              icon={<DeleteIcon />}
              typeColor="default"
              typeColorHover="secondary"
            />
            <TextCustom text="Icon Button Gris con hover Secundario" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom
              icon={<DeleteIcon />}
              typeColor="default"
              typeColorHover="success"
            />
            <TextCustom text="Icon Button Gris con hover Exitoso" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom
              icon={<DeleteIcon />}
              typeColor="default"
              typeColorHover="danger"
            />
            <TextCustom text="Icon Button Gris con hover Alerta" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom
              icon={<DeleteIcon />}
              typeColor="default"
              typeColorHover="warning"
            />
            <TextCustom text="Icon Button Gris con hover Advertencia" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom
              icon={<DeleteIcon />}
              typeColor="primary"
              typeColorHover="default"
            />
            <TextCustom text="Icon Button Primario con hover Gris" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex flex-column items-center">
            <TextCustom text="Tamaños de botones:" />
            <div className="flex items-center">
              <IconButtonCustom icon={<DeleteIcon />} size={16} />
              <IconButtonCustom icon={<DeleteIcon />} size={'1rem'} />
              <IconButtonCustom icon={<DeleteIcon />} />
              <IconButtonCustom icon={<DeleteIcon />} size={'2rem'} />
              <IconButtonCustom icon={<DeleteIcon />} size={48} />
              <IconButtonCustom icon={<DeleteIcon />} size={'3rem'} />
              <IconButtonCustom icon={<DeleteIcon />} size={64} />
              <IconButtonCustom icon={<DeleteIcon />} size={'4rem'} />
            </div>
          </div>
          <TextCustom text="Medidas: 16px, 1rem, 32px, 2rem, 40px, 3rem, 48px, 4rem" />
          <TextCustom
            text="Se aconseja usar las medidas rem"
            className="italic"
          />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsButton;
