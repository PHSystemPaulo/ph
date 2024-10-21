<script>
    // Simulação de dados de login corretos
    const validEmail = "usuario@exemplo.com";
    const validPassword = "123456";

    document.getElementById("login-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o comportamento padrão do formulário

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Validação simples do login
      if (email === validEmail && password === validPassword) {
        // Redireciona para a próxima página ao sucesso
        window.location.href = "proxima-pagina.html";
      } else {
        // Exibe mensagem de erro se a validação falhar
        document.getElementById("error-message").style.display = "block";
      }
    });
  </script>

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
        window.location.href = '/geral.html'; // Redireciona para a próxima página após login
        <a href="geral.html">Página Principal</a>
    } else {
        messageElement.style.color = 'red';
        messageElement.innerText = 'Email ou senha incorretos!';
    }
});
