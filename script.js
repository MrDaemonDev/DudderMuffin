// Captura o formulário de contato e impede o envio padrão
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Obrigado por entrar em contato! Responderemos em breve.");
    
    // Limpa os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
// Alterna o modo escuro ao clicar no botão
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Altera o texto do botão com base no estado
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "Modo Claro";
    } else {
        this.textContent = "Modo Escuro";
    }
});
