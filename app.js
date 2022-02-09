import { states } from './states-data.js';
import { renderStateImg } from './render.js';

const statesList = document.getElementById('states');

for (let state of states) {
    const div = renderStateImg(state);
    const a = document.createElement('a');
    a.href = `/states/?id=${state.id}`;
    a.append(div);
    statesList.append(a);
}