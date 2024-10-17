document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    const messageElement = document.getElementById('message');
    if (result.success) {
        messageElement.style.color = 'green';
        messageElement.innerText = 'Login bem-sucedido!';
    } else {
        messageElement.style.color = 'red';
        messageElement.innerText = 'Email ou senha incorretos!';
    }
});
