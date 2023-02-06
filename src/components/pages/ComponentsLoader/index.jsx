import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import { ButtonCustom, Loader, TextCustom } from '../../atoms';

const ComponentsLoader = () => {
  const [pause, setPause] = useState(false);
  const [play, setPlay] = useState(true);
  const [stop, setStop] = useState(false);

  const handlePausa = () => {
    setPause(true);
  };

  const handlePlay = () => {
    setPlay(true);
  };

  const handleStop = () => {
    setStop(true);
  };

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Loaders" className="text-6xl" />
      <Divider />
      {/* Data */}
      <div className="px-4 pt-4">
        <TextCustom text="Data" className="text-3xl" />
        <Divider />
        <div className="flex gap-1">
          <Loader size="8rem" />
          <Loader size="8rem" typeAnimation="delivery" />
          <Loader size="8rem" typeAnimation="location" />
        </div>
        <Divider />
      </div>
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <TextCustom text="Repetitivo:" />
            <Loader />
          </div>
          <div className="flex items-center">
            <TextCustom text="Solo una vez:" />
            <Loader loop={false} />
          </div>
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <TextCustom text="32px:" />
            <Loader size={32} />
          </div>
          <div className="flex items-center">
            <TextCustom text="48px:" />
            <Loader />
          </div>
          <div className="flex items-center">
            <TextCustom text="64px:" />
            <Loader size={64} />
          </div>

          <div className="flex items-center">
            <TextCustom text="1rem:" />
            <Loader size="1rem" />
          </div>
          <div className="flex items-center">
            <TextCustom text="2rem:" />
            <Loader size="2rem" />
          </div>
          <div className="flex items-center">
            <TextCustom text="3rem:" />
            <Loader />
            <TextCustom text="por defecto" className="color-red" />
          </div>
          <div className="flex items-center">
            <TextCustom text="4rem:" />
            <Loader size="4rem" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Velocidades */}
      <div className="px-4 pt-4">
        <TextCustom text="Velocidades" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <TextCustom text="x0.5:" />
            <Loader speed={0.5} />
          </div>
          <div className="flex items-center">
            <TextCustom text="x1:" />
            <Loader speed={1} />
            <TextCustom text="por defecto" className="color-red" />
          </div>
          <div className="flex items-center">
            <TextCustom text="x2:" />
            <Loader speed={2} />
          </div>
          <div className="flex items-center">
            <TextCustom text="x3:" />
            <Loader speed={3} />
          </div>
        </div>
        <Divider />
      </div>
      {/* Modos */}
      <div className="px-4 pt-4">
        <TextCustom text="Modos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextCustom text="Modo bloque por defecto:" />
          <div className="flex flex-col w-full h-40">
            <TextCustom text="Texto de prueba" />
            <Loader />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
          </div>
          <TextCustom text="Modo modal:" />
          <div className="flex flex-col w-full h-40 relative">
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <TextCustom text="Texto de prueba" />
            <Loader mode="modal" />
          </div>
          <div>
            <TextCustom text="Nota: " className="font-bold" />
            <TextCustom
              text="El modo modal del loader se superpone sobre el div con posición relativa. Se establece en el centro del div y lo cubre con un fondo opaco."
              className="italic"
            />
          </div>
        </div>
        <Divider />
      </div>
      {/* Eventos */}
      <div className="px-4 pt-4">
        <TextCustom text="Eventos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <ButtonCustom text="Pausa" onClick={handlePausa} />
            <ButtonCustom text="Play" onClick={handlePlay} />
            <ButtonCustom text="Stop" onClick={handleStop} />
          </div>
          <Loader
            pause={pause}
            setPause={setPause}
            play={play}
            setPlay={setPlay}
            stop={stop}
            setStop={setStop}
          />
        </div>
        <Divider />
      </div>
      <div>
        <TextCustom text="Nota: " className="font-bold" />
        <TextCustom
          text="No todas las animaciones se visualizan bien en todas las plataformas como: (web, android y iOS). Es de revisar la documentación oficial de Lottie."
          className="italic"
        />
      </div>
    </div>
  );
};

export default ComponentsLoader;
