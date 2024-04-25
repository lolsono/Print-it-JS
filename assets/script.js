const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//variable
const flecheDroite = document.querySelector("#banner .arrow_right");
const flecheGauche = document.querySelector("#banner .arrow_left");
const bannerImg = document.querySelector(".banner-img");
const tagLineContainer = document.querySelector("#banner p");
const dotsContainner = document.querySelector(".dots");
const childElements = dotsContainner.querySelectorAll(".dot");

//avancement dans le tableaux
let StartIndex = 0;

//calcule nombre element dans le tableaux
let NombreItem = slides.length;
console.log(NombreItem);

//fonction
function nextSlide () {
	StartIndex++
	console.log(StartIndex)
	displaySlide(StartIndex)
	updateDots()
}

function previousSlide () {
	StartIndex--
	console.log(StartIndex)
	displaySlide(StartIndex)
	updateDots()
}

//gestion du slide

function displaySlide(media) {
	if (StartIndex < 0) {
	  StartIndex = slides.length - 1
	  tagLineContainer.innerHTML = slides[slides.length - 1].tagLine
	  bannerImg.src = `assets/images/slideshow/${slides[slides.length - 1].image}`
	} else if (StartIndex >= slides.length) {
	  StartIndex = 0
	  tagLineContainer.innerHTML = slides[0].tagLine
	  bannerImg.src = `assets/images/slideshow/${slides[0].image}`
	} else {
	  tagLineContainer.innerHTML = slides[media].tagLine
	  bannerImg.src = `assets/images/slideshow/${slides[media].image}`
	}
}

function updateDots() {
	const childElements = dotsContainner.querySelectorAll(".dot");
	// Remove dot_selected class from all dots
	childElements.forEach(dot => dot.classList.remove("dot_selected"))

	// Add dot_selected class to the current dot
	StartIndex = Math.max(0, Math.min(StartIndex, NombreItem - 1))
	childElements[StartIndex].classList.add("dot_selected")
}


function GenerateDots () {
	//creation des dots
	for (let i = 0; i < NombreItem; i++) {

		//crée une nouvelle div enfant de dots
		const createDot = document.createElement("div")

		//ajouter la nouvelle class adapter
		createDot.classList.add("dot")

		//ajout sur le parent dotsContainner
		dotsContainner.appendChild(createDot);

		dotsContainner.querySelector(":first-child").classList.add("dot_selected")

	}
}


//ecouteur evenement
flecheDroite.addEventListener('click', nextSlide);
flecheGauche.addEventListener('click', previousSlide);

//ajout la boucle for dans 
GenerateDots();