import {BpHeader} from "./components/sections/header/bp-header.js"
import {BpFooter} from "./components/sections/footer/bp-footer.js"
import {CustomTerminal} from "./components/terminal/custom-terminal.js"
import {EnlargeImage} from "./components/enlarge-image/enlarge-image.js"
import {ImageModal} from "./components/modal/image-modal.js"
import {FullScreenMenuPopout} from "./components/full-screen-menu-popout/full-screen-menu-popout.js"


customElements.define("custom-terminal", CustomTerminal)
customElements.define("bp-header", BpHeader)
customElements.define("bp-footer", BpFooter)
customElements.define("image-modal", ImageModal)
customElements.define("enlarge-image", EnlargeImage)
customElements.define("full-screen-menu-popout", FullScreenMenuPopout)



const modal: ImageModal = document.querySelector('image-modal')
const header: BpHeader = document.querySelector('bp-header')
const enlargeImages = document.querySelectorAll<EnlargeImage>('enlarge-image')

for (const image of Array.from(enlargeImages))
	image.openModal = modal.open

modal.onUpdate = opened => {
	if (opened)
		header.setAttribute("hidden", "")
	else
		header.removeAttribute("hidden")
}
