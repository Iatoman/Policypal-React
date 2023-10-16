import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const QuestionDiv = ({question, answer}) => {

    const [open, toggleOpen] = useState(false);


  return (
    <div onClick={()=>toggleOpen(!open)} key={question} className={open? 'question-div-open': 'question-div'}>
        <h1>{question} <span className='question-icon' onClick={()=>toggleOpen(!open)}> {open ? <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> : <FontAwesomeIcon icon="fa-solid fa-chevron-down" />}</span></h1>
        

        {open? <div className='question-div-content'>
            <p>{answer}</p> 
        </div> : <div className='no-question-div-content'></div>}
        
    </div>
  )
}

export default QuestionDiv
