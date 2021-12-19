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


//Dom selector
const ham = document.querySelector('.hamburger')
const nav = document.getElementById('list')
const links = document.querySelectorAll('.nav-link')

//event listener
ham.addEventListener('click',mobileMenu)

//function to toggle the class active
function mobileMenu(){
  ham.classList.toggle('active')
  nav.classList.toggle('active')
  
}

// links.forEach(item => item.addEventListener('click', closeMenu ));
links.forEach(n => n.addEventListener("click", closeMenu));

// links.forEach(element => {element.addEventListener('click', closeMenu)});

function closeMenu(){
    ham.classList.remove('active')
    nav.classList.remove('active')
}