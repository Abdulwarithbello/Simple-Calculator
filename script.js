const display = document.getElementById('display');

function clearDisplay(){
    display.value = '';
}

function clearEntry(){
    display.value = display.value.slice(0, -1);
}

function addValue(value){
    display.value += value;
    display.style.color = 'white'
}

function calculateResult(){
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}