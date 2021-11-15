import React from 'react'
import { Marker, Popup, Title } from 'react-leaflet'
import {IconLocation} from './IconLocation'


const Markers = (props) => {
  const {places} = props
const markers = places.map((places, i) => ( 
    <Marker 
      key = {i}
      position = {places.geometry} 
      icon = {IconLocation}>
      <Popup>
        {places.name}
      </Popup>
    </Marker>
))
    return markers
}

export default Markers