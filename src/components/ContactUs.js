import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from './Form'
import { AnimationOnScroll } from 'react-animation-on-scroll'



const ContactUs = () => {

  return (
    <section id='contact'>
      <h1 className='main-header'>Contact Us </h1>
         <FontAwesomeIcon icon="fa-solid fa-address-book" className='header-icon'/>
         <AnimationOnScroll delay={100} animateIn='animate__fadeInUp'>
         <div className='contact-container'>
            <Form/>
         
         </div>

         </AnimationOnScroll>
         

    </section>
  )
}

export default ContactUs
