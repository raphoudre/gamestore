// let promo = document.getElementById("promotion");
// let promobrand = document.getElementById("vraipromo")
// promo.onclick = function(){
//     promobrand.classList.toggle("visible");
//     promobrand.classList.toggle("invisible");
// }


//definir les variables
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
let ourTeamB = document.getElementById("ourTeamButton");

//dans panier
let fifa = document.getElementById("addCartFifa");

let cartDesc = document.getElementById("cartDesc");


let accueil = document.getElementById("accueil");
let contact = document.getElementById("contact");
let faq = document.getElementById("faq");
let catalogue = document.getElementById("catalogue");
let panier = document.getElementById("panier");
let infoUs = document.getElementById("infoUs")

ourTeamB.onclick = function(){
    infoUs.classList.toggle("invisible");
    infoUs.classList.toggle("visible");
}

//panier
fifa.onclick = function(){
    if (nbFifa==0){
        nbFifa = 1;
        cartDesc.innerHTML=`<li><img  src="assets/img/cameraroll/fifa-21-ps4-france-cover.jpg" height="50rem"alt=""> Fifa | ${nbFifa} exemplaire</li>`;
    } else {
        nbFifa += 1;
        cartDesc.innerHTML=`<li><img src="assets/img/cameraroll/fifa-21-ps4-france-cover.jpg" height="50rem"alt=""> Fifa | ${nbFifa} exemplaire</li>`;
    }
}

let closeCar = document.getElementById("closeCar")

closeCar.onclick = function (){
    document.getElementById("carouselExampleControls").classList.toggle("invisible");
    closeCar.classList.toggle("invisible");
}