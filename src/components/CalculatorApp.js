import React from 'react';
import '../css/index.css';
import FinalResult from './FinalResult';
import KeyPad from './KeyPad';
// Components
class CalculatorApp extends React.Component {

    render() {
        // CalculatorContainer passes the props to Calculator app
        // that are required by <FinalResult /> and <KeyPad />
        return (
            <fieldset>
                <FinalResult inputExpression={this.props.inputExpression} />
                <KeyPad onClick={this.props.onClick}
                    onSubmit={() => { this.props.onSubmit(); }} />
            </fieldset>
        );
    }
}

export default CalculatorApp;