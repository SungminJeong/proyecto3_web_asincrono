import './Header.css';

const template = () => `
  	<h1>Unsplash Proyecto3</h1>
	<div class="header-container">
		<input type="text" id="searchInput" placeholder="write here"/>
		<select id="count">
			<option value="30">30</option>
			<option value="20">20</option>
			<option value="10">10</option>
		</select>
		<select id="order">
			<option value="popular">popular</option>
			<option value="latest">latest</option>
			<option value="views">views</option>
		</select>

		<button id="searchBtn">
			<img src="/icons/search.png" alt="search" id="searchIcon">
		</button>
	<div>
` 
const Header = () => {
	document.querySelector('header').innerHTML = template();
}

export default Header; 