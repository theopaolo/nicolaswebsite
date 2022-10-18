const laniakeatext = document.querySelector('.translaniakea')
const lookouttext = document.querySelector('.translookout')
const marktext = document.querySelector('.transmark')
const salviatext = document.querySelector('.transsalvia')
const distortext = document.querySelector('.transdistor')
const aboutBio = document.querySelector('.bio')
const aboutParcour = document.querySelector('.parcour')

const laniakea = `
<h2>Laniakea, le paradis incommensurable EN ANGLAIS</h2>
<p class="italic">« Si la Terre est votre appartement, le Système solaire est votre ville, la Voie lactée votre région, le superamas de la Vierge votre pays, et Laniakea votre continent. » </p>
  <p>Laniakea signifie « paradis incommensurable » en hawaiien. C’est à Hawaï que se situent quelques-uns des plus grands télescopes du monde, qui ont servi à découvrir il y a 7 ans seulement ce supercontinent céleste où gravite notre galaxie.</p>
  <p>Dans Laniakea, nous, c’est-à dire la Voie lactée et les autres galaxies, nous déplaçons à 630 km/seconde, et parfois même 15 000 km/seconde du fait de l’expansion de l’Univers. Le réseau de filaments que forment les galaxies et la matière en contournant les grands espaces vides de la matière noire comme un réseau de rivières ou un réseau neuronal.</p>
  <p>Baigné de science-fiction, j’aime l’idée de l’infinité des mondes que m’ont invité à découvrir Alessandro Jodorowski, Moebius, Enki Bilal, Stanley Kubrick ou Ridley Scott, que le réel nous dépasse, que nous nous dépassons nous-mêmes, que nous faisons partie de plus grand, de plus loin. L’infinité, elle commence avec nous, avec nos cerveaux où 100 milliards de neurones sont connectés par 100 milliards de milliards de synapses, et avec nos cent mille milliards de cellules par individu. Nous sommes le sable et les étoiles.
  </p>
  <p>Ce rapport vertigineux entre le macrocosme et le microcosme, entre l’infiniment grand et l’infiniment petit, j’en aime l’altérité enthousiasmante.</p>
`

const lookout = `
<h2>Look out EN ANGLAIS</h2>
<p>Les cygnes noirs sont des événements rares impossibles à prévoir qui, s’ils se réalisent, ont des conséquences d’une portée considérable et exceptionnelle. Le 11 septembre ou la chute de l’URSS sont des cygnes noirs. Mais la pandémie et la crise écologique n’en sont pas. Elles étaient aussi prévisibles que notre cécité collective.</p>
<p>J’ai obtenu une dérogation pour sortir la nuit à Athènes et prendre des images pendant le confinement. Seul dans la rue, je me sentais enfermé dehors, dans un cauchemar post apocalyptique, de cette fameuse apocalypse que tout le monde nie malgré les rapports du GIEC. Je pensais documenter la pandémie, j’essayais de réagir à l’exceptionnel, mener une enquête fictive sur une autodestruction fantasmée de l’humanité, je ne me rendais pas encore vraiment compte que je déambulais parmi les signes, bien blancs et visibles ceux- ci, avant-coureurs de ce qui nous attend. Dans la nuit noire, sous les yeux fermés d’une planète entière, au milieu des statues et des débris, sidéré, j’avais le sentiment de révéler au flash les stigmates de notre extinction. J’étais seul dans les rues d’Athènes, je marchais entouré des vestiges d’un quotidien brutalement abandonné tout comme celui de Pompéi, dans des décors dignes des films post apocalyptiques qui me hantaient : La jetée (Chris Marker), L’armée des 12 singes (Terry Gilliam), La route (John Hillcoat), Take Shelter (Jeff Nichols). Je pensais alors explorer l’idée de ville fantôme. Mais quel fantôme plus effrayant que celui du futur?
</p>
<p class="text-small">« Ce rapport (le 6e rapport du GIEC) devrait faire froid dans le dos à quiconque le lit. Il montre où nous en sommes et où nous allons avec le changement climatique : dans un trou qu’on continue de creuser. » Dave Reay Climatologue</p>
`

function translateText() {
  const lang = sessionStorage.getItem('lang')
  console.log('lang is', lang);

  if (lang === 'en') {

    if(laniakeatext) {laniakeatext.innerHTML = laniakea}
    if(lookouttext) {lookouttext.innerHTML = lookout}
    if(marktext) {marktext.innerHTML = mark}
    if(salviatext) {salviatext.innerHTML = salvia}
    if(distortext) {distortext.innerHTML = distor}
    if(aboutBio) {aboutBio.innerHTML = bio}
    if(aboutParcour) {aboutParcour.innerHTML = parcour}

  }
}
translateText()