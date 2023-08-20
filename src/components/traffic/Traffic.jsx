import React, { useState, useEffect } from 'react'
import trafficSourceData from '../../data/trafficSource';
import citySourceData from '../../data/citySource';
import './Traffic.css'

const Traffic = () => {
    const [activeButton, setActiveButton] = useState('source');
    const [total, setTotal] = useState(100000000)

    useEffect(() => {
        var sum = 0;

        if (activeButton === 'source')
            for (var i = 0; i < trafficSourceData.length; i++)
                sum += trafficSourceData[i].number
        else
            for (var j = 0; j < citySourceData.length; j++)
                sum += citySourceData[j].number

        setTotal(sum)
    }, [activeButton])

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className='traffic'>
            <div className='controls'>
                <h3>Traffic</h3>
                <div className="pagination-buttons">
                    <button
                        type="button"
                        className={`page-btn ${activeButton === 'source' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('source')}
                    >
                        Source
                    </button>
                    <button
                        type="button"
                        className={`page-btn ${activeButton === 'city' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('city')}
                    >
                        City
                    </button>
                </div>
            </div>

            <div className='traffic-container'>
                {activeButton === 'source' && trafficSourceData.map((entry, index) => (
                    <div
                        key={index}
                        className="traffic-card"
                    >
                        <div className='data-text'> {entry.name}</div>
                        <div className='data-number'>{entry.number}</div>
                        <div className='bg-color-div' style={{ width: Math.round((entry.number / total) * 1000) + 'px' }}></div>
                    </div>

                ))}

                {activeButton !== 'source' && citySourceData.map((entry, index) => (
                    <div
                        key={index}
                        className="traffic-card"
                    >
                        <div className='data-text'> {entry.name}</div>
                        <div className='data-number'>{entry.number}</div>
                        <div className='bg-color-div' style={{ width: Math.round((entry.number / total) * 1000) + 'px' }}></div>
                    </div>

                ))}
            </div>

            <button
                type="button"
                className={`nav-btn page-btn`}
            >
                See traffic sources
            </button>

        </div>
    )
}

export default Traffic