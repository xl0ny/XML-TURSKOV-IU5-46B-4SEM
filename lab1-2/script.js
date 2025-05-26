document.addEventListener("DOMContentLoaded", function () {
    let result = document.getElementById("result");
    let previousOperation = document.createElement("div");
    previousOperation.classList.add("previous-operation");
    result.parentNode.insertBefore(previousOperation, result);
    
    let currentInput = "0";
    let storedValue = null;
    let pendingOperation = null;
    let isNewInput = false;
    let outputThemes = ["output-theme-1", "output-theme-2", "output-theme-3", "output-theme-4"];
    let currentOutputTheme = 0;

    function updateDisplay() {
        if (currentInput.length > 12) {
            result.style.fontSize = "1rem";
        } else {
            result.style.fontSize = "1.5rem";
        }
        result.textContent = currentInput;
    }

    function clearCalculator() {
        currentInput = "0";
        storedValue = null;
        pendingOperation = null;
        isNewInput = false;
        previousOperation.textContent = "";
        updateDisplay();
    }

    document.getElementById("btn_op_clear").addEventListener("click", clearCalculator);
    document.getElementById("btn_op_sign").addEventListener("click", function () {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    });
    
    document.getElementById("btn_op_percent").addEventListener("click", function () {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    });
    
    document.getElementById("btn_backspace").addEventListener("click", function () {
        currentInput = currentInput.slice(0, -1) || "0";
        updateDisplay();
    });
    
    document.getElementById("btn_digit_000").addEventListener("click", function () {
        currentInput += "000";
        updateDisplay();
    });
    
    document.getElementById("btn_op_sqrt").addEventListener("click", function () {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    });
    
    document.getElementById("btn_op_square").addEventListener("click", function () {
        currentInput = (parseFloat(currentInput) ** 2).toString();
        updateDisplay();
    });
    
    document.getElementById("btn_op_cube").addEventListener("click", function () {
        currentInput = (parseFloat(currentInput) ** 3).toString();
        updateDisplay();
    });
    
    document.getElementById("btn_op_fact").addEventListener("click", function () {
        let num = parseInt(currentInput);
        let fact = 1;
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        currentInput = fact.toString();
        updateDisplay();
    });
    
    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });
    
    document.getElementById("output-theme-toggle").addEventListener("click", function () {
        result.classList.remove(...outputThemes);
        currentOutputTheme = (currentOutputTheme + 1) % outputThemes.length;
        result.classList.add(outputThemes[currentOutputTheme]);
    });
    
    document.querySelectorAll(".my-btn").forEach(button => {
        button.addEventListener("click", function () {
            let value = this.textContent;
            if (!isNaN(value) || value === ".") {
                if (currentInput === "0" || isNewInput) {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                isNewInput = false;
                updateDisplay();
            } else if (["+", "-", "x", "/"].includes(value)) {
                if (storedValue === null) {
                    storedValue = parseFloat(currentInput);
                } else if (pendingOperation) {
                    storedValue = calculate(storedValue, parseFloat(currentInput), pendingOperation);
                    currentInput = storedValue.toString();
                    updateDisplay();
                }
                pendingOperation = value;
                isNewInput = true;
            }
        });
    });

    document.getElementById("btn_op_equal").addEventListener("click", function () {
        if (storedValue !== null && pendingOperation) {
            previousOperation.textContent = `${storedValue} ${pendingOperation} ${currentInput} =`;
            currentInput = calculate(storedValue, parseFloat(currentInput), pendingOperation).toString();
            storedValue = null;
            pendingOperation = null;
            isNewInput = true;
            updateDisplay();
        }
    });
    
    function calculate(a, b, operation) {
        switch (operation) {
            case "+": return a + b;
            case "-": return a - b;
            case "x": return a * b;
            case "/": return a / b;
            default: return b;
        }
    }
});