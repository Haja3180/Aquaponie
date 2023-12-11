//===== burger menu =====

const burgerButton = document.querySelector('.burger-container')
const nav = document.querySelector('nav')
const menuAllItems = document.querySelectorAll('.menu-item')
const logo = document.querySelector('.nav-logo-container')
const contact = document.querySelector('.contact')
const intro = document.querySelector('.hero-intro-left')
const pageContent = document.querySelector('.page-content')
let menuIsHidden = true

const switchDisplay = () => {
    burgerButton.classList.toggle('xify-burger')
    nav.classList.toggle('display-mobile-nav')
    intro.classList.toggle('hero-intro-shift-right')
    menuIsHidden=!menuIsHidden
    console.log(menuIsHidden)
    return
}

burgerButton.addEventListener('click', switchDisplay)
logo.addEventListener('click', switchDisplay)
contact.addEventListener('click', switchDisplay)
menuAllItems.forEach(item =>
    {
        item.addEventListener('click', switchDisplay)
    })
pageContent.addEventListener('click', ()=>{
  if (menuIsHidden===false) switchDisplay()
})





//===== API fetch =====
const apiKey = '5a5549332269beaf49ca317ba437e0c9'
const latitude = '-21.186858'
const longitude = '55.303476'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
// requête sur l'API
fetch(apiUrl)
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Récupération de la donnée (température)
    const temperature = data.main.temp

    // Affichage de la donnée dans la page HTML
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `T° actuelle à Saint-Leu : ${temperature} °C `
  })
  .catch(error => {
    console.error(error)
  });


// ===== traitement formulaire de contact =====
let formulaire = document.getElementById('formulaire')
formulaire.addEventListener('submit', (e)=>{

})

















