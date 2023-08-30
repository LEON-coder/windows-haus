let frameModal = document.querySelector('.call-measurer-home__background');
let pushButtonMeasurement = document.querySelector('.advantage-block-link');
let closeModalMeasurement = document.querySelector('.call-measurer-home__cross')
let requestMeasurementHeader = document.querySelector('.request-for-measurement')
let offerCalcLink = document.querySelector('.offer-calc-block');
let offerCalcModal = document.querySelector('.order-payment__background-calc');
let offerCalcClose = document.querySelector('.order-payment__close-calc');
let orderPaymentClose = document.querySelector('.order_payment__close');
let orderPaymentCloseHeader = document.querySelector('.order-payment__close-header');
let orderPaymentHeaderLink = document.querySelector('.order-payment-block-header')
let orderPaymentModalHeader = document.querySelector('.order-payment__background-header');


// Функция открытия и закрытия модального окна для ссылки заявка на замер в блоке about_company
pushButtonMeasurement.addEventListener('click',function () {
	frameModal.classList.toggle('call-measurer-home__background-open');
});


closeModalMeasurement.addEventListener('click',function () {
	frameModal.classList.remove('call-measurer-home__background-open');
});



// Функция открытия модального окна для ссылки заявка на замер в блоке header 
requestMeasurementHeader.addEventListener('click',function () {
	frameModal.classList.toggle('call-measurer-home__background-open');
});



// Функция открытия модального окна для ссылки Установка пластиковых окон в блоке our_services__wrap

let blockServiceLink = document.querySelector('.open-first-modal');
let popupOurServicesBackground = document.querySelector('.pop-up__our-services__background');
let popupOurServicesClose = document.querySelector('.pop-up__our-services_close')

blockServiceLink.addEventListener('click',function () {
	popupOurServicesBackground.classList.toggle('pop-up__our-services__background-open');
});

popupOurServicesClose.addEventListener('click',function () {
	popupOurServicesBackground.classList.remove('pop-up__our-services__background-open');
});

// Функция открытия модального окна для ссылки Остекление балконов и лоджий в блоке our_services__wrap
let blockServiceLink2 = document.querySelector('.open-second-modal');
let popupOurServicesBackground2 = document.querySelector('.pop-up-2__our-services__background');
let popupOurServicesClose2 = document.querySelector('.pop-up__our-services_close-2')


blockServiceLink2.addEventListener('click',function () {
	popupOurServicesBackground2.classList.toggle('pop-up-2__our-services__background-open');
});

popupOurServicesClose2.addEventListener('click',function () {
	popupOurServicesBackground2.classList.remove('pop-up-2__our-services__background-open');
});


// Функция открытия модального окна для ссылки Остекление котеджей и дач в блоке our_services__wrap

let blockServiceLink3 = document.querySelector('.open-third-modal');
let popupOurServicesBackground3 = document.querySelector('.pop-up-3__our-services__background');
let popupOurServicesClose3 = document.querySelector('.pop-up__our-services_close-3');

blockServiceLink3.addEventListener('click',function () {
	popupOurServicesBackground3.classList.toggle('pop-up-3__our-services__background-open');
});

popupOurServicesClose3.addEventListener('click',function () {
	popupOurServicesBackground3.classList.remove('pop-up-3__our-services__background-open');
});

// Функция открытия модального окна для ссылки Остекление корпоративных обьектов our_services__wrap

let blockServiceLink4 = document.querySelector('.open-fourth-modal');
let popupOurServicesBackground4 = document.querySelector('.pop-up-4__our-services__background');
let popupOurServicesClose4 = document.querySelector('.pop-up__our-services_close-4');

blockServiceLink4.addEventListener('click',function () {
	popupOurServicesBackground4.classList.toggle('pop-up-4__our-services__background-open');
});

popupOurServicesClose4.addEventListener('click',function () {
	popupOurServicesBackground4.classList.remove('pop-up-4__our-services__background-open');
});




// Функция открытия модального окна для ссылки заказать расчет в блоке header 
orderPaymentHeaderLink.addEventListener('click',function () {
	orderPaymentModalHeader.classList.toggle('header-open-modal');
});

orderPaymentCloseHeader.addEventListener('click',function () {
	orderPaymentModalHeader.classList.remove('header-open-modal');
});


// Функция открытия модального окна для ссылки заказать расчет в блоке quality-items-block


offerCalcLink.addEventListener('click',function () {
	offerCalcModal.classList.toggle('order-payment__modal-open');
});

offerCalcClose.addEventListener('click',function () {
	offerCalcModal.classList.remove('order-payment__modal-open');
});






// Функция открытия модального окна для ссылки "оставить отзыв" во вкладке about-company__reviews-block

let linkOpenRewiev = document.querySelector('.about-company__leave-review-block')
let rewievBlogBackground = document.querySelector('.rewiev-blog__background')
let rewievBlogClose = document.querySelector('.rewiev-blog__close')


linkOpenRewiev.addEventListener('click',function () {
	rewievBlogBackground.classList.toggle('rewiev-blog-open');
});

rewievBlogClose.addEventListener('click',function () {
	rewievBlogBackground.classList.remove('rewiev-blog-open');
});


/*
// Функция открытия модального окна Портфолио во вкладке portfolio
let portfolioImg = document.querySelector('.slider__item:nth-child(1)');
let portfolioPopup = document.querySelector('.pop-up-portfolio__background')
let portfolioPopupClose = document.querySelector('.pop-up-portfolio__close')

portfolioImg.addEventListener('click',function () {
	portfolioPopup.classList.toggle('pop-up-portfolio-open');
});
portfolioPopupClose.addEventListener('click',function () {
	portfolioPopup.classList.remove('.pop-up-portfolio-open');
});

*/










