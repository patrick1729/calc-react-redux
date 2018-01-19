"use strict";

import React from 'react';
// CSS
import styles from '../css/index.css';

// Components
import FinalResult from './FinalResult';
import KeyPad from './KeyPad';

// Action creators
import { getDisplayAction } from '../actionCreators/actionCreator';
import { getEvaluateAction } from '../actionCreators/actionCreator';


class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
  }

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