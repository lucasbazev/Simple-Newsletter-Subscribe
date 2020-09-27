document.querySelector('button').onclick = function () {
    const content = document.querySelector('#content')
    .innerHTML = `
        <h1>Sucesso!</h1>
        <p>O cronograma atual da newsletter é <b>todos os dias da semana às 11h da manhã.</b> Nos vemos por lá!</p>
    `
}