import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}

	h1 {
		position: absolute;
		left: 50%;
		z-index: 1;
		font-size: 2em;
		bottom: 5%;
		transform: translate(-50%, -50%);
		letter-spacing: .1rem;
	}

	h1:hover {
		cursor: default
	}

	img {
		position: absolute;
		height: 90%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	div {
		position: fixed;
		background-color: #000000d8;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`
