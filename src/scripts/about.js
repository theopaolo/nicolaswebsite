let bio = document.querySelector(".bio")
let parcour = document.querySelector(".parcour")

bio.addEventListener("mouseenter", ()=> {
  if(bio.classList.contains("darkbg")) {
    bio.classList.remove('darkbg')
    bio.classList.remove("blight-shadow")

    parcour.classList.add("darkbg")
    parcour.classList.add("light-shadow")
  } else {
    bio.classList.add('darkbg')
    bio.classList.add('blight-shadow')

    parcour.classList.remove("darkbg")
    parcour.classList.remove("light-shadow")
  }
})

parcour.addEventListener("mouseenter", ()=> {
  if(parcour.classList.contains("darkbg")) {
    parcour.classList.remove("darkbg")
    parcour.classList.remove("light-shadow")

    bio.classList.add('darkbg')
    bio.classList.add('blight-shadow')
  } else {
    parcour.classList.add("darkbg")
    parcour.classList.add("light-shadow")

    bio.classList.remove('darkbg')
    bio.classList.remove("blight-shadow")
  }
})


// parcour.addEventListener("mouseenter", ()=> {
//   if(enter == false) {
//     parcour.classList.add('darkbg')
//     bio.classList.remove("darkbg")
//     enter = false
//   }
// })