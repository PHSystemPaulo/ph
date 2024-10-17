document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome && email) {
        alert(`Nome: ${nome}\nEmail: ${email}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
});
