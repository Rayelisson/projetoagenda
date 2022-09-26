const form = document.getElementById("form-contato");
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
});

function adicionaLinha() {
    const inputNomecliente= document.getElementById('nome-cliente');
    const inputTelefone = document.getElementById('tel-contato');
    
    let linha = '<tr>';
    linha += `<td>${inputNomecliente.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomecliente.value = '';
    inputTelefone.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


