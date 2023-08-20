let frameModal = document.querySelector('.call-measurer-home__background');
let callMeasurerOpen = document.querySelector('.call-measurer-home__background-open');
let pushButtonMeasurement = document.querySelector('.advantage-block-link');
let closeModalMeasurement = document.querySelector('.call-measurer-home__cross')
let requestMeasurementHeader = document.querySelector('.request-for-measurement')
let orderPaymentModal = document.querySelector('.order_payment__background');
let offerCalcLink = document.querySelector('.offer-calc-block');
let orderPaymentClose = document.querySelector('.order_payment__close');



// Функция открытия и закрытия модального окна для блока about_company
pushButtonMeasurement.addEventListener('click',function () {
	frameModal.classList.toggle('call-measurer-home__background-open');
});


closeModalMeasurement.addEventListener('click',function () {
	frameModal.classList.remove('call-measurer-home__background-open');
});


// Функция открытия модального окна для блока header 
requestMeasurementHeader.addEventListener('click',function () {
	frameModal.classList.toggle('call-measurer-home__background-open');
});

// Функция открытия модального окна для блока header 
offerCalcLink.addEventListener('click',function () {
	orderPaymentModal.classList.toggle('order_payment__background-open');
});

orderPaymentClose.addEventListener('click',function () {
	orderPaymentModal.classList.remove('order_payment__background-open');
});




