import './Main.css';

const template = () => `
	<h2 id="message"></h2>
	<div id="recomend"></div>
	<article id="modal"></article>
	<ul id="gallery"></ul>
`


const Main = () => {
	document.querySelector('main').innerHTML = template();
}

export default Main;