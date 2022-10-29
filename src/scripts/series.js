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
window.addEventListener('resize', nameCountHeight)

let twoimgs = document.querySelectorAll(".two-img")
if(window.innerWidth < 768) {
  if(twoimgs.length > 0) {
    twoimgs.forEach( function(el) {
      el.parentNode.removeChild(el);
      console.log('remove two img');
    })
  }
}

// window.addEventListener("load", longtext)
// window.addEventListener('resize', longtext)

// function longtext(){
//   let laniakea = document.querySelector('.laniakea')

//   let desktopSize = window.innerWidth > 745
//   let mobileSize = window.innerWidth < 700

//   if(desktopSize){
//     if (laniakea) {
//       laniakea.classList.add('longtext')
//     }
//   }

//   if(mobileSize){
//     if (laniakea) {
//       laniakea.classList.remove('longtext')
//     }
//   }
// }

// function longtext(){
//   if(window.innerWidth > 745){
//     if (document.querySelector('.laniakea')) {
//       document.querySelector('.laniakea').classList.add('longtext')
//     }
//   }  else {
//     document.querySelector('.laniakea').classList.remove('longtext')
//   }
// }

function scrollTop() {
  window.scrollTo(0, 0);
  console.log('scrollTop');
}

function nameCountHeight() {
  let overlay = document.querySelector('.overlay')
  overlay.style.opacity = 0
  setTimeout(() => {overlay.style.display = "none"}, 1000)

  if(window.innerWidth < 745){
    document.body.classList.add('firstSlide')
    console.log(slidesIndex);
    if(slidesIndex > 1) {
      document.body.classList.remove('firstSlide')
    }
    if(slidesIndex === 1 || slidesIndex === 2) {
      scrollTop()
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
  // longtext()
}

allimgcount.innerHTML = slidesCount


  if(firstall) {
    firstall.innerHTML = slidesCount
  }

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


