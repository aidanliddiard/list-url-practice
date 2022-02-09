import { states } from '../states-data.js';
import { findById } from '../utils.js';
import { renderState } from '../render.js';

const params = new URLSearchParams(window.location.search);

const state = findById(params.get('id'), states);
console.log(params.get('id'));
console.log(state);
console.log(window.location.search);


const statesList = document.getElementById('states');

const div = renderState(state);
statesList.append(div);
