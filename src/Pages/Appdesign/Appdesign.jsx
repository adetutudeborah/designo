import React, { useState }  from 'react';
import '../Webdesign/Webdesign.css';
import { Link } from 'react-router-dom';
import Getintouch from '../../Components/Getintouch/Getintouch'; 

function Appdesign() {

    const [projects] = useState([
        {
            id:1,
            title:" Airfilter",
            description: "Solving the problem of poor indoor air quality by filtering the air",
            image: "/appdesign/image-airfilter.jpg",
            alt: "airfilter-image"
        },
        {
            id:2,
            title: "Eyecam",
            description: "Product that lets you edit your favorite photos and videos at any time",
            image: "/appdesign/image-eyecam.jpg",
            alt: "eyecam-image"
        },
        {
            id:3,
            title:"Faceit",
            description: "Get to meet your favorite internet superstar with the faceit app",
            image: "/appdesign/image-faceit.jpg",
            alt: "faceit-image"
        },
        {
            id:4,
            title: "Todo",
            description: "A todo app that features cloud sync with light and dark mode",
            image: "/appdesign/image-todo.jpg",
            alt: "todo-image"
        },
        {
            id:5,
            title: "Loopstudios",
            description: "A VR experience app made for Loopstudios",
            image: "/webdesign/image-blogr.jpg",
            alt: "blogr-image"
        }
    ]);

    return(
        <div className='container'>

             {/* Header section */}

                <div className='designheader'>
                        <h2 className='designtext text-center mb-3'>App Design</h2>
                        <p className='designsubtext text-center'>  Our mobile designs bring intuitive digital solutions  <br /> to your customers right at their fingertips.</p>
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

                        <div className='otherproject firstproject'>
                            
                            <div className='otherprojectinner text-center'>
                                <p className='projecttype'>Web design</p>
                            <Link to="/webdesign">
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

export default Appdesign; 