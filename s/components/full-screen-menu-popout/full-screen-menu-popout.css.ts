import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}

	nav {
		right: -100%;
		position: fixed;
		width: 100%;
		height: 100%;
		background: #000000;
		z-index: 2;
		display: none;
		justify-content: center;
		text-align: center;
		align-items: center;	
		transition: right 1s;
	}

	nav[data-open] {
		display: flex;
		right: 0;
		transition: right 1s;
	}

	li {
		list-style: none;
		margin: 1.5em;
	}

	a {
		text-decoration: none;
		font-size: 40px;
		color: #ffffff;
		padding: 10px;
		letter-spacing: 5px;
		position: relative;
	}

	a::after {
		content: '';
		height: 3px;
		width: 0;
		background: #ff0095;
		position: absolute;
		bottom: 0;
		left: 0;
		transition: width 0.5s;
	}

	a:hover::after {
		width: 100%;
	}

	p {
		position: absolute;
		z-index: 1;
		cursor: pointer;
	}

	.close {
		right: 80px;
		top: 50px;
	}

	.open {
		padding-right: 50px;
	}

	div {
		display: flex;
		justify-content: end;
	}
`
