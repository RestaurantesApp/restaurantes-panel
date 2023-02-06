import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

// Assets
import DeliveryAnimation from '../../../assets/animations/DeliveryAnimation.json';
import LoaderCircleAnimation from '../../../assets/animations/LoaderCircleAnimation.json';
import LocationAnimation from '../../../assets/animations/LocationAnimation.json';

//Styles
import './styles.css';

const Loader = ({
  typeAnimation = '',
  loop = true,
  size = '3rem',
  mode = 'block',
  speed = 1,
  pause = false,
  setPause = () => null,
  play = true,
  setPlay = () => null,
  stop = false,
  setStop = () => null,
}) => {
  const lottieRef = useRef();

  useEffect(() => {
    lottieRef.current.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    if (pause) {
      lottieRef.current.pause();
      setPause(false);
    }
  }, [pause, setPause]);

  useEffect(() => {
    if (play) {
      lottieRef.current.play();
      setPlay(false);
    }
  }, [play, setPlay]);

  useEffect(() => {
    if (stop) {
      lottieRef.current.stop();
      setStop(false);
    }
  }, [stop, setStop]);

  const renderAnimationData = () => {
    let data;
    switch (typeAnimation) {
      case 'delivery':
        data = DeliveryAnimation;
        break;
      case 'location':
        data = LocationAnimation;
        break;
      default:
        data = LoaderCircleAnimation;
        break;
    }
    return data;
  };

  return (
    <div className={mode === 'modal' ? 'loader-modal' : ''}>
      <Lottie
        lottieRef={lottieRef}
        animationData={renderAnimationData()}
        loop={loop}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Loader;
