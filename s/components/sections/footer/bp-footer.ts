import {html, LitElement} from "lit"
import bpFooterCss from "./bp-footer.css.js"
export class BpFooter extends LitElement {
	static styles = bpFooterCss

	render() {

		return html`
			<footer>
				<div>
					<p>© All rights reserved</p>
				</div>
				<div>
					<a href="https://discordapp.com/users/#1039">Discord</a>
					<a href="mailto:brentperry92@gmail.com">Email</a>
					<a href="https://www.linkedin.com/in/brent-perry-5b17761a2/">Linkedin</a>
				</div>
				<div>
					<a href="#to-top">Back to top</a>
				</div>
			</footer>
		`
	}
}
