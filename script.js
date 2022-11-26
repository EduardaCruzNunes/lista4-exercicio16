var quantidade = [];
var linhas = 0;
var qtdCaracteres = 0;

linhas = prompt('Digite o números de linhas:');
qtdCaracteres = prompt('Digite número de caracteres:');

const gerarRetangulo = (linhas, qtdCaracteres) => {
    for (let cont = 0; cont < linhas; cont++) {
        for (let i = 0; i < qtdCaracteres; i++) {
            quantidade.push('V');

        }
        console.log(quantidade.join(''), `${cont} \n`);
        quantidade = [];
    }
}
gerarRetangulo(linhas, qtdCaracteres);