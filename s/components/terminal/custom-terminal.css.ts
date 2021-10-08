import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}

	* {
		margin: 0;
		padding: 0;
		color: #00ff00;
	}

	a:hover {
		opacity: .6;
	}

	output {
		white-space: pre-wrap;
		display: block;
		overflow-y: auto;
		max-height: 80vh;
	}

	input {
		font:inherit;
		color:inherit;
		background:#0f02;
		padding: .2em;
		padding-top: .5em;
		margin-top: 1em;
		border: none;
		display: block;
		width: 100%;
		border-top: solid 1px;
	}

	input:focus {
		outline: none;
	}

	.terminal {
		font-family: monospace;
		letter-spacing: .15em;
		font-size: 1.6em;
	}

	input::before {
		display: inline;
		content: "$ ";
	}
	`
