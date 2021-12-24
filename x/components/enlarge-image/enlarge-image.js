var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import enlargeImageCss from "./enlarge-image.css.js";
export class EnlargeImage extends LitElement {
    constructor() {
        super(...arguments);
        this.initiallyHidden = true;
        this.src = "";
        this.alt = "";
        this.title = "";
        this.large = "";
    }
    firstUpdated() {
        this.initiallyHidden = false;
    }
    enlargeImage() {
        this.openModal({ src: this.large, alt: this.alt, title: this.title });
    }
    openModal(details) {
        throw new Error("Open Modal Not Implemented");
    }
    render() {
        return html `
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
		`;
    }
}
EnlargeImage.styles = enlargeImageCss;
__decorate([
    property({ type: Boolean, reflect: true })
], EnlargeImage.prototype, "initiallyHidden", void 0);
__decorate([
    property({ type: String, reflect: true })
], EnlargeImage.prototype, "src", void 0);
__decorate([
    property({ type: String, reflect: true })
], EnlargeImage.prototype, "alt", void 0);
__decorate([
    property({ type: String, reflect: true })
], EnlargeImage.prototype, "title", void 0);
__decorate([
    property({ type: String, reflect: true })
], EnlargeImage.prototype, "large", void 0);
//# sourceMappingURL=enlarge-image.js.map