document.getElementById('sign-up-form').addEventListener('submit', (event) => {
    event.preventDefault()
   
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderColor = 'red';
        document.getElementById('error').innerHTML = 'password do not match'
    } 
})