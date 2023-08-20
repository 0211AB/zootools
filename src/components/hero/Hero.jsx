import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="chart-container hero-container">
            <div className="chart-card">

                <h3 className="h2">ZooTools insights</h3>
                <h3 className="p-text">Making analytics simple and actionable</h3>

                <div className='hero-card'>
                    <div className='hero-left'>
                        <h3>Summary</h3>
                        <div className='point'>
                            <h4><ion-icon name="caret-down-outline" id='hl1'></ion-icon></h4>
                            <h4>Signups are slowing down.<span> -5% new than last week</span></h4>
                        </div>

                        <div className='point'>
                            <h4><ion-icon name="caret-up-outline" id='hl2'></ion-icon></h4>
                            <h4>80% <span>of your signups were invited by other members.</span></h4>
                        </div>

                        <div className='point'>
                            <h4><ion-icon name="bulb-outline" id='hl3'></ion-icon></h4>
                            <h4>80% <span> of your signups were invited by a friend</span></h4>
                        </div>

                        <div className='point'>
                            <h4><ion-icon name="bulb-outline" id='hl3'></ion-icon></h4>
                            <h4>80% <span> of your signups were invited by a friend</span></h4>
                        </div>
                    </div>

                    <div className='hero-right'>
                        <h3>Recommendation</h3>
                        <h4>Make sure to promote and share your form</h4>
                        <h4>Congrats! This is huge. Keep giving rewards for your users</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero