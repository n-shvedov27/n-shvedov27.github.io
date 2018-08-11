import React from 'react'
import {render} from 'react-dom'
import Hero from './components/hero/hero'
import SmallFeatures from './components/smallFeatures/smallFeatures'
import Testimonials from './components/testimonials/testimonials'

function App() {
    return (
        <div>
            <Hero/>
            <SmallFeatures/>
            <Testimonials/>
        </div>
    )
}

render(<App/>, document.getElementById('root'));
