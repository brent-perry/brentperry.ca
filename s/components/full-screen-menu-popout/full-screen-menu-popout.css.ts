import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}

	nav {
		position: fixed;
		width: 100%;
		height: 100vh;
		background: #075cbd;
		z-index: 2;
		top: -100vh;
		left: 0;
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		display: none;
		transition: 1s;
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
		background: #eea16d;
		position: absolute;
		bottom: 0;
		left: 0;
		transition: width 0.5s;
	}

	a:hover::after {
		width: 100%;
	}

	.lite-text {
		color: #333;
		font-size: 200px;
		letter-spacing: 100px;
		opacity: 0.1;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-weight: 800;
		z-index: -1;
	}

	.close {
		width: 50px;
		position: absolute;
		right: 80px;
		top: 50px;
		cursor: pointer;
	}

	.open {
		width: 30px;
		cursor: pointer;
	}
`
