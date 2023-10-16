import React from 'react'
import{ useRef } from 'react';

const Form = () => {
  const myRef = useRef();
  return (
                // "submitForm(event); reset(); return false;"
            <form onSubmit={(e)=>{
                
                e.preventDefault()
                alert("Your enquiry has been sent")
                myRef.current.reset()}}className="contact-form" id="form"    ref={

                  myRef
                }>
               
                <div className="form-group">
                  <input type="text"  id="sender_name" placeholder="Your Name"
                    minLength="2" required/>
                  
                </div>
                <div className="form-group">
                  <input type="email"  id="sender_email" placeholder="Your Email"
                    required/>
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                    minLength="4" />
                </div>
                
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" minLength="5" placeholder="Message"required></textarea>
                </div>
                <div ><button type="submit" className="btn-submit">Send Message</button></div>
            </form>
  )
}

export default Form
