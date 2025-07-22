

document.addEventListener('DOMContentLoaded', function() {
    const botaoTema = document.getElementById("tema") || document.getElementById("botao-tema");
    const body = document.body;
    
    let escuro = localStorage.getItem('temaEscuro') === 'true';
    
    aplicarTema(escuro);
    
    if (botaoTema) {
        botaoTema.addEventListener("click", alternarTema);
    }
    
    function alternarTema() {
        escuro = !escuro;
        aplicarTema(escuro);
        
        localStorage.setItem('temaEscuro', escuro);
    }
    
    function aplicarTema(escuro) {
        if (escuro) {
            body.classList.add("escuro");
            body.classList.remove("light");
        } else {
            body.classList.add("light");
            body.classList.remove("escuro");
        }
        
        const botao = document.getElementById("tema") || document.getElementById("botao-tema");
        if (botao) {
            botao.textContent = escuro ? "Modo claro" : "Modo escuro";
        }
    }
});