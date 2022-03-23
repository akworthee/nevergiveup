import axios from "axios";
import React from "react";
import GoogleMapReact from 'google-map-react';

const GetLocation = (props) =>{
  console.log("Googl")
    const getPosition = () =>{ 
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
              console.log("Geolocation is not supported by this browser.");
            }
        }
    const showPosition = (position) =>{
        console.log("lat", position.coords)
        props.lat = position.coords.latitude;
        props.log = position.coords.longitude;
        getAddress(position.coords.latitude, position.coords.longitude)
    }

    const getAddress = (lat,long) =>{
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyBv1xPblJD-7pyfAZ8yFWweissDoyc9xzY`)
        // .then(res=>{
        //     console.log("address", res)
        // })
        // .catch(e=>{
        //     console.log(e);
        // })
    }
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return(
      <div className={props.styles.canvas}>
        <div style={{ height: '90vh', width: '100%' }}>
            <button onClick={getPosition}>Get Location</button>
            <GoogleMapReact
          bootstrapURLKeys={{
            key: ""
          }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
        </div>
        </div>
    )
}
 GetLocation.defaultProps = {
    center: {
      lat: 12.966297599999999,
      lng: 80.1898496
    },
    zoom: 11
  };
export default GetLocation;