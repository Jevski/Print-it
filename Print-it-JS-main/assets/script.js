const slides = [	
	{
		"image":"Print-it-JS-main/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"Print-it-JS-main/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"Print-it-JS-main/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"Print-it-JS-main/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slider = document.querySelector('.slider');
const prevArrow = document.querySelector('.prevArrow');
const nextArrow = document.querySelector('.nextArrow');
const slide= document.querySelector('.slide');
const tagLine = document.querySelector('.tagLine');
const dots = document.querySelectorAll('.dots button');

const indexLimit = slides.length;
let slideIndex = 0;


nextArrow.addEventListener('click', function () {
    	slideIndex = (slideIndex + 1 ) % indexLimit ;
    	slide.src = slides[slideIndex].image;
		tagLine.innerHTML = slides[slideIndex].tagLine;
		updateDots(slideIndex);
});

prevArrow.addEventListener('click', function () {
		slideIndex = slideIndex - 1 < 0 ? indexLimit-1 : slideIndex - 1;
    	slide.src = slides[slideIndex].image;
		tagLine.innerHTML = slides[slideIndex].tagLine;

		updateDots(slideIndex);
});


dots.forEach((element, dotsIndex) => {
    element.addEventListener('click', function () {
        slideIndex = dotsIndex;
        navSlides(slideIndex);
    });
});


function navSlides(slideIndex) {
	  	slide.src = slides[slideIndex].image;
		tagLine.innerHTML = slides[slideIndex].tagLine;
		updateDots(slideIndex);
	};


function updateDots(activeIndex) { 
    dots.forEach((dots, slideIndex) => {
		if (slideIndex === activeIndex) {
            dots.classList.add('active');
        } else {
            dots.classList.remove('active'); 
        }
    });
};
