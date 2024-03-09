// JavaScript code for credit card validation using Luhn Algorithm
function verifyCardNumber(cardNumber) {
    let sumOfOddDigits = 0;
    let cardNumberReversed = cardNumber.split('').reverse().join('');
    let oddDigits = cardNumberReversed.split('').filter((_, index) => index % 2 === 0);

    for (let digit of oddDigits) {
        sumOfOddDigits += parseInt(digit);
    }

    let sumOfEvenDigits = 0;
    let evenDigits = cardNumberReversed.split('').filter((_, index) => index % 2 !== 0);
    for (let digit of evenDigits) {
        let number = parseInt(digit) * 2;
        if (number >= 10) {
            number = Math.floor(number / 10) + (number % 10);
        }
        sumOfEvenDigits += number;
    }

    let total = sumOfOddDigits + sumOfEvenDigits;
    return total % 10 === 0;
}

function isExpired(expirationMonth, expirationYear) {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // January is 0
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();

    // Card is expired if expiration year is in the past
    if (expirationYear < currentYear) {
        return true;
    }

    // Card is expired if expiration year is the same as current year
    // and expiration month is in the past or equal to current month
    if (expirationYear === currentYear && expirationMonth <= currentMonth) {
        // Check if expiration month is the same as current month and the day is past or equal
        if (expirationMonth === currentMonth && currentDay > 1) {
            return true;
        }
        return true;
    }

    return false;
}

function main() {
    const cardNumberInput = document.getElementById('credit-card-number');
    const expirationMonthSelect = document.getElementById('expiration-month');
    const expirationYearSelect = document.getElementById('expiration-year');
    const cvvInput = document.getElementById('cvv');
    const validateBtn = document.getElementById('validate-btn');

    validateBtn.addEventListener('click', () => {
        const cardNumber = cardNumberInput.value.replace(/[-\s]/g, ''); // Remove hyphens and spaces
        const expirationMonth = parseInt(expirationMonthSelect.value);
        const expirationYear = parseInt(expirationYearSelect.value);
        const cvv = cvvInput.value;

        // Additional validation for expiration month, year, and CVV
        if (isExpired(expirationMonth, expirationYear)) {
            alert('Card has expired!');
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            alert('CVV must be 3 digits long and numeric!');
            return;
        }

        // Check if card number is numeric
        if (!/^\d+$/.test(cardNumber)) {
            alert('Card number must be numeric!');
            return;
        }

        if (verifyCardNumber(cardNumber)) {
            alert('VALID!');
        } else {
            alert('INVALID!');
        }
    });
}

main();
