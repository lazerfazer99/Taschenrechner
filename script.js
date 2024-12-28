function appendOperation(operation) {
    document.getElementById('display').innerHTML += operation;
}

function DeleteOperation() {
    let display = document.getElementById('display');
    display.innerHTML = display.innerHTML.slice(0, -1)
}

function DeleteAllOperation() {
    document.getElementById('display').innerHTML = '';
}

function calculate() {
    let container = document.getElementById('display');
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}
