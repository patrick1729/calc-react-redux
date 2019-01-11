import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { CalculatorContainer } from './containers/CalculatorContainer';
import { evaluateResult } from './reducers/reducer';


// creates the store on reducer evaluateResult()
const store = createStore(evaluateResult);

const renderCalculator = () => {
    render(
        // Provider to bind the store with the container
        <Provider store={store} >
            <CalculatorContainer />
        </Provider>, document.getElementById('root')
    );
}

// Called when an action is dispatched on the store
// Re-renders the changed component
store.subscribe(() => {
    renderCalculator();
});

// Explicit call to invoke the UI for the first time
renderCalculator();
