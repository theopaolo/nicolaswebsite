console.log('aboutscript');

let bio = document.querySelector(".bio")
let parcour = document.querySelector(".parcour")
let enter = true

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