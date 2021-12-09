import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import {EnlargeDetails} from "../modal/image-modal"
import enlargeImageCss from "./enlarge-image.css.js"


export class EnlargeImage extends LitElement {
	static styles = enlargeImageCss

	@property({type: Boolean, reflect: true})
	initiallyHidden = true
	
	@property({type: String, reflect: true})
	src = ""

	@property({type: String, reflect: true})
	alt = ""

	@property({type: String, reflect: true})
	title = ""

	@property({type: String, reflect: true})
	large = ""

	firstUpdated() {
		this.initiallyHidden = false
	}

	enlargeImage() {
		this.openModal({src: this.large, alt: this.alt, title: this.title})
	}

	openModal(details: EnlargeDetails) {
		throw new Error("Open Modal Not Implemented")
	}

	render() {

		return html`
			<div>
				<h1 @click=${this.enlargeImage}>
					${this.title}
				</h1>
				<img
					@click=${this.enlargeImage}
					src="${this.src}"
					alt="${this.alt}"
					title="${this.title}"
					large="${this.large}"
				/>
			</div>
		`
	}
}
