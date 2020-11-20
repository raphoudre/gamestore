// let promo = document.getElementById("promotion");
// let promobrand = document.getElementById("vraipromo")
// promo.onclick = function(){
//     promobrand.classList.toggle("visible");
//     promobrand.classList.toggle("invisible");
// }


//definir les variables
let moreProd = 0;

let nbFifa = 0;
let nbFmanager = 0;
let nbCyberpunk = 0;
let nbColdwar = 0;

//boutons
//navigation
let goAccueil = document.getElementById("goAccueil");
let goContact = document.getElementById("goContact");
let goFaq = document.getElementById("goFaq");
let goCatalogue = document.getElementById("goCatalogue");
let goPanier = document.getElementById("goPanier");
let goFastCatalogue = document.getElementById("fastCatalogue");
//apparitions

//dans panier
let fifa = document.getElementById("addCartFifa");
let fifaPrix = 90;
let fmanager = document.getElementById("addCartFManager")
let fmanagerPrix = 45;

let cartDesc = document.getElementById("cartDesc");


let accueil = document.getElementById("accueil");
let contact = document.getElementById("contact");
let faq = document.getElementById("faq");
let catalogue = document.getElementById("catalogue");
let panier = document.getElementById("panier");
let infoUs = document.getElementById("infoUs")

let closeCar = document.getElementById("closeCar");
closeCar.onclick = function(){
    document.getElementById("carouselExampleControls").classList.toggle("invisible")
    closeCar.classList.toggle("invisible")
}

const allCross = document.querySelectorAll('.visible-pannel img');
console.log(allCross);


allCross.forEach(element => {

    element.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

        // console.log(this.src);
        if(this.src.includes('angle-down-solid')){
            this.src = 'assets/img/angle-up-solid.svg';
            gsap.to(currentChoice, {duration: 0.2, height: height + 40, opacity: 1, padding: '20px 15px'})
        } else if (this.src.includes('angle-up-solid')){
            this.src = 'assets/img/angle-up-solid.svg';
            gsap.to(currentChoice, {duration: 0.2, height: 0, opacity: 0, padding: '0px 15px'})
        }
    })
})

const parallax = document.getElementById('parallax');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    parallax.style.backgroundPositionY = -window.scrollY / 3 + "px";
});

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}