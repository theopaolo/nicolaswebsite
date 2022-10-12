let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let slides = document.querySelectorAll(".slides")

let slidesCount = slides.length
let slidesIndex = 1

// Counter
let allimgcount = document.querySelector(".allcount")
let firstall = document.querySelector(".firstall")
let currentimgcount = document.querySelector(".currentcount")

showSlides(slidesIndex);

window.addEventListener("load", nameCountHeight)
window.addEventListener("load", longtext)
window.addEventListener('resize', nameCountHeight)
window.addEventListener('resize', longtext)

function longtext(){
  if(window.innerWidth > 768){
    if (document.querySelector('.laniakea')) {
      document.querySelector('.laniakea').classList.add('longtext')
    }
  }  else {
    document.querySelector('.laniakea').classList.remove('longtext')
  }
}

function nameCountHeight() {
  let overlay = document.querySelector('.overlay')
  overlay.style.opacity = 0
  setTimeout(() => {overlay.style.display = "none"}, 1000)

  if(window.innerWidth < 768){
    document.body.classList.add('firstSlide')
    if(slidesIndex > 1) {
      document.body.classList.remove('firstSlide')
    }
  } else {
    document.body.classList.remove('firstSlide')
  }
}

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
  showSlides(slidesIndex += n);
  nameCountHeight()
}

allimgcount.innerHTML = slidesCount
firstall.innerHTML = slidesCount

function showSlides(n) {
  let i;
  if (n > slidesCount) {slidesIndex = 1}
  if (n < 1) {slidesIndex = slidesCount}

  for (i = 0; i < slidesCount; i++) {
    slides[i].style.display = "none";
  }

  if(slides[slidesIndex-1].classList.contains('center')) {
    slides[slidesIndex-1].style.display = "flex";
  } else {
    slides[slidesIndex-1].style.display = "grid";
  }
  currentimgcount.innerHTML = slidesIndex
}

prevBtn.addEventListener('click', ()=>{
  showSlides(slidesIndex += -1)
  nameCountHeight()
})

nextBtn.addEventListener('click', ()=>{
  showSlides(slidesIndex += 1)
  nameCountHeight()
})

