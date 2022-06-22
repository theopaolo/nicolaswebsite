const gsap = window.gsap;

let navbtn = document.querySelector(".nav-action")
let offnav = document.querySelector(".offscreen-nav")

let bio = document.querySelector(".bio")
let parcour = document.querySelector(".parcour")
let enter = true

navbtn.addEventListener('click', togglenav)

function togglenav()  {
  this.classList.toggle('nav-active')
  offnav.classList.toggle('nav-visible')

  if(offnav.classList.contains('nav-visible')){
    gsap.to(offnav, {x: 0, duration: 1})
  }

}

bio.addEventListener("mouseenter", ()=> {
  if(enter) {
    bio.classList.toggle('darkbg')
    parcour.classList.remove("darkbg")
    enter = false
  }
})

parcour.addEventListener("mouseenter", ()=> {
  if(enter == false) {
    parcour.classList.toggle('darkbg')
    bio.classList.remove("darkbg")
    enter = true
  }
})