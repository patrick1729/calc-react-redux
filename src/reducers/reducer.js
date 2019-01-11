export const evaluateResult = (state = '0', action) => {
    let newState = action.text;
    switch (action.type) {
        case 'EVALUATE':
            // Evaluate the final expression and return the result to store
            return eval(newState).toString();
        case 'DISPLAY':
            // Save and display the text of the action to store 
            return newState;
        default:
            // return the old state as is for any undefined case
            return state;
    }
};
