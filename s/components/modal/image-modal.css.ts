import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}

	h1 {
		line-height: 1em;
		text-align: center;
		position: absolute;
		left: 50%;
		z-index: 1;
		font-size: 2em;
		bottom: 0;
		transform: translate(-50%, -50%);
		letter-spacing: 2px;
		position: absolute;
		background-color: #000000c1;
		border-radius: 8px;
		padding: 20px; 
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

	@media screen and (max-width: 840px) {
		h1 {
			line-height: 1em;
			text-align: center;
			padding: 10px;
			font-size: 1.5em;
		}
	}

	@media screen and (max-width: 600px) {
		h1 {
			line-height: 1em;
			text-align: center;
			padding: 10px;
			font-size: 1em;
		}
	}

	@media screen and (max-width: 400px) {
		h1 {
			line-height: 1em;
			text-align: center;
			padding: 10px;
			font-size: 1em;
		}

		img {
			height: 50%;
			transform: rotate(270deg) translateX(140px) translateY(-254px);
		}
}
`
