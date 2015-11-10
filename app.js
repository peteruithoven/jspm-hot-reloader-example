// using persistant state, not reloaded
import state from './state.js';

// this file will reload, try changing logic below
const downButton = document.getElementById('down');
const countDisplay = document.getElementById('count');
const upButton = document.getElementById('up');

render();
downButton.onclick = function() {
	state.count -= 1;
	render();
}
upButton.onclick = function() {
	state.count += 1;
	render();
}

function render() {
	countDisplay.innerHTML = state.count;
}
