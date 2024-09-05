function pesquisar() {
    console.log('Pesquisando...');
    let section = document.getElementById('resultados-pesquisa');
    let resultados = "";

    for (let dado of dados) {
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

    section.innerHTML = resultados;



}

