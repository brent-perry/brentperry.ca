var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import imageModalCss from "./image-modal.css.js";
export class ImageModal extends LitElement {
    constructor() {
        super(...arguments);
        this.open = (details) => {
            this.enlargeDetails = details;
            this.onUpdate(true);
        };
    }
    close() {
        this.enlargeDetails = undefined;
        this.onUpdate(false);
    }
    onUpdate(opened) { }
    render() {
        return (this.enlargeDetails)
            ? html `
				<div @click=${this.close}>
					<h1 name="title">${this.enlargeDetails.title}</h1>
					<img src="${this.enlargeDetails.src}" alt="${this.enlargeDetails.alt}"/>
				</div>
			`
            : null;
    }
}
ImageModal.styles = imageModalCss;
__decorate([
    property({ type: Object })
], ImageModal.prototype, "enlargeDetails", void 0);
//# sourceMappingURL=image-modal.js.map