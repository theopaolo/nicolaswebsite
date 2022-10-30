let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let slides = document.querySelectorAll(".slides")

// Counter
let firstall = document.querySelector(".firstall")
let allimgcount = document.querySelector(".allcount")
let currentimgcount = document.querySelector(".currentcount")
let twoimgs = document.querySelectorAll(".two-img")
let slidesIndex = 1

if(window.innerWidth < 768) {
  twoimgs.forEach( function(el) {
    el.parentNode.removeChild(el);
  })
}

function numofslides(){
  let mesSlides = document.querySelectorAll(".slides")
  return mesSlides.length
}

let slidesCount = numofslides()
allimgcount.innerHTML = slidesCount

setTimeout(() => {
  slidesCount = numofslides()
  firstall.innerHTML = slidesCount
}, 500)

showSlides(slidesIndex);

function nameCountHeight() {
  let overlay = document.querySelector('.overlay')
  overlay.style.opacity = 0
  setTimeout(() => {overlay.style.display = "none"}, 1000)

  if(window.innerWidth < 745){
    document.body.classList.add('firstSlide')
    if(slidesIndex > 1) {
      document.body.classList.remove('firstSlide')
    }
    if(slidesIndex === 2) {
      scrollTop()
    }
  } else {
    document.body.classList.remove('firstSlide')
  }
}

window.addEventListener("load", nameCountHeight)
window.addEventListener('resize', nameCountHeight)

function scrollTop() {
  window.scrollTo(0, 0);
  console.log('scrollTop');
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

function showSlides(n) {
  let i;
  let newSlides = document.querySelectorAll(".slides")

  if (n > slidesCount) { slidesIndex = 1 }

  if (n < 1) { slidesIndex = slidesCount }

  for (i = 0; i < slidesCount; i++) {
    newSlides[i].style.display = "none";
  }

  if(newSlides[slidesIndex-1].classList.contains('center')) {
    newSlides[slidesIndex-1].style.display = "flex";
  } else {
    newSlides[slidesIndex-1].style.display = "grid";
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


