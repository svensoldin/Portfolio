const button = document.getElementById('play');
const particles = document.getElementById('particles-js');
const invisibleButton = document.getElementById('invisible-btn');
const nav = document.getElementById('nav')
const aboutSection = document.getElementById('about-section');
const projectsSection = document.getElementById('projects-section');
const firstButton = document.getElementById('scroll');
const secondButton = document.getElementById('scroll2');
const title = document.getElementById('title');


function togglePlay() {
	particles.style.zIndex = "1";
	invisibleButton.style.display="block";
	invisibleButton.style.zIndex="1";
	nav.classList.add("invisible");
	title.classList.add("invisible");
	aboutSection.style.display=("none");
	projectsSection.style.display=("none");
}

function unTogglePlay() {
	particles.style.zIndex = "-1";
	invisibleButton.style.display="none";
	invisibleButton.style.zIndex="-1";
	nav.classList.remove("invisible");
	title.classList.remove("invisible");
	aboutSection.style.display=("flex");
	projectsSection.style.display=("flex");
}

button.addEventListener("click", togglePlay);
invisibleButton.addEventListener('click', unTogglePlay)