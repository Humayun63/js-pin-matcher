//Initial Declearation 
const tryCount = setElementById('try-count');
let count = parseFloat(tryCount.innerText);
const pinSet = setElementById('pin-set');
// Important Functions
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
// Event Handeller 
document.getElementById('pin-generator-btn').addEventListener('click', function () {
    const pin = generatRandom();
    setElementById('display-pin').value = pin;
    count = 3;
    tryCount.innerText = count;
    setElementById('success').style.display = 'none';
    setElementById('failure').style.display = 'none';
    pinSet.value = '';
    setElementById('submit-btn').classList.remove('disabled');
});
setElementById('calc-body').addEventListener('click', function (event) {
    const value = event.target.innerText;
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
    console.log(randomPin, setPin);
    if(randomPin == ''){
        alert('Please Generate Pin');
    }else if(randomPin == setPin){
        setElementById('success').style.display = 'block';
        setElementById('failure').style.display = 'none';
    }else{
        count--;
        tryCount.innerText = count;
        if(count == 0){
            event.target.classList.add('disabled');
        }
        setElementById('success').style.display = 'none';
        setElementById('failure').style.display = 'block';
    }
})
