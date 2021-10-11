import {html, LitElement} from "lit"
import bpHeaderCss from "./bp-header.css.js"
export class BpHeader extends LitElement {
	static styles = bpHeaderCss

	render() {

		return html`
			<header>
				<div>
					<span>
						<h1>Brent Perry</h1>
						<h1>Full Stack Developer</h1>
					</span>
					<nav>
						<ol>
							<li>
								<a href="/index">Home</a>
							</li>
							<li>
								<a href="">Terminal</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/brent-perry-5b17761a2/">Linkedin</a>
							</li>
							<li>
								<a href="https://discordapp.com/users/#1039">Discord</a>
							</li>
						</ol>
					</nav>
				</div>
			</header>
		`
	}
}
