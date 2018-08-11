import React, {Component} from 'react'
import './hero.css'
import logo from './img/logo.png'
import phoneBlock from './img/phone_block.png'

class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="hero-child">
                    <div className="logo-wrap">
                        <img src={logo} alt="Logo"></img>
                    </div>
                    <div className="main">
                        <h2>Save more time</h2>
                        <p>We build this app because we wanted to save people time.</p>
                        <p> That’s what every app in the universe should do.</p>
                        <form>
                            <i className="fas fa-envelope"></i><input placeholder="Email:" type="email" required/>
                            <button>Start</button>
                        </form>
                    </div>
                </div>
                <div className="phone-block-wrap">
                    <img src={phoneBlock} alt="Logo"></img>
                </div>
            </div>
        )
    }
}

export default Hero
