"use strict";

import React from 'react';

const KeyPad = (props) => {
  return (
    <div>
      <section>
        <div>
          <button onClick={() => { props.onClick("1"); }}><span>1</span></button>
          <button onClick={() => { props.onClick("2"); }}><span>2</span></button>
          <button onClick={() => { props.onClick("3"); }}><span>3</span></button>
          <button onClick={() => { props.onClick("+"); }}><span>+</span></button>
        </div>
        <div>
          <button onClick={() => { props.onClick("4"); }}><span>4</span></button>
          <button onClick={() => { props.onClick("5"); }}><span>5</span></button>
          <button onClick={() => { props.onClick("6"); }}><span>6</span></button>
          <button onClick={() => { props.onClick("-"); }}><span>-</span></button>
        </div>
        <div>
          <button onClick={() => { props.onClick("7"); }}><span>7</span></button>
          <button onClick={() => { props.onClick("8"); }}><span>8</span></button>
          <button onClick={() => { props.onClick("9"); }}><span>9</span></button>
          <button onClick={() => { props.onClick("*"); }}><span>*</span></button>
        </div>
        <div>
          <button onClick={() => { props.onClick("clear"); }}><span>clear</span></button>
          <button onClick={() => { props.onClick("0"); }}><span>0</span></button>
          <button onClick={() => { props.onClick("delete"); }}><span>&larr;</span></button>
          <button onClick={() => { props.onClick("/"); }}><span>/</span></button>
        </div>
      </section>
      <section id="evalBtn">
        <button onClick={() => { props.onSubmit(); }}>
          <span>=</span></button>
      </section>
    </div>
  );
}

export default KeyPad;