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
		font-size: 1.8rem;
	}

	img {
		transition: all .4s ease-out;
		margin: 1em;
		width: 300px;
		height: 300px;
		cursor: pointer;
	}
	
	`
