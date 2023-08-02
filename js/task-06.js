const input = document.querySelector("#validation-input");
input.addEventListener('blur', onFocusChange);
function onFocusChange(event) {
    if (event.currentTarget.value.length !== +event.currentTarget.dataset.length) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
}
}