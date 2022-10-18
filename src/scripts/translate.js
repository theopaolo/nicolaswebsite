const laniakeatext = document.querySelector('.translaniakea')
const lookouttext = document.querySelector('.translookout')
const marktext = document.querySelector('.transmark')
const salviatext = document.querySelector('.transsalvia')
const distortext = document.querySelector('.transdistor')
const aboutBio = document.querySelector('.bio')
const aboutParcour = document.querySelector('.parcour')

const laniakea = `
<h2>Laniakea, an immeasurable paradise</h2>
<p class="italic">“If Earth is your apartment, the Solar System is your city, the Milky Way your region, the Virgo Supercluster your country, and Laniakea your continent.”</p>

<p>Laniakea means “immense heaven” in Hawaiian. Some of the world’s largest telescopes are found in Hawaii, and, a mere seven years ago, they were used to discover this celestial supercontinent in which our galaxy orbits.</p>

<p>In Laniakea, we, the Milky Way and other galaxies, move at 630 km/second, sometimes even 15,000 km/second due to the expansion of the universe, this network of filaments that galaxies and matter form by bypassing the large empty spaces of dark matter like a network of rivers or a neural network.</p>

<p>Born with a love of science fiction, I’ve always been drawn to the idea of the infinity of worlds created by Alessandro Jodorowski, Moebius, Enki Bilal, Stanley Kubrick or Ridley Scott, that we can’t quite grasp reality, even ourselves, that we are part of something much bigger, much further away. Infinity begins within us, with our brains where 100 billion neurones are connected by 100 billion billion synapses, and with our hundred thousand billion cells per individual. We are the sand and the stars.</p>

<p>This vertiginous relationship between the macrocosm and the microcosm, between the infinitely large and the infinitely small - I am forever drawn to its exciting otherness.</p>
`

const lookout = `
<h2>Look out</h2>
<p>Black swans are such rare and unpredictable events that, when they do happen, they have drastic and far-reaching consequences. The fall of the USSR or 9/11 are considered black swans. But the pandemic and ecological crisis are not. They were as predictable as our collective blindness.</p>

<p>I was granted a dispensation during lockdown to go out at night in Athens and take pictures. Alone in the street, I felt locked out, as if in a post-apocalyptic nightmare, the infamous apocalypse that everyone was turning a blind eye to despite what the IPCC reports were saying. I thought I was documenting the pandemic, I was trying to react to the exceptional, to conduct a fictitious investigation into an imagined self-destruction of humanity. What I hadn’t realised yet was that all the signs, clear as day, were staring right back at me, foreboding visions of what was to come.</p>

<p>In the darkness, before the closed eyes of an entire planet, in the midst of statues and debris, flabbergasted, I felt like my flash was revealing the scars of our extinction. Walking alone in the streets of Athens, I was surrounded by the vestiges of a daily life brutally abandoned, just like that of Pompeii. It all resembled a postapocalyptic film set, just like those that haunted me: La jetée (Chris Marker), 12 Monkeys (Terry Gilliam), The Road (John Hillcoat), Take Shelter (Jeff Nichols). I wanted to explore the idea of a ghost town. But what ghost is spookier than that of the future?</p>

<p>“This report (the 6th IPCC report) should send a shiver down the spine of everyone who reads it. It sets out where we are now and where we are headed and climate change: in a hole, and still digging.” Dave Reay, climate change scientist</p>
`

const mark = `
<h2>Mark</h2>
<p>Between 2013 and 2015, Mark and Nicolas met twenty or so times. Of different ages, from different social backgrounds, they seemed to have nothing in common. If photographing and talking with Mark allowed Nicolas to gradually tame his relationship to time, to others, to fragility, Mark took home coffees, shopping, attention. This Koltesian relationship was woven through encounters in Parisian corridors and parks, through snippets of sentences and words scribbled here and there, through communication, each dealing whatever it was he had: attention for one, letting go for the other.</p>

<p>The photographer is fascinated by a character with dazzling paradoxes: Mark's health and social position are precarious, but he is a homeowner, he is subjected to decisions that are beyond him, but wears the key to his home around his neck, he is fragile, but embodies each gesture, without worrying about the gaze of others or the camera... The conversations are unfiltered, of a salutary frankness and vulnerability.</p>

<p class="text-small">“I am neither happy nor unhappy. That's life.”</p>
`

