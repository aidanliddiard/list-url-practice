import { states } from '../states-data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const state = findById(params.get('id'), states);

const name = document.getElementById('name');
name.textContent = state.name;
