let result = document.getElementById('result');

function z() {
    result.value += '0';
}

function dot() {
    result.value += '.';
}

function one() {
    result.value += '1'
}

function two() {
    result.value += '2';
}

function three() {
    result.value += '3';
}

function four() {
    result.value += '4';
}

function five() {
    result.value += '5';
}

function six() {
    result.value += '6';
}

function seven() {
    result.value += '7';
}

function eight() {
    result.value += '8';
}

function nine() {
    result.value += '9';
}


function power() {
    result.value += '**';
}

function percent() {
    result.value += Math.pow(result.value);
}

function divid() {
    result.value += '/';
}

function multiply() {
    result.value += '*';
}

function plus() {
    result.value += '+';
}

function minus() {
    result.value += '-';
}

function equals() {
    let solution = eval(result.value);
    result.value = solution;
}


function ac() {
    result.value = '';
    
}

