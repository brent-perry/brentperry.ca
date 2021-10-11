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
		padding: 1em;
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
		font-weight: 900;
		line-height: 2rem;
		letter-spacing: 2px;
		color: #adaabd;
	}

	a:hover, .subnav span:hover {
		text-decoration: underline #0fbb0f 3px;
	}

	li:hover {
		cursor: pointer;
		text-decoration: underline #0fbb0f 3px;
	}

	a {
		font-weight: 600;
		letter-spacing: 2px;
		text-decoration: none;
		font-size: 1.4em;
		color: #0fbb0f;
		width: 100%;
		padding: 1em;
	}
`
