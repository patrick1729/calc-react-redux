"use strict";

// Action types
import { DISPLAY, EVALUATE } from '../actions/actions';

// Action creator for displaying expression
export const getDisplayAction = (input) => {
  return {
    type: DISPLAY,
    text: input
  }
};

// Action creator for evaluating the expression
export const getEvaluateAction = (input) => {
  return {
    type: EVALUATE,
    text: input
  }
}