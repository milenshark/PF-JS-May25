    function calculator(firstNumber, operator, secondNumber){

        switch (operator){
            case '+':
                console.log((firstNumber+secondNumber).toFixed(2));
                break;
            case '-':
                console.log((firstNumber-secondNumber).toFixed(2));
                break;
            case '/':
                console.log((firstNumber/secondNumber).toFixed(2));
                break;
            case '*':
                console.log((firstNumber*secondNumber).toFixed(2));
                break;
            default:
                console.log("Incorrect operator!");
                break;
        }
    }

    calculator(25.5, '-', 3)