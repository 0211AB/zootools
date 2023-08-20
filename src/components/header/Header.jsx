import React, { useState } from 'react';
import { useChartData } from '../../store/ChartContext';
import './Header.css';

const Header = () => {
    const [activeButton, setActiveButton] = useState('30d');
    const { handleButtonChange } = useChartData();

    const handleButtonClick = (buttonId) => {
        handleButtonChange(buttonId)
        setActiveButton(buttonId);
    };

    return (
        <header className="header">
            <section className="flex">
                <a href="/" className="logo">Summer referral competition</a>
                <div className="pagination-buttons">
                    <button
                        type="button"
                        className={`page-btn ${activeButton === '1h' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('1h')}
                    >
                        1h
                    </button>
                    <button
                        type="button"
                        className={`page-btn ${activeButton === '24h' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('24h')}
                    >
                        24h
                    </button>
                    <button
                        type="button"
                        className={`page-btn ${activeButton === '30d' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('30d')}
                    >
                        30d
                    </button>
                    <button
                        type="button"
                        className={`page-btn ${activeButton === '60d' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('60d')}
                    >
                        60d
                    </button>
                </div>
            </section>
        </header>
    );
}

export default Header;
