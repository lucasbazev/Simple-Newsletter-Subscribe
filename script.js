document.querySelector('input[type="submit"]').onsubmit = function (event) {
    event.preventDefault();

    textoConfirmacao();
}

function textoConfirmacao() {
    onst content = document.querySelector('#content')
    .innerHTML = `
        <h1>Sucesso!</h1>
        <p>O cronograma atual da newsletter é <b>todos os dias da semana às 11h da manhã.</b> Nos vemos por lá!</p>
    `
}