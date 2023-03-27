import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import images from "../../assets/images";

function Footer() { 
    return(
        <div className='footercontainer'>

           <div className='brandcontainer'>
              <div>
              <Link to="/">
                 <img src={images.whitedesignologo} alt="logo" className="navlogo"/>
               </Link>  
              </div> 
 
              <div className='brandlinks'>
                  <Link to="/about">
                    <span className='brandlink'>Our company</span>
                  </Link>  
                  <Link to="/locations">
                    <span className='brandlink'>Locations</span>
                  </Link>  
                  <Link to="/contact">
                    <span className='brandlink'>Contact</span>
                  </Link>  
              </div>

           </div>
            
           <div className='contactcontainer'>  
 
                <div className='companyaddress'>
                     <p className='address'>Designo Central Office</p>
                     <p className='address'>3886 Wellington Street</p>
                     <p className='address'> Toronto, Ontario M9C 3J5</p>
                </div>

                <div className='companycontact'>
                     <p className='contact'>Contact Us (Central Office)</p>
                     <p className='contact'>P : +1 253-863-8967 </p>
                     <p className='contact'>M : contact@designo.co</p>
                </div>

                <div className='socialmediaicons'>
                    <span className='socialicon'><i class="fa-brands fa-facebook"></i></span>
                    <span className='socialicon'><i class="fa-brands fa-youtube"></i></span>
                    <span className='socialicon'><i class="fa-brands fa-twitter"></i></span>
                    <span className='socialicon'><i class="fa-brands fa-pinterest"></i></span>
                    <span className='socialicon'><i class="fa-brands fa-instagram"></i></span>
                </div>

           </div>

       </div>
    )
}

export default Footer;