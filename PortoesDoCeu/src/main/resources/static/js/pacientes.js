// Lógica para abrir e fechar o modal de cadastro de pacientes
document.addEventListener('DOMContentLoaded', function () {
    const btnNovoPaciente = document.getElementById('btn-novo-paciente');
    const modalBackdrop = document.getElementById('modal-cadastro-paciente');
    const btnFecharModal = document.getElementById('btn-fechar-modal');
    const btnCancelarModal = document.getElementById('btn-cancelar-modal');

    // Abre o modal ao clicar no botão "Novo Paciente"
    if (btnNovoPaciente) {
        btnNovoPaciente.addEventListener('click', function () {
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