function generatRandom() {
    const random = Math.floor(Math.random() * 10000);
    const randomString = random + '';
    if (randomString.length === 4) {
        return random;
    } else {
        return generatRandom();
    }

}
function setElementById(elementId) {
    return document.getElementById(elementId);
}
document.getElementById('pin-generator-btn').addEventListener('click', function () {
    const pin = generatRandom();
    setElementById('display-pin').value = pin;
});
setElementById('calc-body').addEventListener('click', function (event) {
    const value = event.target.innerText;
    const pinSet = setElementById('pin-set');
    const pinSetValue = pinSet.value;
    if (isNaN(value)) {
        if(value === 'C'){
            pinSet.value = '';
        }else if(value === '<'){
            const pinArray = pinSetValue.split('');
            pinArray.pop();
            pinSet.value = pinArray.join('');
        }
    } else {
        if (pinSetValue.length === 4) {
            alert('Only 4 Digits');
        } else {
            pinSet.value = pinSetValue + value;
        }
    }
});
setElementById('submit-btn').addEventListener('click', function(event){
    const randomPin = setElementById('display-pin').value;
    const setPin = setElementById('pin-set').value;
    const tryCount = setElementById('try-count');
    console.log(randomPin, setPin);
    if(randomPin == ''){
        alert('Please Generate Pin');
    }else if(randomPin == setPin){
        setElementById('success').style.display = 'block';
        setElementById('failure').style.display = 'none';
    }else{
        let count = parseFloat(tryCount.innerText);
        count--;
        tryCount.innerText = count;
        if(count == 0){
            event.target.setAttribute('disabled', true);
            event.target.style.backgroundColor = '#DDDDDD';
            event.target.style.color = "#000";
        }
        setElementById('success').style.display = 'none';
        setElementById('failure').style.display = 'block';
    }
})
