import React from 'react';
import './Home.css';
import images from "../../assets/images";
import Getintouch from '../../Components/Getintouch/Getintouch';

function Home() {
    return(
    <div className='container'>

         {/* Hero Section */}
         <div className='header'>
           <div className='headercontainer'>

                <div className='headercontainerinner'> 
                    <h1 className='headertext'>Award-winning custom designs and digital branding solutions</h1>
                    <p className='headersubtext'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                    and engaging brand experiences. Find out more about our services.</p>
                    <a href='' className='headerbtn'>Learn more</a>         
                </div>

                 <div className='headercontainerimg'>
                    <img src={images.phone} alt='image-hero-phone' className='headerimg'/>
                 </div>

           </div>
          </div> 

          {/* Projects Section */}

          <div className='projectcontainer'>

              <div className='designproject designone'>
                {/* <img src={images.webdesignimg} alt='web-design-img' className='designimg'/> */}

                <div className='centered'>
                    <p className='designcategory'>Web design</p>
                    <p className='viewprojects'>View projects <span className='designicon'>&rsaquo;</span></p>
                </div>
              </div>

              <div className='designproject designtwo'>
                {/* <img src={images.appdesignimg} alt='app-design-img' className='designimg'/> */}
                
                <div className='centered'>
                    <p className='designcategory'>App design</p>
                    <p className='viewprojects'>View projects <span className='designicon'>&rsaquo;</span></p>
                </div>
            
              </div>

              <div className='designproject designthree'>
                {/* <img src={images.graphicdesignimg} alt='graphic-design-img' className='designimg'/> */}

                <div className='centered'>
                    <p className='designcategory'>Graphic design</p>
                    <p className='viewprojects'>View projects <span className='designicon'>&rsaquo;</span></p>
                </div>
              
              </div>

          </div>

          {/* Features section */}

          <div className='featurescontainer'> 

                <div className='eachfeature'>
                        <img src={images.passionateimg} alt='passionate-img' className='featureimg'/>
                        <h4 className='featuretext'>Passionate</h4>
                        <p className='featuresubtext'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p> 
                </div>

                <div className='eachfeature'>
                    <img src={images.resourcefulimg} alt='resourceful-img' className='featureimg'/>
                    <h4 className='featuretext'>Resourceful</h4>
                    <p className='featuresubtext'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>

                <div className='eachfeature'>
                    <img src={images.friendlyimg} alt='friendly-img' className='featureimg'/>
                    <h4 className='featuretext'>Friendly</h4>
                    <p className='featuresubtext'> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>

          </div>

          {/* Let's talk about your project */}

          <div>
            <Getintouch />
          </div>
    </div>
    )
}
 
export default Home;

