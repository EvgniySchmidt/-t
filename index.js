// Вариант 3:
function isNegativeNumber(element, resultID) {
    let resultElement = document.getElementById(resultID);
    let val = element.value;
    if(val === '') {
        resultElement.textContent = '';
        return;
    }
    if(isNaN(val)) {
        resultElement.textContent = 'Введено не число';
        return;
    }
    val = parseInt(val);
    let negative = '';
    let common = isCommonNumber(val);
    if(val < 0) {
        negative = 'Число отрицательное';
    } else {
        negative = 'Число положительное';
    }
    resultElement.textContent = negative + ' / ' + common;
}

function isCommonNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'Составное';
        }
    }
    return 'Простое';
}

// Вариант 1, Вариант 2, Вариант 3:

let creditTotal = 700;

function credit(elementID, resultID) {
    let val = document.getElementById(elementID).value;
    let resultElement = document.getElementById(resultID);

    val = parseInt(val);
    creditTotal -= val;

    switch (true) {
        case creditTotal > 0:
            resultElement.textContent = 'сумма задолженности: ' + creditTotal;
            break;
        case creditTotal < 0:
            resultElement.textContent = 'сумма переплаты: ' + (creditTotal + -0);
            break;
        case creditTotal === 0:
            resultElement.textContent = 'заделженность отсутствует';
    }
}