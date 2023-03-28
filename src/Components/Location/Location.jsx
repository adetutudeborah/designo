import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css'; 
import images from '../../assets/images';

function Location() { 
    return(
        <div className='aboutlocationcontainer'>

            <div className='row text-center'>

                <div className='col-lg-4 aboutlocation'>
                  <img src={images.canada} alt="canada-location-img" className='img-fluid aboutlocationimg'/>  
                <p className='aboutlocationname'>Canada</p>
                <Link to="/locations">
                    <a href='' className='seelocationbtn'>See Location</a> 
                    </Link>        
                </div>

                <div className='col-lg-4 aboutlocation'>
                  <img src={images.australia} alt="australia-location-img" className='img-fluid aboutlocationimg'/>
                <p className='aboutlocationname'>Australia</p>
                    <Link to="/locations">
                    <a href='' className='seelocationbtn'>See Location</a> 
                    </Link>        
                </div>

                <div className='col-lg-4 aboutlocation'>
                  <img src={images.unitedkingdom} alt="united-kingdom-location-img" className='img-fluid aboutlocationimg'/>
                <p className='aboutlocationname'>United Kingdom</p>
                <Link to="/locations">
                    <a href='' className='seelocationbtn'>See Location</a> 
                    </Link>        
                </div>

            </div>  

    </div> 
    )
}

export default Location;