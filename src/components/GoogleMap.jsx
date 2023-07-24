import React, { useState } from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react'

const GoogleMap = (props) => {

    const [infoWindow, setInfoWindow] = useState(false)
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({})

    const style = {
        height: '50%',
        width: '50%'
    }

    const coords = { lat: 13.7563, lng: 100.5018 }

    let onMarkerClick = ((props, marker, e) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setInfoWindow(true)
    })

    let onMapClick = ((props) => {
        if(infoWindow) {
            setInfoWindow(false)
            setActiveMarker(null)
        }
    })

  return (
    <div>
        <Map
            google={props.google}
            onClick={onMapClick}
            zoom={9}
            style={style}
            initialCenter={coords}
        >
            {/* <Marker 
                onClick={onMarkerClick}
                title={'title'}
                name={'name'}
                position={coords}
            /> */}

            {/* <Marker 
                onClick={onMarkerClick}
                title={'test'}
                name={'name'}
                position={{lat: 13.7563, lng: 50}}
            /> */}

            <InfoWindow>
                <div>
                    <h1>{selectedPlace.name}</h1>
                </div>
            </InfoWindow>

        </Map>
    </div>
  )
}

export default GoogleApiWrapper({apiKey: ''})(GoogleMap)