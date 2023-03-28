import React from 'react'; 
import './About.css';
// import images from "../../assets/images";
import Getintouch from '../../Components/Getintouch/Getintouch';  
import { Link } from 'react-router-dom';
import images from '../../assets/images';

function About() {
    return(
        <div className='container'>

            {/* About Hero Section */}

            <div className='aboutherocontainer'>

                <div className='abouthero'>
                   <h2 className='aboutherotext mb-4'> About us</h2>
                   <p className='aboutherosubtext'> 
                        Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                        We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
                        that make real impact. We’re always looking forward to creating brands, products, and 
                        digital experiences that connect with our clients' audiences.
                   </p>
                </div>

                <div className='aboutheroimg'>
                    <img src={images.abouthero} alt="about-hero-img" className='aboutheroimg'/>
                </div>
      
            </div>

            {/* About Team */}

            <div className='aboutteamcontainer'>

                 <div className='aboutteamimg'>
                    <img src={images.aboutteam} alt="about-team-img" className='aboutteamimg'/>
                </div>

                <div className='aboutteamheader'>
                   <h2 className='aboutteamtext mb-4'>World-class talent</h2>
                   <p className='aboutteamdescription'>
                        We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
                        crafted from concept to launch, ensuring success in its given market. We are constantly updating 
                        our skills in a myriad of platforms.
                        <br />
                        <br />
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
                        are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
                        Clients have always been impressed with our high-quality outcomes that encapsulates their 
                        brand’s story and mission.
                   </p>
                </div>
      
            </div>

            {/* See Location */}

            <div className='aboutlocationcontainer'>

                <div className='row text-center'>

                    <div className='col-lg-4 aboutlocation'>
                    <img src={images.canada} alt="canada-location-img" className='img-fluid aboutlocationimg'/>
                    
                    <p className='aboutlocationname'>Canada</p>
                       <Link to="/location">
                        <a href='' className='seelocationbtn'>See Location</a> 
                        </Link>        
                    </div>

                    <div className='col-lg-4 aboutlocation'>
                    <img src={images.australia} alt="australia-location-img" className='img-fluid aboutlocationimg'/>
                    <p className='aboutlocationname'>Australia</p>
                        <Link to="/location">
                        <a href='' className='seelocationbtn'>See Location</a> 
                        </Link>        
                    </div>

                    <div className='col-lg-4 aboutlocation'>
                <img src={images.unitedkingdom} alt="united-kingdom-location-img" className='img-fluid aboutlocationimg'/>
                    <p className='aboutlocationname'>United Kingdom</p>
                       <Link to="/location">
                        <a href='' className='seelocationbtn'>See Location</a> 
                        </Link>        
                    </div>

                </div>  
      
            </div>

            {/* Company Value proposition */}

            <div className='companyvaluecontainer'>

                <div className='companyvalueheader'>
                   <h2 className='companyvaluetext mb-4'>The real deal</h2>
                   <p className='companyvaluesubtext'>
                        As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                        Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
                        opportunity. We make design and technology more accessible and give you tools to measure success.
                        <br />
                        <br />
                        We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
                        we inspire audiences to take action and drive real results.
                   </p>
                </div>

                <div className='companyvalueimg'>
                    <img src={images.companyvalue} alt="company-value-img" className='companyvalueimg'/>
                </div>
      
            </div>

            
          {/* Let's talk about your project */}

          <div>
            <Getintouch />
          </div>
      
       </div>
    )
}

export default About;

