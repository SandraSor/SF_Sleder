// import 'style.scss';

const entities = [
	{
		city: 'Rostov-on-Don, Admiral',
		apart: '81 m2',
		time: '3.5 months',
		cost: 'Upon request',
		img: './img/1.png',
	},
	{
		city: 'Sochi Thieves',
		apart: '105 m2',
		time: '4 months',
		cost: 'Upon request',
		img: './img/2.png',
	},
	{
		city: 'Rostov-on-Don Patriotic',
		apart: '93 m2',
		time: '3 months',
		cost: 'Upon request',
		img: './img/3.png',
	},
];

const text = document.querySelector('.text');
const slider = document.querySelector('.slider');
const slideCount = entities.length;

const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');

const city = document.querySelector('.city');
const apart = document.querySelector('.apart');
const time = document.querySelector('.time');
const cost = document.querySelector('.cost');

const dotsSlider = document.querySelector('.container-info_btn-dot');
const dots = Array.from(dotsSlider.querySelectorAll('.dot'));

const listsSlider = document.querySelector('.text-title');
const lists = Array.from(listsSlider.querySelectorAll('.list'));

let slideIndex = 0;

// const setEntity = (index) => {
//   text.innerText = entities[index].text
//   slider.style.backgroundImage = `url(${entities[index].img})`
// }

const showPreviousSlide = () => {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount;
	updateSlider();
};

const showNextSlide = () => {
	slideIndex = (slideIndex + 1) % slideCount;
	updateSlider();
};

const updateSlider = () => {
	entities.forEach((slide, index) => {
		if (index === slideIndex) {
			slider.style.backgroundImage = `url(${entities[index].img})`;
			city.innerText = entities[index].city;
			apart.innerText = entities[index].apart;
			time.innerText = entities[index].time;
			cost.innerText = entities[index].cost;
			removeClassActive();
			dots[index].classList.toggle('active');
			lists[index].classList.toggle('active');
		}
	});
};

const removeClassActive = () => {
	dots.forEach((dot) => {
		dot.classList.remove('active');
	});

	lists.forEach((list) => {
		list.classList.remove('active');
	});
};

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		slideIndex = index;
		removeClassActive();
		// dot.classList.toggle('active');
		updateSlider();
	});
});

lists.forEach((list, index) => {
	list.addEventListener('click', () => {
		slideIndex = index;
		removeClassActive();
		// list.classList.toggle('active');
		updateSlider();
	});
});

prev.addEventListener('click', () => {
	showPreviousSlide();
});
next.addEventListener('click', () => {
	showNextSlide();
});

updateSlider();
