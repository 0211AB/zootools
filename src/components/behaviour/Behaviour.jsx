import React, { useState, useEffect } from 'react'
import countrySourceData from '../../data/countrySource';
import citySourceData from '../../data/decide';
import './Behaviour.css'

const Behaviour = ({ show }) => {
  const [activeButton, setActiveButton] = useState('browser');
  const [total, setTotal] = useState(100000000)

  useEffect(() => {
    var sum = 0;

    if (activeButton === 'source')
      for (var i = 0; i < countrySourceData.length; i++)
        sum += countrySourceData[i].number
    else
      for (var j = 0; j < citySourceData.length; j++)
        sum += citySourceData[j].number

    setTotal(sum)
  }, [activeButton])

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className='behaviour'>
      <div className='controls'>
        <h3>Behaviour</h3>
        <div className="pagination-buttons">
          <button
            type="button"
            className={`page-btn ${activeButton === 'browser' ? 'active' : ''}`}
            onClick={() => handleButtonClick('browser')}
          >
            {show?'Country':'Browser'}
          </button>
          <button
            type="button"
            className={`page-btn ${activeButton === 'decide' ? 'active' : ''}`}
            onClick={() => handleButtonClick('decide')}
          >
            {show?'City':'Decides'}
          </button>
        </div>
      </div>

      <div className='traffic-container'>
        {activeButton === 'browser' && countrySourceData.map((entry, index) => (
          <div
            key={index}
            className="traffic-card"
          >
            <div className='data-text'>{show && <img src={entry.image} alt={entry.name}></img>} {entry.name}</div>
            <div className='data-number'>{entry.number}</div>
            <div className='bg-color-div' style={{ width: Math.round((entry.number / total) * 500) + 'px' }}></div>
          </div>

        ))}

        {activeButton !== 'browser' && citySourceData.map((entry, index) => (
          <div
            key={index}
            className="traffic-card"
          >
            <div className='data-text'> {entry.name}</div>
            <div className='data-number'>{entry.number}</div>
            <div className='bg-color-div' style={{ width: Math.round((entry.number / total) * 500) + 'px' }}></div>
          </div>

        ))}
      </div>

      <button
        type="button"
        className={`nav-btn page-btn`}
      >
        See all countries
      </button>

    </div>
  )
}

export default Behaviour