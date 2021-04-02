const
    firstNumber = document.getElementById("input-first-number"),
    secondNumber = document.getElementById("input-second-number"),
    operationType = document.getElementById("input-operation-type"),
    buttonCalculate = document.getElementById("button-calculate"),
    displayBox = document.getElementById("display-box");

function calculateButtonClick() {

    let
        firstValue = firstNumber.value,
        secondValue = secondNumber.value,
        operationValue = operationType.value,
        result;

    result = calculate(firstValue, secondValue, operationValue);
    displayBox.innerHTML = result;

}

function calculate(a, b, operation) {

    let result;

    if (a === "" || b === "") {
        // Za praznu input vrednost...
        result = "Loši ulazni parametri!";
    } else {

        a = parseInt(a);
        b = parseInt(b);

        switch (operation) {

            case "1":
                result = a + b;
                break;

            case "2":
                result = a - b;
                break;

            case "3":
                result = a * b;
                break;

            case "4":
                if (b === 0) {
                    result = "Deljenje nulom!";
                } else {
                    result = a / b;
                }
                break;
        }

    }

    return result;

}

buttonCalculate.onclick = calculateButtonClick;