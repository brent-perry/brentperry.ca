import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}
	
	header {
		padding: 2em;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ol {
		display: flex;
		padding: 0;
		list-style-type: none;
	}

	span {
		text-align: center;
	}

	h1 {
		color: #202020;
		font-weight: 900;
		line-height: 2rem;
		letter-spacing: 2px;
	}

	li {
		margin: 1em;
	}

	a:hover {
		text-decoration: underline #202020 10px;
	}

	a {
		font-weight: 600;
		letter-spacing: 2px;
		text-decoration: none;
		color: #ffffff;
	}
`
