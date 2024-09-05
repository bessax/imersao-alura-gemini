// console.log(dados);

let section = document.getElementById('resultados-pesquisa');

// for (let i = 0; i < dados.length; i++) {
//     section.innerHTML += `
//         <div class="item-resultado">
//             <a href="#" target="_blank">
//                 <h2>${dados[i].titulo}</h2>
//             </a>
//             <p class="descricao-meta">${dados[i].descricao}</p>
//             </p>
//             <a href=${dados[i].link} target="_blank">Mais informações</a>
//         </div>
//     `;
// }

let resultados="";

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
