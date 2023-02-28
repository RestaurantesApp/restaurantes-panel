import React, { memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '600px',
  height: '300px',
}
const GoogleMapsCustom = ({
  latitud = {},
  longitud = {},
  onClick = (e) => null,
}) => {
  //Coordenadas que muestra el mapa inicialmente
  const center = {
    lat: latitud,
    lng: longitud,
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:`${process.env.REACT_APP_API_KEY_GOOGLE}`,
    
  })
  
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onClick={onClick}
    >
      <Marker
        onDragStart
        draggable
        position={{ lat: latitud, lng: longitud }}
        onClick={onClick}
      />
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}
export default memo(GoogleMapsCustom)


