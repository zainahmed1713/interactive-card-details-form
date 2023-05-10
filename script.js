//Selecting Card Elements
const cardNumber = document.querySelector('.card-number');
const nameOnCard = document.querySelector('.name');
const month = document.querySelector('.card-month');
const year = document.querySelector('.card-year');
const cvc = document.querySelector('.cvc');

// Selecting all input boxes
const getName = document.querySelector('#name');
const getNumber = document.querySelector('#number');
const getExpMonth = document.querySelector('#expdate');
const getExpYear = document.querySelector('#expdate-year');
const getCVC = document.querySelector('#card-cvc');
const submitButton = document.querySelector('.submit-btn');

getName.addEventListener('input', function () {
    getName.addEventListener('keyup', function () {
        nameOnCard.innerHTML = getName.value;
    });
});

getNumber.addEventListener('input', function () {
    if (getNumber.value.length > getNumber.maxLength) {
        getNumber.value = getNumber.value.slice(0, getNumber.maxLength)
    }
    getNumber.addEventListener('keyup', function () {
        cardNumber.innerHTML = getNumber.value;
    });
});

getExpMonth.addEventListener('input', function () {
    if (getExpMonth.value.length > getExpMonth.maxLength) {
        getExpMonth.value = getExpMonth.value.slice(0, getExpMonth.maxLength)
    }
    getExpMonth.addEventListener('keyup', function () {
        month.innerHTML = getExpMonth.value;
    });
});

getExpYear.addEventListener('input', function () {
    if (getExpYear.value.length > getExpYear.maxLength) {
        getExpYear.value = getExpYear.value.slice(0, getExpYear.maxLength)
    }
    getExpYear.addEventListener('keyup', function () {
        year.innerHTML = getExpYear.value;
    });
});

getCVC.addEventListener('input', function () {
    if (getCVC.value.length > getCVC.maxLength) {
        getCVC.value = getCVC.value.slice(0, getCVC.maxLength)
    }
    getCVC.addEventListener('keyup', function () {
        cvc.innerHTML = getCVC.value;
    });
});

submitButton.addEventListener('click', function () {
    const completedState = document.querySelector('.completed-state');
    const showHideForm = document.querySelector('.form')

    if (completedState.style.display === 'none') {
        completedState.style.display = 'flex';
        showHideForm.style.display = 'none';
    }
    else {
        completedState.style.display = 'none';
        showHideForm.style.display = 'block';
    }
})
