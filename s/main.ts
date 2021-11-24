import {CustomTerminal} from "./components/terminal/custom-terminal.js"
import {EnlargeImage} from "./components/enlarge-image/enlarge-image.js"
import {ImageModal} from "./components/modal/image-modal.js"
import {FullScreenMenuPopout} from "./components/full-screen-menu-popout/full-screen-menu-popout.js"


customElements.define("custom-terminal", CustomTerminal)
customElements.define("image-modal", ImageModal)
customElements.define("enlarge-image", EnlargeImage)
customElements.define("full-screen-menu-popout", FullScreenMenuPopout)



const modal: ImageModal = document.querySelector('image-modal')
const header = document.querySelector('header')
const enlargeImages = document.querySelectorAll<EnlargeImage>('enlarge-image')

for (const image of Array.from(enlargeImages))
	image.openModal = modal.open

modal.onUpdate = opened => {
	if (opened)
		header.setAttribute("hidden", "")
	else
		header.removeAttribute("hidden")
}
