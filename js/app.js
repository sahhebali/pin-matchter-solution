
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