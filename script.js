/* --- Estilos Gerais --- */

/* Aplica estilos base para todo o corpo da página */
body {
    font-family: Arial, sans-serif; /* Define a família de fontes padrão */
    background-color: #f8f9fa;      /* Cor de fundo cinza claro para a página */
    color: #333;                   /* Cor padrão do texto */
    margin: 0;                      /* Remove a margem padrão do navegador */
    padding: 0;                     /* Remove o preenchimento padrão do navegador */
}

/* --- Layout Principal --- */

/* Estiliza o contêiner principal que envolve o conteúdo */
.container {
    max-width: 800px;         /* Define a largura máxima do contêiner */
    margin: 30px auto;        /* Centraliza o contêiner na página (30px de margem em cima/embaixo, auto nas laterais) */
    background-color: #ffffff;/* Fundo branco para o contêiner */
    padding: 20px;            /* Espaçamento interno para não colar o conteúdo nas bordas */
    border-radius: 8px;       /* Bordas arredondadas */
    box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Sombra suave para dar um efeito de elevação */
}

/* Estilo para o título principal (H1) */
h1 {
    color: #2c3e50;    /* Cor de texto mais escura para o título */
    text-align: center;/* Centraliza o texto do título */
}

/* --- Formulário --- */

/* Estiliza o formulário, usando Flexbox para alinhar os campos */
form {
    display: flex;         /* Ativa o layout Flexbox */
    flex-wrap: wrap;       /* Permite que os itens quebrem para a próxima linha se não houver espaço */
    gap: 10px;             /* Espaçamento de 10px entre os campos do formulário */
    justify-content: center; /* Centraliza os campos horizontalmente */
    margin-bottom: 20px;   /* Adiciona uma margem inferior para separar o formulário da tabela */
}

/* Estilo geral para todos os campos e botões, garantindo um tamanho de fonte consistente */
input, select, button, label {
    font-size: 16px;
}

/* Estilo específico para os campos de texto, número e o seletor */
input[type="text"], input[type="number"], select {
    padding: 8px;         /* Espaçamento interno dos campos */
    width: 200px;         /* Largura fixa */
    border: 1px solid #ccc; /* Borda cinza claro */
    border-radius: 4px;   /* Bordas levemente arredondadas */
}

/* --- Botões --- */

/* Estilo do botão de submissão do formulário */
button {
    padding: 8px 16px;          /* Espaçamento interno (vertical e horizontal) */
    background-color: #e67e22;  /* Cor de fundo laranja */
    color: white;               /* Cor do texto branca */
    border: none;               /* Remove a borda padrão */
    border-radius: 4px;         /* Bordas arredondadas */
    cursor: pointer;            /* Muda o cursor para uma "mãozinha" ao passar por cima */
}

/* Efeito visual para o botão quando o mouse está sobre ele (hover) */
button:hover {
    background-color: #d35400; /* Escurece o tom de laranja */
}

/* --- Tabela --- */

/* Estilos para a tabela de doações */
table {
    width: 100%;                  /* Faz a tabela ocupar 100% da largura do contêiner */
    border-collapse: collapse;    /* Remove o espaçamento entre as bordas das células */
    text-align: center;           /* Centraliza o texto em todas as células */
}

/* Estilo para as células do cabeçalho da tabela (<th>) */
th {
    background-color: #ecf0f1; /* Cor de fundo cinza claro para o cabeçalho */
}

/* Estilo aplicado tanto às células do cabeçalho (th) quanto às células de dados (td) */
th, td {
    padding: 10px;           /* Espaçamento interno das células */
    border: 1px solid #ccc;  /* Borda cinza para criar as linhas da grade */
}
