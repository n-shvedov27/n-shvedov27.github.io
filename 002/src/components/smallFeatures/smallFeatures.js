import React, {Component} from 'react'
import './smallFeatures.css'
import imgMoney from './imgMoney.png'
import responsive from './responsive.png'
import laptop from './laptop.png'


class SmallFeatures extends Component {
    render() {
        return (
            <div className="smallFeatures">
                <div className="content">
                    <h3>Features</h3>
                    <h2>This app was made to save you more time in a day</h2>
                    <p>We build this app because we wanted to save people time.</p>
                    <p> That’s what every app in the universe should do.</p>
                    <div className="features">
                        <div className="feature">
                            <img src={responsive}/>
                            <h3>Easily connect to desktop</h3>
                            <p>We build this app because we wanted to save people time. That’s what every app in the
                                universe should do.</p>

                        </div>
                        <div className="feature">
                            <img src={laptop}/>
                            <h3>Shows you charts and pies</h3>
                            <p>We build this app because we wanted to save people time. That’s what every app in the
                                universe should do.</p>

                        </div>
                        <div className="feature">
                            <img src={imgMoney}/>
                            <h3>Brings you revenue</h3>
                            <p>We build this app because we wanted to save people time. That’s what every app in the
                                universe should do.</p>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default SmallFeatures
