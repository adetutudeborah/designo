import React from 'react';
import './Locations.css';
import Getintouch from '../../Components/Getintouch/Getintouch'; 
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const canada = [43.64419484706138, -79.3945608610694]
const australia = [-30.329148449296643, 149.78822916951194]
const unitedkingdom = [53.71041818128988, -1.3417707595071173]

function Locations() {
     
    return(
        <div className='designocontainer'> 

            <div className='locationpagecontainer'> 
              
                <div className='locationinnercontainer canada'>

                       {/* Location info */}

                        <div className='locationinfo'>

                            <h4 className='locationname mb-4'>Canada</h4>

                            <div className='companylocation'>
                                <div className='address'>
                                    <p className='addressheading'>Designo Central Office</p>
                                    <p>3886 Wellington Street</p>
                                    <p> Toronto, Ontario M9C 3J5</p>
                                </div>

                                <div className='contact'>
                                    <p className='contactheading'>Contact</p>
                                    <p>P : +1 253-863-8967 </p>
                                    <p>M : contact@designo.co</p>
                                </div>
                            </div>
                        </div>

                         {/* Location map */}

                        <div className='locationmap'>
                            <MapContainer 
                                center={canada} 
                                zoom={13} 
                                scrollWheelZoom={false}
                                className='locationmap'
                            >         
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={canada}>
                                    <Popup>
                                        Designo Central Office <br />
                                        3886 Wellington Street <br />
                                        Toronto, Ontario M9C 3J5 <br />
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                </div>

                 <div className='locationinnercontainer australia'>

                       {/* Location info */}

                        <div className='australiainfo'>

                            <h4 className='locationname mb-4'>Australia</h4>

                            <div className='companylocation'>
                                <div className='address'>
                                    <p className='addressheading'> Designo AU Office</p>
                                    <p> 19 Balonne Street</p>
                                    <p>New South Wales 2443</p>
                                </div>

                                <div className='contact'>
                                    <p className='contactheading'>Contact</p>
                                    <p>P : (02) 6720 9092 </p>
                                    <p>M : contact@designo.au</p>
                                </div>
                            </div>
                        </div>

                         {/* Location map */}

                        <div className='australiamap'>
                                <MapContainer 
                                    center={australia} 
                                    zoom={13} 
                                    scrollWheelZoom={false}
                                    className='australiamap'
                                >         
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={australia}>
                                        <Popup>
                                             Designo AU Office <br />
                                             19 Balonne Street  <br />
                                             New South Wales 2443 <br />
                                        </Popup>
                                    </Marker>
                               </MapContainer>
                        </div>
                </div>

                 <div className='locationinnercontainer united-kingdom'>

                       {/* Location info */}

                        <div className='locationinfo'>

                            <h4 className='locationname mb-4'>United Kingdom</h4>

                            <div className='companylocation'>
                                <div className='address'>
                                    <p className='addressheading'>Designo UK Office</p>
                                    <p>13 Colorado Way</p>
                                    <p>Rhyd-y-fro SA8 9GA</p>
                                </div>

                                <div className='contact'>
                                    <p className='contactheading'>Contact</p>
                                    <p>P : 078 3115 1400</p>
                                    <p>M : contact@designo.uk</p>
                                </div>
                            </div>
                        </div>

                         {/* Location map */}

                        <div className='locationmap'>
                               <MapContainer 
                                    center={unitedkingdom} 
                                    zoom={13} 
                                    scrollWheelZoom={false}
                                    className='locationmap'
                                >         
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={unitedkingdom}>
                                        <Popup>
                                             Designo UK Office<br />
                                             13 Colorado Way <br />
                                             Rhyd-y-fro SA8 9GA <br />
                                        </Popup>
                                    </Marker>
                               </MapContainer>
                        </div>
                </div>
            
            </div>
          

           {/* Let's talk about your project */}

           <div>
              <Getintouch />
          </div>
       </div>
    )
}

export default Locations;
