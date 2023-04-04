import React, { useState }  from 'react';
import './Webdesign.css';
import { Link } from 'react-router-dom';
import Getintouch from '../../Components/Getintouch/Getintouch'; 

function Webdesign() {

    const [projects] = useState([
        {
            id:1,
            title:"Express",
            description: "A multi-carrier shipping website for ecommerce businesses",
            image: "/webdesign/image-express.jpg",
            alt: "express-image"
        },
        {
            id:2,
            title: "Transfer",
            description: "Site for low-cost money transfers and sending money within seconds",
            image: "/webdesign/image-transfer.jpg",
            alt: "transfer-image"
        },
        {
            id:3,
            title:"Photon",
            description: "A state-of-the-art music player with high-resolution audio and DSP effects",
            image: "/webdesign/image-photon.jpg",
            alt: "photon-image"
        },
        {
            id:4,
            title: "Builder",
            description: "Connects users with local contractors based on their location",
            image: "/webdesign/image-builder.jpg",
            alt: "builder-image"
        },
        {
            id:5,
            title: "Blogr",
            description: "Blogr is a platform for creating an online blog or publication",
            image: "/webdesign/image-blogr.jpg",
            alt: "blogr-image"
        },
        {
            id:6,
            title: "Camp",
            description: "Get expert training in coding, data, design, and digital marketing",
            image: "/webdesign/image-camp.jpg",
            alt: "camp-image"
        },
    ]);

    return( 
        <div className='designocontainer'>

             {/* Header section */}

                <div className='designhero text-center'>
                        <h2 className='designtext text-center mb-3'>Web Design</h2>
                        <p className='designsubtext text-center'>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
                </div>

            {/* Web Projects Section */}

                <div className='designprojects'>

                    <div className='row'>
                     
                     {projects.map((item) => (

                        <div key={item.id} className='project col-lg-4 mt-5'>

                            <div className='projectimage'>
                                <img src={item.image} alt={item.alt} className='img-fluid projectimg' />
                            </div>

                            <div className='projectinfo text-center'>
                                <h4 className='projecttitle text-center mt-3 mb-3'>{item.title}</h4>
                                <p className='projectdecription text-center'>{item.description}</p>
                            </div>

                        </div>

                    ))}
                        
                    </div>
                </div>  

                {/* Other Projects section */} 

                <div className='otherprojectcontainer text-center'>

                        <div className='otherproject secondproject'>
                            
                            <div className='otherprojectinner text-center'>
                                <p className='projecttype'>App design</p>
                            <Link to="/appdesign">
                                <p className='seeproject'>View projects <span className='designicon'>&rsaquo;</span></p>
                            </Link>  
                            </div>
                        
                        </div>

                        <div className='otherproject thirdproject'>

                            <div className='otherprojectinner text-center'>
                                <p className='projecttype'>Graphic design</p>
                            <Link to="/graphicdesign">
                                <p className='seeproject'>View projects <span className='projecticon'>&rsaquo;</span></p>
                            </Link>  
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

export default Webdesign; 