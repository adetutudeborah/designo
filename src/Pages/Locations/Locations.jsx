import React from 'react';
import './Locations.css';
import Getintouch from '../../Components/Getintouch/Getintouch'; 

function Locations() {
    return(
        <div className='container'>

            <div className='locationpagecontainer'> 
              
                <div className='mt-4 locationinnercontainer canada'>

                       {/* Location info */}

                        <div className='locationinfo'>

                            <h4 className='locationname mb-4'>Canada</h4>

                            <div className='companylocation'>
                                <div className='address'>
                                    <p>Designo Central Office</p>
                                    <p>3886 Wellington Street</p>
                                    <p> Toronto, Ontario M9C 3J5</p>
                                </div>

                                <div className='contact'>
                                    <p>Contact</p>
                                    <p>P : +1 253-863-8967 </p>
                                    <p>M : contact@designo.co</p>
                                </div>
                            </div>
                        </div>

                         {/* Location map */}

                        <div className='locationmap text-center'>
                            Location Map 
                        </div>
                </div>

                 <div className='mt-5 locationinnercontainer australia'>

                       {/* Location info */}

                        <div className='australiainfo'>

                            <h4 className='locationname mb-4'>Australia</h4>

                            <div className='companylocation'>
                                <div className='address'>
                                    <p> Designo AU Office</p>
                                    <p> 19 Balonne Street</p>
                                    <p>New South Wales 2443</p>
                                </div>

                                <div className='contact'>
                                    <p>Contact</p>
                                    <p>P : (02) 6720 9092 </p>
                                    <p>M : contact@designo.au</p>
                                </div>
                            </div>
                        </div>

                         {/* Location map */}

                        <div className='australiamap text-center'>
                            Location Map 
                        </div>
                </div>

                 <div className='mt-5 locationinnercontainer united-kingdom'>

                       {/* Location info */}

                        <div className='locationinfo'>

                            <h4 className='locationname mb-4'>United Kingdom</h4>

                            <div className='companylocation'>
                                <div className='address'>
                                    <p>Designo UK Office</p>
                                    <p>13 Colorado Way</p>
                                    <p>Rhyd-y-fro SA8 9GA</p>
                                </div>

                                <div className='contact'>
                                    <p>Contact</p>
                                    <p>P : 078 3115 1400</p>
                                    <p>M : contact@designo.uk</p>
                                </div>
                            </div>
                        </div>

                         {/* Location map */}

                        <div className='locationmap text-center'>
                            Location Map 
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
