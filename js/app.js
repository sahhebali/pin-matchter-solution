
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinstring = pin + '';
    if (pinstring.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit ann call again ', pin);
        return getPin();
    }
}



function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function () {
    const numbers = event.target.innerText;
    const clacInput = document.getElementById('typed-numbers');
    if (isNaN(numbers)) {
        if (numbers == 'C') {
            clacInput.value = '';
        }
    }
    else {
        const previousNumber = clacInput.value;
        const newNumber = previousNumber + numbers;
        clacInput.value = newNumber;
    }

})
// submit button
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successmassege = document.getElementById('notify-success');
    const notifyeror = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successmassege.style.display = 'block';
        notifyeror.style.display = 'none';
    }
    else {

        notifyeror.style.display = 'block';
        successmassege.style.display = 'none';
    }
}