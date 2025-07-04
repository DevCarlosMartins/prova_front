function calcularImpacto(tipo, quantidade, infantil) {
    let impacto = 0;
    if (tipo === "Camiseta") impacto = 1;
    if (tipo === "Calça") impacto = 2;
    if (tipo === "Agasalho") impacto = 3;
    if (tipo === "Calçado") impacto = 2;
    let total = impacto * quantidade;
    return infantil ? total * 1.5 : total;
}

function salvar(dados) {
    localStorage.setItem("doacoes", JSON.stringify(dados));
}

function carregar() {
    return JSON.parse(localStorage.getItem("doacoes")) || [];
}

function renderizarTabela() {
    const tbody = document.getElementById("tabelaDoacoes");
    tbody.innerHTML = "";
    const doacoes = carregar();
    doacoes.forEach((d, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${d.nome}</td>
            <td>${d.tipo}</td>
            <td>${d.quantidade}</td>
            <td>${d.infantil ? "Sim" : "Não"}</td>
            <td>${d.impacto}</td>
            <td>
                <button onclick="editar(${i})">Editar</button>
                <button onclick="excluir(${i})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById("formDoacao").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipo").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const infantil = document.getElementById("infantil").checked;
    const impacto = calcularImpacto(tipo, quantidade, infantil);
    const doacoes = carregar();
    if (this.dataset.index) {
        doacoes[this.dataset.index] = { nome, tipo, quantidade, infantil, impacto };
        delete this.dataset.index;
    } else {
        doacoes.push({ nome, tipo, quantidade, infantil, impacto });
    }
    salvar(doacoes);
    this.reset();
    renderizarTabela();
});

function editar(index) {
    const doacoes = carregar();
    const d = doacoes[index];
    document.getElementById("nome").value = d.nome;
    document.getElementById("tipo").value = d.tipo;
    document.getElementById("quantidade").value = d.quantidade;
    document.getElementById("infantil").checked = d.infantil;
    document.getElementById("formDoacao").dataset.index = index;
}

function excluir(index) {
    const doacoes = carregar();
    doacoes.splice(index, 1);
    salvar(doacoes);
    renderizarTabela();
}

renderizarTabela();
