import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}
	
	footer {
		display: flex;
		padding: 3em;
		justify-content: space-between;
	}

	div:nth-of-type(2) a{
		margin-left: 1rem;
		margin-right: 1rem;
	}

	div:nth-of-type(3) {
		text-align: end;
	}

	a {
		font-weight: 600;
		text-decoration: none;
	}

	a, p {
		letter-spacing: .1rem;
		color: #ffffff;
		width: 100%;
		margin: 4px;
	}

	a:hover {
		text-decoration: underline #3970d6 3px;
	}
`
