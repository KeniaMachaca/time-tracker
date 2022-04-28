import React from 'react'

import '../styles/CardStudy.css'

function CardStudy() {
    const activity='Study'
    const hour='4 hrs'
    const week='Last Week - 7hrs'
    return (
      <div className='card-bottom'>
        <div className='card-bottom-imgs'>
          <span></span><span></span>
        </div>
        <div className='card-bottom-act'>
          <span>{activity}</span><span></span>
        </div>
        <div className='card-bottom-sem'>
          <span>{hour}</span><span>{week}</span>
        </div>
      </div>
    )
}

export { CardStudy }