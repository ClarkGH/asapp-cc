"use strict";

import React from 'react';
import ReactDOM from 'react-dom';


function tick() {
  const element = (
    <div>
      <div class="split left">
        <h1>About Clark</h1>
        <a href="#" class="button">Read More</a>
      </div>
      <div class="split right">
        <h1>Projects</h1>
        <a href="#" class="button">Read More</a>
      </div>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}