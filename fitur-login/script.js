document.addEventListener('DOMContentLoaded', () => {
    const loginform = document.getElementById('loginform');
    const submitBtn = document.getElementById('submitBtn');

    loginform.addEventListener('submit', function (e) {
        e.preventDefault();

        // Vissual feedback for users
        submitBtn.innerText = 'verifyng...';
        submitBtn.disabled = true;

        const username = document.getElementById('username').value;

        // Simulate a server request
        setTimeout(() => {
            alert('welcome back, $(username)!');

            // Reset button state
            submitBtn.innerText = 'Sign In';
            submitBtn.disabled = false;

            // Reset form
            loginform.reset();
        }, 1200);
    });
});