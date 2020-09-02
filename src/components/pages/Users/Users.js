import React, { useState } from "react";
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from "react-mapbox-gl";
import Body from "../../HOCs/Body";
import Button from "../../ui/Button/Button";
import Icon from "../../assets/man_in_map.png";
import "./Users.scss";
const data = {
   features: [
      {
         _id: 1,
         name: "arun",
         geometry: {
            type: "Point",
            coordinates: [85.31870946581631, 27.661521679182385],
         },
      },
      {
         _id: 2,
         name: "Pawan",
         geometry: {
            type: "Point",
            coordinates: [85.4432054, 27.6733123],
         },
      },
      {
         _id: 3,

         name: "Aman",
         geometry: {
            type: "Point",
            coordinates: [85.4342449, 27.6728986],
         },
      },
      {
         _id: 4,

         name: "Rabin",
         geometry: {
            type: "Point",

            coordinates: [85.4396626, 27.6744999],
         },
      },
      {
         _id: 5,

         name: "Manish",
         geometry: {
            type: "Point",
            coordinates: [85.4406031, 27.6752105],
         },
      },
      {
         _id: 6,

         name: "Rosan",
         geometry: {
            type: "Point",
            coordinates: [85.440963, 27.6756171],
         },
      },

      {
         _id: 8,
         name: "Zenish",
         geometry: {
            type: "Point",
            coordinates: [85.4279633, 27.6665943],
         },
      },
   ],
};

const Users = () => {
   const [selectedUser, setSelectedUser] = useState(null);
   const Map = ReactMapboxGl({
      accessToken:
         "pk.eyJ1IjoiYXJ1bmtwMTEyMiIsImEiOiJja2NyYjU5YzMwOHM3MzBvZTJzdDAwcHV0In0.QIXyccHR_ZX9umVzA2XUUQ",
   });
   data.features.map((user) => {
      console.log(user._id);
   });
   const image = new Image(30, 30);
   image.src = Icon;
   const images = ["myImage", image];

   return (
      <Body>
         <div
            className='btn__container'
            style={{
               position: "absolute",
               right: "16px",
               top: "26px",
               zIndex: "9",
               display: "flex",
            }}>
            <Button
               style={{
                  marginRight: "5px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  // backgroundColor: "white",
                  color: "#ffffff",
                  opacity: "0.5",
               }}
               value='Map view'
            />
            <Button
               style={{
                  marginRight: "5px",
                  backgroundColor: "rgba(0,0,0,0.5)",

                  color: "#ffffff",
                  opacity: "0.5",
               }}
               value='List view'
            />
         </div>
         <Map
            // style='mapbox://styles/arunkp1122/ckejmw4vn5w5j19pt8wbddq8a'
            style='mapbox://styles/arunkp1122/ckejmw4vn5w5j19pt8wbddq8a'
            center={[85.2911133, 27.7089559]}
            zoom={[10]}
            layout={{ "icon-image": "myImage", "icon-allow-overlap": true }}
            containerStyle={{
               height: "100vh",
               width: "100%",
            }}>
            {data.features.map((user) => {
               return (
                  <Marker key={user._id} coordinates={user.geometry.coordinates}>
                     <div
                        style={{
                           display: "flex",
                           flexDirection: "column",
                        }}>
                        <span style={{ color: "black", backgroundColor: "yellow" }}>
                           {user.name}
                        </span>
                        <img src={Icon} alt='user' height='40px' width='40px' />
                     </div>
                  </Marker>
               );
            })}

            {/* <Layer
               type='symbol'
               id='marker'
               layout={{ "icon-image": "myImage", "icon-allow-overlap": true }}
               images={images}>
               {data.features.map((user) => {
                  return (
                     <Feature
                        key={user._id}
                        coordinates={user.geometry.coordinates}
                        onClick={(e) => {
                           console.log(e);
                           // e.stopPropagation();
                           setSelectedUser(user);
                        }}
                     />
                  );
               })}
            </Layer> */}
            {/* {selectedUser ? (
               // <Popup
               //    coordinates={selectedUser.geometry.coordinates}
               //    offset={{
               //       "bottom-left": [12, -38],
               //       bottom: [0, -38],
               //       "bottom-right": [-12, -38],
               //    }}>
               //    <div>Popup</div>
               // </Popup>
            ) : null} */}
         </Map>
         ;
      </Body>
   );
};

export default Users;
