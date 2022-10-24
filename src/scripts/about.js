let bio = document.querySelector(".bio")
let parcour = document.querySelector(".parcour")

let btnclose = document.querySelector(".btn-close")
btnclose.addEventListener("click", aboutAction)

function aboutAction(event) {
  event.preventDefault();

  if (document.referrer == "") {
    window.location.href = "index.html";
  } else {
    console.log('goback');
    window.history.back()
  }
}

bio.addEventListener("mouseenter", ()=> {
  if(bio.classList.contains("darkbg")) {
    bio.classList.remove('darkbg')
    // bio.classList.remove("blight-shadow")

    parcour.classList.add("darkbg")
    // parcour.classList.add("light-shadow")
  } else {
    bio.classList.add('darkbg')
    // bio.classList.add('blight-shadow')

    parcour.classList.remove("darkbg")
    // parcour.classList.remove("light-shadow")
  }
})

parcour.addEventListener("mouseenter", ()=> {
  if(parcour.classList.contains("darkbg")) {
    parcour.classList.remove("darkbg")
    // parcour.classList.remove("light-shadow")

    bio.classList.add('darkbg')
    // bio.classList.add('blight-shadow')
  } else {
    parcour.classList.add("darkbg")
    // parcour.classList.add("light-shadow")

    bio.classList.remove('darkbg')
    // bio.classList.remove("blight-shadow")
  }
})

const biotext = `
<p>Nicolas Hermann is a visual artist who uses photography, video and sound to better understand his relationship to the world and those around him. Through the creation of installations, experimentation and collaborations, he places transversality at the core of his practice by multiplying the means of expression and experiences. He continuously incorporates new print or imagemaking techniques into his work, whether for printing, editing or book-making. Influenced by science-fiction movies and astronomy, his work evolves in a hypersensitised, nocturnal and liminal universe, allowing for the decontextualisation of beings and objects that can then be reborn into new relationships.</p>
`

const parcourtext = `
<p>Nicolas Hermann exhibited his first series Distortion in 2016 during the Nuits Photographiques de Pierrevert and at the 70th anniversary of the Mediterranean Union for Modern Art in Menton. It was also screened during the 2017 Pontault-Combault Short Film Festival in the experimental short film category. In 2018, following two artist residencies in Marfa (USA) with the Beaux-Arts de Nantes, then at the Artlab Gallery in Beirut (Lebanon), he exhibited Laniakea for the first time with solo shows in both institutions. His series Mark was then shown in 2019 at Studio f/16 in Paris. In 2020, he took part in the 69th edition of "Jeune Création” in Komuna, in Romainville, and during the InCadaqués festival in Spain. His series Look Out was exhibited from January 30 to March 27, 2022 during the "PEP New Talents 2021", at the Kommunale Galerie in Berlin (Germany). </br> The film 17,000, of which he is the director of photography, was premiered on May 27, 2022 in Athens during the ADD festival.</p>
<div class="contact flex mt-auto">
  <section>
    <div class="mb-1">
      <a class="block" href="mailto:contact@nicolashermann.com">CONTACT@NICOLASHERMANN.COM</a>
      <a href="">+33 6 14 86 82 76</a>
    </div>
    <ul class="justify-center mb-2">
      <li><a href="https://www.instagram.com/nicolashermann" target="_blank">INSTAGRAM</a></li>
      <li><a href="https://vimeo.com/nicolashermann" target="_blank">VIMEO</a></li>
      <li><a href="https://linktr.ee/nicolashermann" target="_blank">LINKTREE</a></li>
    </ul>
    <ul class="credits">
      <li><a href="">SOUND : GUILLAUME BONNEAU</a></li>
      <li><a href="http://siloenouyrit.fr/" target="_blank">Design : Siloé Nouyrit</a></li>
      <li><a href="https://theogoedert.com/" target="_blank">Code : Théo Paolo G.</a></li>
    </ul>
  </section>
</div>
`

function tranlsateabout() {

  if(sessionStorage.getItem("lang") === "en") {
    if(bio) {bio.innerHTML = biotext}
    if(parcour) {parcour.innerHTML = parcourtext}
  }
}  tranlsateabout()

