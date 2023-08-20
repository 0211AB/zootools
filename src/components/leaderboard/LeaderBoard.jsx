import React from 'react'
import './LeaderBoard.css'
import leaderBoardData from '../../data/leaderboard'

const LeaderBoard = () => {

  return (
    <div className='leaderboard'>
      <div className='controls'>
        <h3>User leaderBoard</h3>
      </div>

      <div className='lb-table'>
        <div className='emails'>
          <h4>Email</h4>
          {leaderBoardData.map((data, idx) => <h4 key={idx}>{data.email}</h4>)}
        </div>
        <div className='friends'>
          <h4>Invites</h4>
          {leaderBoardData.map((data, idx) => <h4 key={idx}>{data.invites}</h4>)}
        </div>
        <div className='country'>
          <h4>Country</h4>
          {leaderBoardData.map((data, idx) => <h4 key={idx}>{data.country}</h4>)}
        </div>
      </div>


      <button
        type="button"
        className={`page-btn active`}
      >
        See leaderboard
      </button>
    </div>
  )
}

export default LeaderBoard