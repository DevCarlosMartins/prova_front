document.addEventListener("DOMContentLoaded", () => {

    // Seleção dos elementos do DOM
    const form = document.getElementById("formInscricao");
    const editIndexInput = document.getElementById("editIndex");
    const tabelaInscricoes = document.getElementById("tabelaInscricoes");
    const feedbackDiv = document.getElementById("feedback");

    // LÓGICA DE PRIORIDADE 
    const calcularPrioridade = (idade, participouAntes) => {
        let prioridade;

        if (idade >= 8 && idade <= 12) {
            prioridade = "Alta";
        } else if (idade >= 13 && idade <= 17) {
            prioridade = "Média";
        } else {
            prioridade = "Baixa";
        }

        if (participouAntes) {
            if (prioridade === "Baixa") prioridade = "Média";
            else if (prioridade === "Média") prioridade = "Alta";
        }

        return prioridade;
    };

    // localStorage
    const getInscricoes = () => JSON.parse(localStorage.getItem("inscricoes")) || [];
    const saveInscricoes = (inscricoes) => localStorage.setItem("inscricoes", JSON.stringify(inscricoes));

    // --- FUNÇÃO PARA MOSTRAR FEEDBACK ---
    const mostrarFeedback = (mensagem) => {
        feedbackDiv.textContent = mensagem;
        feedbackDiv.hidden = false;
        setTimeout(() => {
            feedbackDiv.hidden = true;
        }, 3000); // A mensagem some após 3 segundos
    };

    // --- RENDERIZAÇÃO DA TABELA ---
    const renderizarTabela = () => {
        const inscricoes = getInscricoes();
        tabelaInscricoes.innerHTML = ""; // Limpa a tabela antes de renderizar

        inscricoes.forEach((inscricao, index) => {
            const tr = document.createElement("tr");

            // Define a classe da prioridade para estilização
            const prioridadeClass = `priority-${inscricao.prioridade.toLowerCase()}`;

            tr.innerHTML = `
                <td>${inscricao.nome}</td>
                <td>${inscricao.oficina}</td>
                <td>${inscricao.idade}</td>
                <td>${inscricao.participouAntes ? "Sim" : "Não"}</td>
                <td><span class="priority ${prioridadeClass}">${inscricao.prioridade}</span></td>
                <td>
                    <button class="actions-btn edit-btn" data-index="${index}">Editar</button>
                    <button class="actions-btn delete-btn" data-index="${index}">Excluir</button>
                </td>
            `;
            tabelaInscricoes.appendChild(tr);
        });
    };

    // --- LÓGICA DO FORMULÁRIO (CRIAR E ATUALIZAR) ---
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const oficina = document.getElementById("oficina").value;
        const participouAntes = document.getElementById("participouAntes").checked;
        const index = editIndexInput.value;

        const prioridade = calcularPrioridade(idade, participouAntes);
        const inscricoes = getInscricoes();

        const novaInscricao = { nome, idade, oficina, participouAntes, prioridade };

        if (index !== "") {
            // Atualizar
            inscricoes[index] = novaInscricao;
            mostrarFeedback("Inscrição atualizada com sucesso!");
        } else {
            // Criar
            inscricoes.push(novaInscricao);
            mostrarFeedback("Inscrição salva com sucesso!");
        }

        saveInscricoes(inscricoes);
        renderizarTabela();
        form.reset();
        editIndexInput.value = ""; // Limpa o índice de edição
    });

    // --- LÓGICA DOS BOTÕES (EDITAR E EXCLUIR) ---
    tabelaInscricoes.addEventListener("click", (e) => {
        const index = e.target.dataset.index;

        if (e.target.classList.contains("edit-btn")) {
            const inscricoes = getInscricoes();
            const inscricao = inscricoes[index];

            // Preenche o formulário com os dados para edição
            document.getElementById("nome").value = inscricao.nome;
            document.getElementById("idade").value = inscricao.idade;
            document.getElementById("oficina").value = inscricao.oficina;
            document.getElementById("participouAntes").checked = inscricao.participouAntes;
            editIndexInput.value = index;

            window.scrollTo(0, 0); // Rola a página para o topo para ver o formulário
        }

        if (e.target.classList.contains("delete-btn")) {
            const inscricoes = getInscricoes();
            inscricoes.splice(index, 1); // Remove o item
            saveInscricoes(inscricoes);
            renderizarTabela();
            mostrarFeedback("Inscrição removida.");
        }
    });

    // --- INICIALIZAÇÃO ---
    renderizarTabela(); // Renderiza a tabela ao carregar a página
});
