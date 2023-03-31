import React from 'react';
import './Contact.css'; 
import Location from '../../Components/Location/Location';

function Contact() {
    return(
        <div className='container'>

            <div className='contactuscontainer'>
                <div className="row">

                    <div className="contactusinnercontainer col-lg-6">

                        <h2 className='contactustext mb-4'>Contact us</h2>
                        <p className='contactussubtext'> 
                        Ready to take it to the next level? Let’s talk about your project or <br /> idea and find out how we can help your business grow. 
                        If you are <br /> looking for unique digital experiences that’s relatable to your <br /> users, drop us a line.
                        </p>
                        
                    </div>

                    {/* Contact Form */}

                     <div className="contactformcontainer col-lg-6">

                     <div className="contactform">
                            <form>
                                <div className="formgroup mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="text"
                                            id="nameInput"
                                            placeholder="Name" 
                                            name="Full name"
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="formgroup mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="email"
                                            id="emailInput"
                                            placeholder="Email Address" 
                                            name="Email"
                                            required 
                                        />
                                    </div>
                                </div> 

                                <div className="form-group mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="text"
                                            id="phoneNumberInput"
                                            placeholder="Phone" 
                                            name="Phonenumber"
                                            required 
                                        />
                                    </div>
                                </div> 

                            <div className="formgroup">
                                <textarea 
                                    className="mt-3 textarea" 
                                    rows="6" 
                                    placeholder="Your Message" 
                                    name="Message" 
                                    required>
                                </textarea>
                            </div>
                    
                            <div className='mt-4 contactbutton'>
                                <a href="" className='contactbtn'>Submit</a>
                            </div>
                        </form>
                </div>
                        
                    </div>
            
                </div>
            </div>

            <div>
                <Location />
            </div> 

        </div>
    )
}

export default Contact;
