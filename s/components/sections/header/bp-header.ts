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
								<a href="/index">Gallery</a>
							</li>
							<li>
								<a href="/pages/about">About</a>
							</li>
							<li>
								<a href="">Linkedin</a>
							</li>
							<li>
								<a href="">Discord</a>
							</li>
						</ol>
					</nav>
				</div>
			</header>
		`
	}
}
