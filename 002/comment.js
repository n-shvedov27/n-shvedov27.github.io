$(document).ready(function () {
    $('.comment').bind("click", function () {

        let initialPos = $('body').css("width");
        initialPos = parseFloat(initialPos.substr(0,initialPos.length-2))/2-200;
        console.log(initialPos+" initPos");


        let newPos = $('#testimonials').css("left");
        newPos = parseFloat(newPos.substr(0,newPos.length-2));
        console.log(newPos+" newPos");


        let count = (initialPos-newPos)/505;
        console.log(count+"count");
        let dobavka = 200+ 504*(count+1);
        if (count>2) {
            $('#testimonials').css("left", "calc(50% - 200px)");
            return
        }
        $('#testimonials').css("left", "calc(50% - "+dobavka+"px)");
    })
});