import React, { useState }  from 'react';
import '../Webdesign/Webdesign.css';
import { Link } from 'react-router-dom';
import Getintouch from '../../Components/Getintouch/Getintouch'; 

function Graphicdesign() {

    const [projects] = useState([
        {
            id:1,
            title:"Tim Brown",
            description: "A book cover designed for Tim Brown’s new release, ‘Change’",
            image: "/graphicdesign/image-change.jpg",
            alt: "change-image"
        },
        {
            id:2,
            title: "Boxed water",
            description: "A simple packaging concept made for Boxed Water",
            image: "/graphicdesign/image-boxed-water.jpg",
            alt: "boxed-water-image"
        },
        {
            id:3,
            title:"Science!",
            description: "A poster made in collaboration with the Federal Art Project",
            image: "/graphicdesign/image-science.jpg",
            alt: "science-image"
        }
    ]);

    return(
        <div className='designocontainer'>

             {/* Header section */}

                <div className='designhero text-center'>
                        <h2 className='designtext text-center mb-3'>Graphic design</h2>
                        <p className='designsubtext text-center'>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
                </div>

            {/* Web Projects Section */}

                <div className='designprojects'>

                    <div className='row'>
                     
                     {projects.map((item) => (

                        <div key={item.id} className='project col-lg-4 mt-5'>

                            <div className='projectimage'>
                                <img src={item.image} alt={item.alt} className='img-fluid projectimg' />
                            </div>

                            <div className='projectinfo'>
                                <h4 className='projecttitle text-center mt-3 mb-3'>{item.title}</h4>
                                <p className='projectdecription text-center'>{item.description}</p>
                            </div>

                        </div>

                    ))}
                        
                    </div>
                </div>  

                {/* Other Projects section */}

                <div className='otherprojectcontainer text-center'>

                        <div className=' otherproject secondproject'>
                            
                            <div className='otherprojectinner text-center'>
                                <p className='projecttype'>App design</p>
                            <Link to="/appdesign">
                                <p className='seeproject'>View projects <span className='designicon'>&rsaquo;</span></p>
                            </Link>  
                            </div>
                        
                        </div>

                        <div className='otherproject firstproject'>

                            <div className='otherprojectinner text-center'>
                                <p className='projecttype'>Web design</p>
                            <Link to="/webdesign">
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

export default Graphicdesign; 