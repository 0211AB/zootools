import React from 'react'
import './Details.css'

import LeaderBoard from '../leaderboard/LeaderBoard'
import Traffic from '../traffic/Traffic'
import Behaviour from '../behaviour/Behaviour'

const Details = () => {
  return (
    <div className='details-box'>
      <LeaderBoard />
      <Traffic />
      <Behaviour show={true} />
      <Behaviour />
    </div>
  )
}

export default Details