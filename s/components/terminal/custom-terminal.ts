import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import customTerminalCss from "./custom-terminal.css.js"


export class CustomTerminal extends LitElement {
	static styles = customTerminalCss

	// const input = document.querySelector(".terminal input")
	// const output = document.querySelector(".terminal output")
	// const intro = "Hello! I'm Brent Perry. \nI'm a full stack developer \nHere's my portfolio based on \na command terminal \nType 'help' for commands \n"
	// const files = {
	// 	"about.txt": [`Here's a little about myself
	// 	- Live in Victoria B.C. Canada
	// 	- Full Stack Developer
	// 	- Game Developer
	// 	- Coding since 2019
	// 	- 2 year Diploma in App & Web Development
	// 	- Father to a 2020 baby
	// 	- I have dad jokes`],
	// 	"contact.txt": [`Here's how to reach me
	// 	- Email: brentperry92 @gmail.com
	// 	- Phone: 250 818 9113
	// 	- `, createLink("https://www.linkedin.com/in/brent-perry-5b17761a2/", "Linkedin", "_blank")],
	// 	"languages.txt": [`Here are some languages I prefer to use
	// 	- HTML
	// 	- CSS
	// 	- NODE.JS
	// 	- JS
	// 	- C#
	// 	- JAVA`],
	// 	"experience.txt": [`Here is my work experience
	// 	- 12 years of management
	// 	- I built a website for a non profit organization`],
	// 	"projects.txt": [`Here are some projects I've done
	// 	- `, createLink("https://github.com/brent-perry", "Github", "_blank"),
	// 		`
	// 	- `, createLink("http://www.coaststewardshipconservancysociety.ca/", "CSCS", "_blank")],
	// 	"dadjokes.txt": [`Here are some dad jokes
	// 	- What weighs more? Butane or Water? Water. 
	// 	Butane is a lighter fluid.
	// 	- I told my cat that I'm going to teach 
	// 	him to speak english. 
	// 	He looked at me and said, "Me?How."
	// 	- What did Jay-Z call his wife before
	// 	marriage?
	// 	Feyonce.
	// 	- What do you call a sick eagle?
	// 	illegal.
	// 	- I had to fire the guy I hired
	// 	to mow my lawn.
	// 	He just didn't cut it.
	// 	- What does a mermaid use to 
	// 	clean her fin?
	// 	Tide.`]
	// }

	// const help =
	// 	`Type one of the commands listed
	// Shortcut use the numbers (1-4)
	// 1. ls - Shows what files you can view
	// 2. clear - Clears the terminal completely
	// 3. cat - View the desired file \n type 'cat (file_name).txt'
	// 4. whoami - Shows important links`
	// let terminalHistory = [intro]
	// function parseCat(command) {
	// 	const [cat, ...filenames] = command.split(" ").filter(part => part !== "")
	// 	return filenames
	// }

	// function createLink(url, text, target) {
	// 	const a = document.createElement("a")
	// 	a.href = url
	// 	a.textContent = text
	// 	a.target = target
	// 	return a
	// }

	// // function render() {
	// // 	output.textContent = ""
	// // 	for (const item of terminalHistory) {
	// // 		if (typeof item === "string") {
	// // 			const node = document.createTextNode(item)
	// // 			output.appendChild(node)
	// // 		}
	// // 		else if (item instanceof HTMLElement) {
	// // 			output.appendChild(item)
	// // 		}
	// // 		else {
	// // 			console.log(item)
	// // 			throw new Error("Unknown type")
	// // 		}
	// // 	}
	// // }

	// function addToHistory(...content) {
	// 	for (const item of content) {
	// 		terminalHistory.push(item)
	// 	}
	// }

	// function extensionCorrector(filenames) {//ternary operator
	// 	return filenames.map(filename => filename.endsWith(".txt")//condition
	// 		? filename //if
	// 		: filename + ".txt")//else 
	// }

	// function updateScroll() {
	// 	output.scrollTop = output.scrollHeight
	// }

	// render()
	// function interpretCommand(command) {
	// 	addToHistory("\nbrentperry@desktop:dev/porfolio$ " + command + "\n")
	// 	command = command.trim().toLowerCase()
	// 	if (command === "ls" || command === "1") {
	// 		addToHistory(Object.keys(files).join("\n"))
	// 	}
	// 	else if (command === "clear" || command === "2") {
	// 		terminalHistory = [intro]
	// 	}
	// 	else if (command.startsWith("cat") || command.startsWith("3")) {
	// 		const filenames = extensionCorrector(parseCat(command))
	// 		if (filenames.length === 0) {
	// 			addToHistory("Cat requires at least one file name")
	// 		}
	// 		let numberOfFailures = 0
	// 		for (const filename of filenames) {
	// 			const exists = files[filename]
	// 			if (!exists) {
	// 				addToHistory("File does not exist \nType 'ls' for existing files")
	// 				numberOfFailures += 1
	// 			}
	// 		}
	// 		if (numberOfFailures == 0) {
	// 			const contents = filenames.flatMap(filename => files[filename])
	// 			addToHistory(...contents)
	// 		}
	// 	}
	// 	else if (command === "help") {
	// 		addToHistory(help)
	// 	}
	// 	else if (command === "whoami" || command === "4") {
	// 		addToHistory("Brent Perry \n- Full Stack Developer\n- ", createLink("mailto:brentperry92@gmail.com", "Email"), "\n- ", createLink("tel:250-818-9113", "Phone"), "\n- ", createLink("https://www.linkedin.com/in/brent-perry-5b17761a2/", "Linkedin", "_blank"), "\n- ", createLink("https://github.com/brent-perry", "Github", "_blank"))
	// 	}
	// 	else {
	// 		addToHistory("Oops that command doesn't work \nType 'help' for instructions")
	// 	}
	// 	// render()
	// 	updateScroll()
	// }

	// input.addEventListener('keyup', event => {
	// 	if (event.key === 'Enter') {
	// 		interpretCommand(input.value)
	// 		input.value = ""
	// 	}
	// })

	render() {

		return html`
			<div class="terminal">
				<output></output>
				<input type="text">
			</div>
		`
	}
}