const bio = `
<p>Nicolas Hermann is a visual artist who uses photography, video and sound to better understand his relationship to the world and those around him. Through the creation of installations, experimentation and collaborations, he places transversality at the core of his practice by multiplying the means of expression and experiences. He continuously incorporates new print or imagemaking techniques into his work, whether for printing, editing or book-making. Influenced by science-fiction movies and astronomy, his work evolves in a hypersensitised, nocturnal and liminal universe, allowing for the decontextualisation of beings and objects that can then be reborn into new relationships.</p>
`

const parcour = `
<p>Nicolas Hermann exhibited his first series Distortion in 2016 during the Nuits Photographiques de Pierrevert and at the 70th anniversary of the Mediterranean Union for Modern Art in Menton. It was also screened during the 2017 Pontault-Combault Short Film Festival in the experimental short film category. In 2018, following two artist residencies in Marfa (USA) with the Beaux-Arts de Nantes, then at the Artlab Gallery in Beirut (Lebanon), he exhibited Laniakea for the first time with solo shows in both institutions. His series Mark was then shown in 2019 at Studio f/16 in Paris. In 2020, he took part in the 69th edition of "Jeune Création” in Komuna, in Romainville, and during the InCadaqués festival in Spain. His series Look Out was exhibited from January 30 to March 27, 2022 during the "PEP New Talents 2021", at the Kommunale Galerie in Berlin (Germany). </br> The film 17,000, of which he is the director of photography, was premiered on May 27, 2022 in Athens during the ADD festival.</p>
`

const salvia = `
<h2>Salvia divinorum</h2>
<p>Salvia divinorum, or diviner's sage, is a plant used during divination and healing rituals carried out by Mexican shamans.</p>

<p>Celestial, terrestrial and underground geographies intertwine, merging together in a dreamlike journey. Like any hallucinatory experience, the unfolding of the story plunges the viewer into an altered state of consciousness.</p>

<p>Salvia divinorum evokes a vast mental space that connects Alice in Wonderland’s rabbit hole to Dante's Inferno, where one can come face to face with their fears and their true selves. In this chimerical realm, one encounters recurring references to initiation rituals, shamanic practices, mystical cults, all invoking illusory experiences used to open the doors to a spiritual cosmos.</p>

<p>A transcendental adventure that explores the liminal states of being and the hidden recesses of the soul.</p>
`

const distor = `
<h2>Distortion</h2>
<p>Distortion is an annual electronic music festival that takes place in June in the streets of Copenhagen, where I was then living. With more than 100,000 people on the streets, the event is an organised chaos that takes over the city, neighbourhood by neighbourhood, every day for a week. DJs from all over the world come to mix in the crowded streets during the day, and in warehouses in the evening, lit by blinding laser shows. The music is everywhere and fills the city. The Danes look forward to summer all year, they crave sun and light and party from morning to morning. The images were taken in the crowd; in a deafening atmosphere, I made my way through the interstices.</p>

<p>Buzzing from the energy I felt through the discovery of this city, I confronted the excitement, the fear, the vibration of novelty faced with my own mutation. The apocalyptic atmosphere of the festival promised the end of a world and the beginning of mine. I mingled with an eager, entranced crowd; they let go, and so did I. Just when I could feel my life was about to change again, I threw myself into this abyss.</p>

<p class="text-small">The 13 stills that make up this piece are just like the laser shows whose animation bring to light the minute movements that lead us all inexorably towards the end of the party. Everyone making their own journey, as did I.</p>
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