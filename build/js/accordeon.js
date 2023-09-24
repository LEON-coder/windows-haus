var acc = document.getElementsByClassName('questions-answer__item');


var i;

for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function () {
		this.classList.toggle("questions-answer__list-active");
		this.nextElementSibling.classList.toggle("questions-answer__list-show");
	}
};


