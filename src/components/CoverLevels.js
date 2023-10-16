import React from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../data/coverLevelInfo.js'
import InsuranceType from './InsuranceType.js';
import { coverLevelArr } from '../data/coverLevelInfo.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';




const CoverLevels = () => { 
  

  return (
    <section id='cover-levels'>
        <h1 className='main-header'>Types Of Insurance</h1>
        <FontAwesomeIcon icon="fa-solid fa-car-burst" className='header-icon' />
        <div className='cover-level-container'>
        
           <AnimationOnScroll animateIn='animate__fadeInUp' delay={100}>
            {coverLevelArr.map((i)=>{
            return <InsuranceType name={i.name} description={i.description} key={i.name} />})}
           </AnimationOnScroll>
          
    
        </div>
       
    
    </section>
  )
}

export default CoverLevels
