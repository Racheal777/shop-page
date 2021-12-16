const container = document.querySelector('.search');
const btn = document.querySelector('button')
const input = document.querySelector('input')

//Event listener on toggling
btn.addEventListener('click', () => {
    container.classList.toggle('active')
    input.focus();
})


$(window).scroll(function(){
    if ($ (window).scrollTop()){
        $('nav').addClass('sticky')
    } else {
        $('nav').removeClass('sticky')
    }
    
})


// const social = document.getElementById('social')

// function card (){

//     social.innerHTML = ''
//     const cards = 
//     `<div id="card">
//     <img src="/images/pic.jpg" alt="image">
// </div>

// <div id="card">
//     <img src="/images/pic1.jpg" alt="image">
// </div>

// <div id="card">
//     <img src="/images/pic6.jpg" alt="image">
// </div>

// <div id="card">
//     <img src="/images/pic4.jpg" alt="image">
// </div>

// <div id="card">
//     <img src="/images/pic5.jpg" alt="image">
// </div>`

// const newCards = document.createElement('div')
// newCards.innerHTML = social

// for(let items of cards){
//     social.appendChild(newCards)
// }


// }

// card()

const social = document.getElementById('social')
const icon = document.getElementById('icon')

icon.addEventListener('click', () => {
    social.classList.add()
})