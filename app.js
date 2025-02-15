function pesquisar() {
    console.log(dados);
    console.log('Pesquisando...');
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
        return;
    }
    let resultados = "";
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase())|| dado.tags.toLowerCase().includes(campoPesquisa.toLowerCase())) {
            resultados += `
            <div class="item-resultado">
                <a href="#" target="_blank">
                    <h2>${dado.titulo}</h2>
                </a>
                <p class="descricao-meta">${dado.descricao}</p>
                </p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado.</p>";
    }


    section.innerHTML = resultados;

}

