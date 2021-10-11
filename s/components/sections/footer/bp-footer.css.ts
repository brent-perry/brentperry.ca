import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}
	
	footer {
		border-top: solid #0fbb0f 1px;
		display: flex;
		background-color: #18181a;
		padding: 3em;
		justify-content: space-between;
	}

	div {
		width: 33.33%;
		display: flex;
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
		color: #adaabd;
		width: 100%;
		margin: 4px;
	}

	a:hover {
		text-decoration: underline #0fbb0f 3px;
	}
`
