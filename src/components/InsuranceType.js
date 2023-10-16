import React from 'react'
import '../data/coverLevelInfo.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InsuranceType = ({name, description}) => {
    
  return (
    <div className='insurance-type' key={name}>
        <h1>{name}</h1>

        <p>{description}</p>

        <FontAwesomeIcon icon="fa-solid fa-circle-check" className='insurance-type-i'/>
        

    </div>
  )
}

export default InsuranceType
