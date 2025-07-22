function aplicarClasseResponsiva() {
    const largura = window.innerWidth;
    const produto = document.getElementById('lista');
    const areaProdutos = document.getElementById('areaProdutos');
    if (!areaProdutos) return;

    // Remove todas as classes responsivas
    areaProdutos.classList.remove('desktop', 'mobile', 'tablet');

    // Adiciona a classe conforme o tamanho da tela
    if (largura <= 480) {
        areaProdutos.classList.add('mobile');
        produto.style.width = '80px'; // Ajusta a largura do produto
    } else if (largura <= 780) {
        areaProdutos.classList.add('tablet');
    } else {
        areaProdutos.classList.add('desktop');
    }
}

// Executa a função quando o DOM é completamente carregado
window.addEventListener('DOMContentLoaded', aplicarClasseResponsiva);

// Reaplica a lógica de responsividade quando o tamanho da janela for alterado
window.addEventListener('resize', aplicarClasseResponsiva);
