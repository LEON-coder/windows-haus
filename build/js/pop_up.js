let frameModal = document.querySelector('.call-measurer-home__background');
let pushButtonMeasurement = document.querySelector('.advantage-block-link');
let closeModalMeasurement = document.querySelector('.call-measurer-home__cross')
let requestMeasurementHeader = document.querySelector('.request-for-measurement')
let orderCalcModal = document.querySelector('.order_payment__background');
let offerCalcLink = document.querySelector('.offer-calc-block');
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




// Функция открытия модального окна для ссылки заказать расчет в блоке header 
orderPaymentHeaderLink.addEventListener('click',function () {
	orderPaymentModalHeader.classList.toggle('header-open-modal');
});

orderPaymentCloseHeader.addEventListener('click',function () {
	orderPaymentModalHeader.classList.remove('header-open-modal');
});


// Функция открытия модального окна для ссылки заказать расчет в блоке quality-items-block
offerCalcLink.addEventListener('click',function () {
	orderCalcModal.classList.toggle('order_payment__background-open');
});

orderPaymentClose.addEventListener('click',function () {
	orderCalcModal.classList.remove('order_payment__background-open');
});











