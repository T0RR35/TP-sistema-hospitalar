// Lógica para abrir e fechar o modal de cadastro de profissionais
document.addEventListener('DOMContentLoaded', function () {
    const btnNovoProfissional = document.getElementById('btn-novo-profissional');
    const modalBackdrop = document.getElementById('modal-cadastro-profissional');
    const btnFecharModal = document.getElementById('btn-fechar-modal-profissional');
    const btnCancelarModal = document.getElementById('btn-cancelar-modal-profissional');

    // Abre o modal ao clicar no botão "Novo Profissional"
    if (btnNovoProfissional) {
        btnNovoProfissional.addEventListener('click', function () {
            if (modalBackdrop) {
                modalBackdrop.classList.add('aberto');
            }
        });
    }

    // Função para fechar o modal
    function fecharModal() {
        if (modalBackdrop) {
            modalBackdrop.classList.remove('aberto');
        }
    }

    // Fecha o modal ao clicar no botão "X"
    if (btnFecharModal) {
        btnFecharModal.addEventListener('click', fecharModal);
    }

    // Fecha o modal ao clicar no botão "Cancelar"
    if (btnCancelarModal) {
        btnCancelarModal.addEventListener('click', fecharModal);
    }

    // Fecha o modal ao clicar fora do conteúdo (no backdrop)
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', function (event) {
            if (event.target === modalBackdrop) {
                fecharModal();
            }
        });
    }

    // Fecha o modal ao pressionar a tecla ESC
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            fecharModal();
        }
    });
});