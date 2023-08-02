const form = document.querySelector('.login-form');
form.addEventListener('submit', onBtnClick);
function onBtnClick(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert('All fields must be filled');
    } else {
        const user = {
            email.email.value,
            password: password.value,
        };
        console.log(user);
        form.reset();
    }
}
