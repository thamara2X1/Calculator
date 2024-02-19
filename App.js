document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("txt");
    const buttons = document.querySelectorAll("input[type='button']");

    let operand1 = "";
    let operand2 = "";
    let operator = "";


    function updateDisplay(value) {
        display.value = value;
    }


    function handleNumberClick(num) {
        if (operator === "") {
            operand1 += num;
            updateDisplay(operand1);
        } else {
            operand2 += num;
            updateDisplay(operand2);
        }
    }


    function handleOperatorClick(op) {
        operator = op;
    }


    function handleBackspace() {
        if (operator === "") {
            operand1 = operand1.slice(0, -1);
            updateDisplay(operand1);
        } else {
            operand2 = operand2.slice(0, -1);
            updateDisplay(operand2);
        }
    }


    function handleEqualsClick() {
        let result;
        switch (operator) {
            case "+":
                result = parseFloat(operand1) + parseFloat(operand2);
                break;
            case "-":
                result = parseFloat(operand1) - parseFloat(operand2);
                break;
            case "x":
                result = parseFloat(operand1) * parseFloat(operand2);
                break;
            case "/":
                result = parseFloat(operand1) / parseFloat(operand2);
                break;
            case "%":
                result = parseFloat(operand1) % parseFloat(operand2);
                break;
            default:
                result = "Error";
        }
        updateDisplay(result);
        operand1 = result.toString();
        operand2 = "";
        operator = "";
    }


    function handleClearClick() {
        operand1 = "";
        operand2 = "";
        operator = "";
        updateDisplay("");
    }


    function handleToggleSign() {
        if (operator === "") {
            operand1 = parseFloat(operand1) * -1;
            updateDisplay(operand1);
        } else {
            operand2 = parseFloat(operand2) * -1;
            updateDisplay(operand2);
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.value;
            switch (value) {
                case "+":
                case "-":
                case "x":
                case "/":
                case "%":
                    handleOperatorClick(value);
                    break;
                case "=":
                    handleEqualsClick();
                    break;
                case "CE":
                    handleClearClick();
                    break;
                case "+/-":
                    handleToggleSign();
                    break;
                case "<X]":
                    handleBackspace();
                    break;
                default:
                    handleNumberClick(value);
            }
        });
    });
});
