import Highway from 'highway';

class AboutRenderer extends Highway.Renderer {
  onEnterCompleted() {
    console.log("about renderer enter completed");
    let bio = document.querySelector(".bio")
    let parcour = document.querySelector(".parcour")
    let btnclose = document.querySelector(".btn-close")
    btnclose.addEventListener("click", ()=> {
      window.history.back()
    })
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



    // Navigation script
    let navbtn = document.querySelector(".nav-action")
    let offnav = document.querySelector(".offscreen-nav")
    let aboutcontent = document.getElementById("about")
    navbtn.addEventListener('click', togglenav)

    function togglenav()  {
      this.classList.toggle('nav-active')
      offnav.classList.toggle('nav-visible')
      aboutcontent.classList.toggle('no-scroll')

      if(offnav.classList.contains('nav-visible')){
        gsap.to(offnav, {x: 0, duration: 1})
      }
    }

  }

}

// Don`t forget to export your renderer
export default AboutRenderer;