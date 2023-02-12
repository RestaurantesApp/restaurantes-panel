import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'

// Assets
import DeliveryAnimation from '../../../assets/animations/DeliveryAnimation.json'
import LoaderCircleAnimation from '../../../assets/animations/LoaderCircleAnimation.json'
import LocationAnimation from '../../../assets/animations/LocationAnimation.json'

//Styles
import './styles.css'

export const Loader = ({
  typeAnimation = 'loader',
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
  const lottieRef = useRef()

  useEffect(() => {
    if (lottieRef.current) lottieRef.current.setSpeed(speed)
  }, [speed])

  useEffect(() => {
    if (pause) {
      if (lottieRef.current) lottieRef.current.pause()
      setPause(false)
    }
  }, [pause, setPause])

  useEffect(() => {
    if (play) {
      if (lottieRef.current) lottieRef.current.play()
      setPlay(false)
    }
  }, [play, setPlay])

  useEffect(() => {
    if (stop) {
      if (lottieRef.current) lottieRef.current.stop()
      setStop(false)
    }
  }, [stop, setStop])

  const renderAnimationData = () => {
    switch (typeAnimation) {
      case 'delivery':
        return DeliveryAnimation
      case 'location':
        return LocationAnimation
      default:
        return LoaderCircleAnimation
    }
  }

  return (
    <div className={mode === 'modal' ? 'loader-modal' : ''}>
      <Lottie
        lottieRef={lottieRef}
        animationData={renderAnimationData()}
        loop={loop}
        style={{ width: size, height: size }}
      />
    </div>
  )
}
