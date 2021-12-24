import { LitElement } from "lit";
import { EnlargeDetails } from "../modal/image-modal";
export declare class EnlargeImage extends LitElement {
    static styles: import("lit").CSSResultGroup;
    initiallyHidden: boolean;
    src: string;
    alt: string;
    title: string;
    large: string;
    firstUpdated(): void;
    enlargeImage(): void;
    openModal(details: EnlargeDetails): void;
    render(): import("lit-html").TemplateResult<1>;
}
