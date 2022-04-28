import React from 'react'
import { ProfileCard } from './ProfileCard';
import { CardBottom } from './CardBottom';
import '../styles/TimeTracker.css'
import { CardPlay } from './CardPlay';
import { CardStudy } from './CardStudy';

function TimeTracker() {
  return (
      <div className='time-tracker'>
          <ProfileCard/>
          <CardBottom/>
          <CardPlay/>
          <CardStudy/>
          </div>
    
  )
}

export { TimeTracker }