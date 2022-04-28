import React from 'react'

import '../styles/ProfileCard.css'

function ProfileCard() {
    const name = 'Jeremy Robson'
  return (
      <div className='profile-card'>
          <div className='profile-card-top'>
              <div className='profile-card-top__img'></div>
              <div className='profile-card-top__datos'>
                  <span>Report for</span>
                  <span>{name}</span>
              </div>
          </div>
          <div className='profile-card-bottom'>
              <span>Daily</span><span>Weekly</span><span>Monthly</span>
          </div>
      </div>
  )
}

export { ProfileCard }