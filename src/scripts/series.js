let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let allimgcount = document.querySelector(".allcount")
let currentimgcount = document.querySelector(".currentcount")
let namecount = document.querySelector(".namecount")
let slides = document.querySelectorAll(".slides")
let slideCount = slides.length
let slideIndex = 1
const gsap = window.gsap;
import 'lazysizes';

showSlides(slideIndex);

// Next/previous keys controls
window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch(event.code) {

    case "ArrowLeft":
      // Handle "turn left"
      plusSlides(-1)
      break;

    case "ArrowRight":
      // Handle "turn right"
      plusSlides(1)
      break;
  }

  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
allimgcount.innerHTML = slideCount

function showSlides(n) {
  let i;
  if (n > slideCount) {slideIndex = 1}
  if (n < 1) {slideIndex = slideCount}
  for (i = 0; i < slideCount; i++) {
    slides[i].style.display = "none";
  }

  if(slides[slideIndex-1].classList.contains('center')) {
    slides[slideIndex-1].style.display = "flex";
  } else {
    slides[slideIndex-1].style.display = "grid";
  }
  currentimgcount.innerHTML = slideIndex
}

prev.addEventListener('click', ()=>{
  showSlides(slideIndex += -1)
  nameCountHeight()
})

next.addEventListener('click', ()=>{
  showSlides(slideIndex += 1)
  nameCountHeight()
})

function nameCountHeight() {
  if(window.innerWidth < 768){
    if(slideIndex > 1) {
      document.querySelector(".namecount").style.height = "85vh"
    } else {
      document.querySelector(".namecount").style.height = "100%"
    }
  }
}