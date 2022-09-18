// Extend the HTMLElement class to create the web component
class SiteNav extends HTMLElement {
	constructor () {

		// Always call super first in constructor
		super();
		this.innerHTML =
		`<nav class="mob-hide nav-grid desk-nav">
		<ul class="flex" style="justify-self: end;">
			<li class="dropdown">
				<a href="#" >séries</a>
				<div class="dropdown-content dark-drop">
					<a href="lookout.html">Look out</a>
					<a href="salviadivinorum.html">Salvia Divinorum</a>
					<a href="laniakea.html">Laniakea</a>
					<a href="mark.html">Mark</a>
					<a href="distortion.html">Distortion</a>
				</div>
			</li>
		</ul>
		<span></span>
		<ul style="justify-self: baseline;">
			<li><a href="./about.html">à propos</a> </li>
		</ul>
	</nav>`;
		console.log('Constructed', this);

	}
	connectedCallback () {
		console.log('connected!', this);
	}
}

// Define the new web component
if ('customElements' in window) {
	customElements.define('site-nav', SiteNav);
}