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
					<a href=""><img src="" />Discord</a>
					<a href=""><img src="" />Email</a>
					<a href=""><img src="" />Linkedin</a>
				</div>
				<div>
					<a href="#to-top">Back to top</a>
				</div>
			</footer>
		`
	}
}
