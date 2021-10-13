import {html, LitElement} from "lit"
import fullScreenMenuPopoutCss from "./full-screen-menu-popout.css.js"
export class FullScreenMenuPopout extends LitElement {
	static styles = fullScreenMenuPopoutCss

	close() {
		let menu = document.getElementById("menu")
		menu.style.top = "-100vh"
	}

	open() {
		let menu = document.getElementById("menu")
		menu.style.top = "0"
	}

	render() {

		return html`
			<div class="container">
				<div class="navbar">
					<nav id="menu">
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
						</ol>
						<p class="lite-text">MENU</p>
						<p class="close" @click="${close}">Close</p>
					</nav>
				</div>
				<p class="open" @click="${open}">Open</p>
			</div>

		`
	}
}
