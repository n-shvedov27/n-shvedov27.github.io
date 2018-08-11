import React, {Component} from 'react'
import './testimonials.css'
import $ from "jquery";


function Back() {
    let initialPos = $('body').css("width");
    initialPos = parseFloat(initialPos.substr(0,initialPos.length-2))/2-200;
    console.log(initialPos+" initPos");


    let newPos = $('#testimonials').css("left");
    newPos = parseFloat(newPos.substr(0,newPos.length-2));
    console.log(newPos+" newPos");


    let count = (initialPos-newPos)/505;
    console.log(count+"count");
    let dobavka = 200+ 504*(count+1);
    if (count>3) {
        $('#testimonials').css("left", "calc(50% - 200px)");
        return
    }
    $('#testimonials').css("left", "calc(50% - "+dobavka+"px)");

}



class Testimonials extends Component {
    render() {
        return (<div className="main-wrap">
                <div className="testimonials-head">
                    <h3>Testimonials</h3>
                    <h2>People who trust us</h2>
                </div>
                <div id="testimonials">
                    <button onClick={Back}><div>
                        <h1>Отзыв</h1>
                        <p>Содержание</p>
                    </div></button>
                    <button onClick={Back}><div>
                        <h1>Отзыв</h1>
                        <p>Содержание</p>
                    </div></button>
                    <button onClick={Back}><div>
                        <h1>Отзыв</h1>
                        <p>Содержание</p>
                    </div></button>
                    <button onClick={Back}><div>
                        <h1>Отзыв</h1>
                        <p>Содержание</p>
                    </div></button>
                    <button onClick={Back}><div>
                        <h1>Отзыв</h1>
                        <p>Содержание</p>
                    </div></button>


                </div>
            </div>
        )
    }
}

export default Testimonials
