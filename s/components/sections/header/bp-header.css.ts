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
		color: #3970d6;
		font-weight: 900;
		line-height: 2rem;
		letter-spacing: 2px;
	}

	li {
		margin: 1em;
	}

	a:hover {
		text-decoration: underline #3970d6 10px;
	}

	a {
		font-weight: 600;
		letter-spacing: 2px;
		text-decoration: none;
		color: #ffffff;
	}
`
