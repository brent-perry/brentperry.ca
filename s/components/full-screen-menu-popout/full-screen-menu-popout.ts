import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import fullScreenMenuPopoutCss from "./full-screen-menu-popout.css.js"
export class FullScreenMenuPopout extends LitElement {
	static styles = fullScreenMenuPopoutCss

	@property({type: Boolean, reflect: true})
	opened = false

	close = () => {
		this.opened = false
	}

	open = () => {
		this.opened = true
	}

	render() {

		return html`
			<nav ?data-open=${this.opened}>
				<ol>
					<li>
						<a href="">Terminal</a>
					</li>
					<li>
						<a target="_blank" href="https://github.com/brent-perry">Github</a>
					</li>
					<li>
						<a target="_blank" href="https://www.linkedin.com/in/brent-perry-5b17761a2/">Linkedin</a>
					</li>
					<li>
						<a target="_blank" href="https://discordapp.com/users/#1039">Discord</a>
					</li>
					<li>
						<a target="_blank" href="/assets/resume/Brent Perry.Resume.pdf">Resume</a>
					</li>
					<li>
						<a target="_blank" href="https://simmer.io/@brentperry">Games</a>
					</li>
				</ol>
				<p class="close" @click="${this.close}">Close</p>
			</nav>
			<div>
				<p class="open" @click="${this.open}">Menu</p>
			</div>

		`
	}
}
