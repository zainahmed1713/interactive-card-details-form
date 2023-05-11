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
        if (getName.value === '') {
            nameOnCard.innerHTML = 'JANE APPLESEED';
        }
        else {
            getName.value = getName.value.replace(/[^\D]/g, '')
            nameOnCard.innerHTML = getName.value;
        }
    });
});

getNumber.addEventListener('input', function () {
    if (getNumber.value.length > getNumber.maxLength) {
        getNumber.value = getNumber.value.slice(0, getNumber.maxLength)
    }
    else {
        getNumber.addEventListener('keyup', function () {
            if (getNumber.value === '') {
                cardNumber.innerHTML = '0000 0000 0000 0000';
            }
            else {
                cardNumber.innerHTML = getNumber.value;
            }
        });
    }
});

getExpMonth.addEventListener('input', function () {
    if (getExpMonth.value.length > getExpMonth.maxLength) {
        getExpMonth.value = getExpMonth.value.slice(0, getExpMonth.maxLength)
    }
    getExpMonth.addEventListener('keyup', function () {
        if (getExpMonth.value === '') {
            month.innerHTML = '00';
        }
        else {
            month.innerHTML = getExpMonth.value;
        }
    });
});

getExpYear.addEventListener('input', function () {
    if (getExpYear.value.length > getExpYear.maxLength) {
        getExpYear.value = getExpYear.value.slice(0, getExpYear.maxLength)
    }
    getExpYear.addEventListener('keyup', function () {
        if (getExpYear.value === '') {
            year.innerHTML = '00';
        }
        else {
            year.innerHTML = getExpYear.value;
        }
    });
});

getCVC.addEventListener('input', function () {
    if (getCVC.value.length > getCVC.maxLength) {
        getCVC.value = getCVC.value.slice(0, getCVC.maxLength)
    }
    getCVC.addEventListener('keyup', function () {
        if (getCVC.value === '') {
            cvc.innerHTML = '000'
        }
        else {
            cvc.innerHTML = getCVC.value;
        }
    });
});

submitButton.addEventListener('click', function () {
    if (getName.value === '' && getNumber.value === '' && getExpMonth === '' && getExpYear === '' && getCVC === '') {
        alert('Please Fill in the required details');
    }
    else {
        const completedState = document.querySelector('.completed-state');
        const showHideForm = document.querySelector('.form');

        if (completedState.style.display === 'none') {
            completedState.style.display = 'flex';
            showHideForm.style.display = 'none';
        }
        else {
            completedState.style.display = 'none';
            showHideForm.style.display = 'block';
        }
    }
});