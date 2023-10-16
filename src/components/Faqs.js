import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QuestionDiv from './QuestionDiv'
import { faqArr } from '../data/faqData'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Faqs = () => {
  return (
    <section id='faqs'>
         <h1 className='main-header'>FAQS </h1>
         <FontAwesomeIcon icon="fa-solid fa-circle-question" className='header-icon' />
         
         

         <div className='faqs-container'>
         <AnimationOnScroll animateIn='animate__fadeInUp' delay={100}>
         {faqArr.map((q)=>{
          return  <QuestionDiv key={q.question} question={q.question} answer={q.answer} />
         })}

         </AnimationOnScroll>

         </div>
          
  
         

      
    </section>
  )
}

export default Faqs
