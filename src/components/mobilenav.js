// Extend the HTMLElement class to create the web component
class MobileNav extends HTMLElement {
	constructor () {

		// Always call super first in constructor
		super();
		this.innerHTML =
		`
	<button class="nav-action">+</button>
	<nav class="offscreen-nav">
		<span class="f-1"><a href="./index.html">Nicolas Hermann</a></span>
		<div class="flex f-3 dir-column">
			<span class="mb-3">séries</span>
			<a class="mb-1" href="lookout.html">Look out</a>
			<a class="mb-1" href="salviadivinorum.html">Salvia Divinorum</a>
			<a class="mb-1" href="laniakea.html">Laniakea</a>
			<a class="mb-1" href="mark.html">Mark</a>
			<a class="mb-1" href="distortion.html">Distortion</a>
		</div>
		<a class="mb-8" href="./about.html">à propos</a>
	</nav>
		`;
	}
	connectedCallback () {
    // Navigation script
    let offnav = document.querySelector(".offscreen-nav")
    this.addEventListener('click', togglenav)
    function togglenav()  {

      if(document.getElementById("about")) {
        document.getElementById("about").classList.toggle('no-scroll')
      }

      this.classList.toggle('nav-active')
      offnav.classList.toggle('nav-visible')
      if(offnav.classList.contains('nav-visible')){
        gsap.to(offnav, {x: 0, duration: 1})
      }
    }

  }
}

// Define the new web component
if ('customElements' in window) {
	customElements.define('mobile-nav', MobileNav);
}

