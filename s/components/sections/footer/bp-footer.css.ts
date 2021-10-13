import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}
	
	footer {
		display: flex;
		padding: 2em;
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
		text-decoration: underline #202020 3px;
	}

	@media screen and (max-width: 713px) {
		footer {
			flex-direction: column-reverse;
	}
		div {
			margin-top: 1em;
		}
  }
`
