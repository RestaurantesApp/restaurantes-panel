import React from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom } from '../../atoms';

const ComponentsText = () => {
  return (
    <div className="pb-4">
      <TextCustom text="Componentes para textos" className="text-6xl" />
      <Divider />
      <div className="px-4 pt-4">
        <TextCustom text="Variantes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="Variante h1" variant="h1" />
          <TextCustom text="Variante h2" variant="h2" />
          <TextCustom text="Variante h3" variant="h3" />
          <TextCustom text="Variante h4" variant="h4" />
          <TextCustom text="Variante h5" variant="h5" />
          <TextCustom text="Variante h6" variant="h6" />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="text-xs" className="text-xs" />
          <TextCustom text="text-sm" className="text-sm" />
          <TextCustom text="text-base" className="text-base" />
          <TextCustom text="text-lg" className="text-lg" />
          <TextCustom text="text-xl" className="text-xl" />
          <TextCustom text="text-2xl" className="text-2xl" />
          <TextCustom text="text-3xl" className="text-3xl" />
          <TextCustom text="text-4xl" className="text-4xl" />
          <TextCustom text="text-5xl" className="text-5xl" />
          <TextCustom text="text-6xl" className="text-6xl" />
          <TextCustom text="text-7xl" className="text-7xl" />
          <TextCustom text="text-8xl" className="text-8xl" />
          <TextCustom text="text-8xl" className="text-8xl" />
          <TextCustom text="text-9xl" className="text-9xl" />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Fuentes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="Poppins-Regular" className="fontPRegular" />
          <TextCustom text="Poppins-Medium" className="fontPMedium" />
          <TextCustom text="Poppins-SemiBold" className="fontPSemiBold" />
          <TextCustom text="Poppins-bold" className="fontPBold" />
        </div>
        <Divider />
      </div>
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-col">
          <TextCustom text="Texto blanco" className="text-white bg-black" />
          <TextCustom text="Texto negro" className="text-black" />
          <TextCustom text="Texto general" className="color-general" />
          <TextCustom text="Texto primary" className="color-primary" />
          <TextCustom text="Texto secondary" className="color-secondary" />
          <TextCustom text="Texto optional" className="color-optional" />
          <TextCustom text="Texto neutral" className="color-neutral bg-gray" />
          <TextCustom text="Texto gray" className="color-gray" />
          <TextCustom text="Texto ligth" className="color-ligth" />
          <TextCustom text="Texto green" className="color-green" />
          <TextCustom text="Texto red" className="color-red" />
          <TextCustom text="Texto orange" className="color-orange" />
          <Divider className="my-2" />
          <TextCustom text="Fondo blanco" className="bg-white" />
          <TextCustom text="Fondo negro" className="bg-black text-white" />
          <TextCustom text="Fondo general" className="bg-general" />
          <TextCustom text="Fondo primary" className="bg-primary" />
          <TextCustom text="Fondo secondary" className="bg-secondary" />
          <TextCustom text="Fondo optional" className="bg-optional" />
          <TextCustom text="Fondo neutral" className="bg-neutral" />
          <TextCustom text="Fondo gray" className="bg-gray" />
          <TextCustom text="Fondo ligth" className="bg-ligth" />
          <TextCustom text="Fondo green" className="bg-green" />
          <TextCustom text="Fondo red" className="bg-red" />
          <TextCustom text="Fondo orange" className="bg-orange" />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsText;
