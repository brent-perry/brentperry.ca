import { LitElement } from "lit";
export interface EnlargeDetails {
    title: string;
    alt: string;
    src: string;
}
export declare class ImageModal extends LitElement {
    static styles: import("lit").CSSResultGroup;
    enlargeDetails: EnlargeDetails;
    close(): void;
    onUpdate(opened: boolean): void;
    open: (details: EnlargeDetails) => void;
    render(): import("lit-html").TemplateResult<1>;
}
