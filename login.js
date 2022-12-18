const togleButton = document.getElementById('tangle-tag');
const hamburgerLinks = document.getElementsByClassName('navbar-links')[0];
const sectionElement = document.getElementById('signin-container');
const inputEmail = document.getElementById('emailInput');
const inputPassword =document.getElementById('passwordInput');
const loginPasswordCheck = document.getElementById('passwordButton')
    
togleButton.addEventListener('click', () => {
    hamburgerLinks.classList.toggle('active')
    sectionElement.classList.toggle('active')   
})

