import React from 'react'

import '../styles/CardBottom.css'

function CardBottom() {
  const activity='Work'
  const hour='32 hrs'
  const week='Last Week - 36hrs'
  return (
    <div className='card-bottom'>
      <div className='card-bottom-img'>
        <span></span><span></span>
      </div>
      <div className='card-bottom-container'>
      <div className='card-bottom-act'>
        <span>{activity}</span><span></span>
      </div>
      <div className='card-bottom-sem'>
        <span>{hour}</span><span>{week}</span>
      </div>
      </div>
        
      
    </div>
  )
}

export { CardBottom }