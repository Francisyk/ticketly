const ticketLabels = {
    inferior: "Lower Level Seating",
    superior: "Upper Level Seating",
    pista: "General Admission"
};

function mostrarModal(titulo, mensagem) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");

    modalTitle.textContent = titulo;
    modalMessage.textContent = mensagem;
    modal.classList.add("ativo");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("ativo");
}

function comprar() {
    const tipo = document.getElementById('tipo-ingresso').value;
    const quantidade = parseInt(document.getElementById('qtd').value);

    if (!quantidade || quantidade <= 0) {
        mostrarModal(
            "Invalid quantity",
            "Please enter a valid quantity to continue."
        );
        return;
    }

    comprarIngresso(tipo, quantidade);
}

function comprarIngresso(tipo, quantidade) {
    const elementoQtd = document.getElementById(`qtd-${tipo}`);
    const qtdDisponivel = parseInt(elementoQtd.textContent);

    const tipoLabel = ticketLabels[tipo] || tipo;

    if (quantidade > qtdDisponivel) {
        mostrarModal(
            "Tickets unavailable",
            `The selected quantity is not available for ${tipoLabel}.`
        );
        return;
    }

    elementoQtd.textContent = qtdDisponivel - quantidade;

    mostrarModal(
        "Purchase successful!",
        `Your ticket has been secured. Enjoy the show!`
    );

    document.getElementById('qtd').value = "";
}

document.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        fecharModal();
    }
});
