import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import recomendWords from './data/data';
import './style.css';

const init = () => {
	Footer()
	Header()
	Main()
};

init();


const getPhotos = async (keyword, photoNum, order) => {
	const data = await fetch(`https://api.unsplash.com/search/collections?page=1&query=${keyword}&per_page=${photoNum}&order_by=${order}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)//받아온다
	const dataJSON = await data.json(); //제이슨한다
	const photos = dataJSON.results //원하는것만 가져온다
	printPhotos(photos)
};

const printPhotos = (photos) => {
	const container = document.querySelector('#gallery');
	const words = recomendWords;
	if(photos.length === 0){
		container.innerHTML = "";
		document.querySelector('#message').innerHTML = "Search other things..."
		document.querySelector('#recomend').innerHTML = `
		<h2>Are you searching these?</h2>
		<div class="btnContainer">
		${Button("ice")}
		${Button("football")}
		${Button("summer")}
		</div>
		`
		for(const word of words){
			document.querySelector(word).addEventListener('click', (e) => {
				document.querySelector('#message').innerHTML = "";
				document.querySelector('#recomend').innerHTML = "";
				getPhotos(e.target.innerHTML, "20")
			})
		};
	}else{
		container.innerHTML = "";
		for(const photo of photos){
			const li = document.createElement('li');
			const picture = photo.cover_photo.urls.regular
			const img = document.createElement('img')
			img.src = picture;
			img.alt = photo.title;
			img.title = "Click for Big image"
			img.addEventListener('click', () => {
				printModal(picture, photo.title)
			})
			li.appendChild(img)
			container.appendChild(li)
		}
	}
};

const printModal = (picture, title) => {
	document.querySelector('#modal').innerHTML = `
	<img src="${picture}" alt="${title}"/>
	<button id="closeBtn">X</button>
	`
	document.querySelector("#modal").classList.add('open')
	document.querySelector("#closeBtn").addEventListener('click', () => {
		document.querySelector('#modal').classList.remove('open')
	})
};
getPhotos("newyork", "20", "popular");

document.querySelector('#searchBtn').addEventListener('click', () => {
	const inputValue = document.querySelector('#searchInput').value;
	const selectValue = document.querySelector('#count').value;
	const order = document.querySelector('#order').value;
	getPhotos(inputValue, selectValue, order);
	document.querySelector('#recomend').innerHTML = "";
	document.querySelector('#searchInput').focus();
	document.querySelector("#message").innerHTML = `${inputValue}`;
	document.querySelector('#searchInput').value = "";
});