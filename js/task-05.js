const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', onInputChange);

function onInputChange() {
 !input.value.trim() ? (output.textContent = "Anonymous") : (output.textContent = input.value);
}