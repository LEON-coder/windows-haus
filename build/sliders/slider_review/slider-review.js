let getSliderChildren = (arrow) => {
	let slider = document.querySelector(`.slider#${arrow.getAttribute("id")}`);
	let container = slider.querySelector(".slider__container_review");
	return container.children
}


let prevArrows = document.querySelectorAll(".reviews-slider_control-left");

for (let prevArrow of prevArrows) {
	prevArrow.addEventListener('click',function () {
		let children = getSliderChildren(prevArrow)
		children[0].before(children[children.length - 1])
	});
};

let nextArrows = document.querySelectorAll(".reviews-slider_control-right");

for (let nextArrow of nextArrows) {
	nextArrow.addEventListener('click',function () {
		let children = getSliderChildren(nextArrow)
		children[children.length - 1].after(children[0])
	});
};