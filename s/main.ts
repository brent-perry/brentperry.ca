import {EnlargeImage} from "./components/enlarge-image/enlarge-image.js"
import {ImageModal} from "./components/modal/image-modal.js"

customElements.define("image-modal", ImageModal)
customElements.define("enlarge-image", EnlargeImage)


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



let menu = document.getElementById("menu")
let openMenuButton = document.getElementById("open_button")
let closeMenuButton = document.getElementById("close_button")
let openButtonWrapper = document.getElementById("open_button_wrapper")
function CloseMenu() {
	menu.style.top = "-100vh"
	openButtonWrapper.style.zIndex = "999"
}
function OpenMenu() {
	menu.style.top = "0"
	openButtonWrapper.style.zIndex = "0"
}

openMenuButton.addEventListener("click", () => {
	OpenMenu()
})

closeMenuButton.addEventListener("click", () => {
	CloseMenu()
})
