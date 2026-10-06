// Lógica para abrir e fechar o modal de cadastro de profissionais
document.addEventListener('DOMContentLoaded', function () {
    const btnNovoProfissional = document.getElementById('btn-novo-profissional');
    const modalBackdrop = document.getElementById('modal-cadastro-profissional');
    const btnFecharModal = document.getElementById('btn-fechar-modal-profissional');
    const btnCancelarModal = document.getElementById('btn-cancelar-modal-profissional');
    
    const btnNovaConsulta = document.getElementById('btn-nova-consulta');
    const modalBackdropC = document.getElementById('modal-cadastro-consulta');
    const btnFecharModalC = document.getElementById('btn-fechar-modal-consulta');
    const btnCancelarModalC = document.getElementById('btn-cancelar-modal-consulta');
    

    // Abre o modal de cadastro de consulta ao clicar no botão "Nova Consulta"
    if (btnNovaConsulta) {
        btnNovaConsulta.addEventListener('click', function () {
            if (modalBackdropC) {
                modalBackdropC.classList.add('aberto');
            }
        });
    }
        // Função para fechar o modal
    function fecharModal() {
        if (modalBackdropC) {
            modalBackdropC.classList.remove('aberto');
        }
    }

    // Fecha o modal ao clicar no botão "X"
    if (btnFecharModalC) {
        btnFecharModalC.addEventListener('click', fecharModal);
    }

    // Fecha o modal ao clicar no botão "Cancelar"
    if (btnCancelarModalC) {
        btnCancelarModalC.addEventListener('click', fecharModal);
    }

    // Fecha o modal ao clicar fora do conteúdo (no backdrop)
    if (modalBackdropC) {
        modalBackdropC.addEventListener('click', function (event) {
            if (event.target === modalBackdropC) {
                fecharModal();
            }
        });
    }

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