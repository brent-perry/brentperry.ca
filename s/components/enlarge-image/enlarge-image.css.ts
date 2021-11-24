import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}
	
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div:hover h1 {
		opacity: 1;
		cursor: pointer;
	}

	div:hover img {
		opacity: .4;
		cursor: pointer;
	}

	h1 {
		transition: all .4s ease-out;
		letter-spacing: 2px;
		position: absolute;
		z-index: 1;
		opacity: 0;
		font-size: 1em;
		background-color: #000000c1;
		border-radius: 8px;
		padding: 8px;
	}

	img {
		transition: all .4s ease-out;
		width: 300px;
		height: 300px;
		cursor: pointer;
	}
	
	`
