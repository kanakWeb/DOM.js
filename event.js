function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

const toYellow = document.getElementById('makeYellow');
toYellow.onclick = colorYellow

function colorYellow() {
    document.body.style.backgroundColor = 'yellow'
}

const toWhite = document.getElementById('makeWhite');
toWhite.onclick = function whiteColor() {
    document.body.style.backgroundColor = 'white'
}

//Anonymous function 
const toGreen = document.getElementById('makeGreen');
toGreen.onclick = function() {
    document.body.style.backgroundColor = 'green'
}

// add event lisener useing 
const toBrown = document.getElementById('makeBrown');
toBrown.addEventListener('click', brownColor)

function brownColor() {
    document.body.style.backgroundColor = 'brown'
}



const toNavy = document.getElementById('makeNavy');
toNavy.addEventListener('click', function toNavy() {
    document.body.style.backgroundColor = 'navy'
})

// direct shortcut system
document.getElementById('makeGrey').addEventListener('click', function() {
    document.body.style.backgroundColor = 'grey'
})


function maleTalk() {
    const p = document.getElementById('message');
    p.innerText = 'I Love You 😍'

}

document.getElementById('female').addEventListener('click', function() {
    const p = document.getElementById('message');
    p.innerText = "I Love You Too ❤️"
})


//input-field update

document.getElementById('update').addEventListener('click', function() {

    const input = document.getElementById('input-field');

    const textSms = document.getElementById('sms');
    textSms.innerText = input.value;

    //faka korte use 
    input.value = '';

})