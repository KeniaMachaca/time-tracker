import React from 'react'

import '../styles/CardPlay.css'

function CardPlay() {
    const activity='Play'
    const hour='10 hrs'
    const week='Last Week - 8hrs'
    return (
      <div className='card-bottom'>
        <div className='card-bottom-imgp'>
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

export { CardPlay }