import { states } from './states-data.js';
import { renderState } from './utils.js';

const statesList = document.getElementById('states');

for (let state of states) {
    const div = renderState(state);
    statesList.append(div);
}