const operators = ["+", "-", "*", "/"];

// Checks whether the last character is an operator
export const isSuffixAnOperator = (str) => {
    return operators.some((operator) => (str.endsWith(operator)));
};

// Checks whether the last character of input is 0
const isSuffixZero = (input) => {
    return input.charAt(input.length - 1) === '0';
};

// Replaces the last character of the inputString with newCharacter
const replaceCharacter = (inputString, newCharacter) => {
    return inputString.slice(0, inputString.length - 1) + newCharacter;
};

export const validateInput = (input, text) => {
    // To remove the earlier result of '0' and 'Infinity' or any operator
    // when a new text is entered
    if (input === 'Infinity' || (input.length === 1 &&
        (input.charAt(0) === '0' || isSuffixAnOperator(input.charAt(0))))) {
        input = '';
    }
    switch (text) {
        case "delete":
            // Slice the string by one digit if backspace is pressed
            if (input.length === 1) {
                input = '0';
            } else {
                input = input.slice(0, input.length - 1);
            }
            break;
        case "clear": // Clear the input
            input = '0';
            break;
        default:
            // Add the input to expression only if two consecutive operators are
            // not entered but if two operators are entered then replace the 
            // previous operator with the next one.
            if (isSuffixAnOperator(input)) {
                if (isSuffixAnOperator(text)) {
                    return replaceCharacter(input, text);
                }
            } else if (isSuffixZero(input)) {
                // If the input string ends with character for e.g. - '24*0'
                // then replace the 0 with the new 'text' that will be entered
                // to prevent formation of octal numeric string like '24*08' 
                // as eval() considers '08' as octal
                if (isSuffixAnOperator(input.charAt(input.length - 2))) {
                    return replaceCharacter(input, text);
                }
            }
            // Normal execution when simple numerics are entered
            // then append the 'input' with 'text'
            input += text;
    }
    return input;
};