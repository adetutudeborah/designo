import React from 'react';
import { Link } from 'react-router-dom';
import './Getintouch.css'; 

function Getintouch() { 
    return(
     <div className='touchsection'>    
        <div className='touchcontainer'> 

            <div className='touchinnercontainer'>
                <div className='touchheader'>
                    <h3 className='touchtext mb-4'>Let’s talk about <br /> your project</h3>
                    <p className='touchsubtext'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>

                <div>
                  <Link to="/contact"> 
                    <a href='' className='touchbtn'> Get in touch</a> 
                  </Link>  
                </div>
            </div>
       </div>
    </div>    
    )
}

export default Getintouch;