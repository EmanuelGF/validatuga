// Funções utilitárias de apoio a validatuga.js

/**
 * Valida se uma string só contem numeros.
 * @param {string} str
 * @returns verdadeiro se só contém números.
 */
const soNumeros = (str) => {
  return /^\d+$/.test(str);
};

/**
 * Cria um sequência de números aleatório com o tamanho fornecido.
 * @param {string} indicativo Números iniciais. string vazia p/defeito.
 * @param {number} tamanho Tamanho do número. 9 é o valor p/defeito.
 * @returns string
 */
const criaSquencia = (indicativo = "", tamanho = 9) => {
  let num = "";
  num += indicativo;
  while (num.length < tamanho) {
    num += Math.floor(Math.random() * 10).toString();
  }
  return num;
};

module.exports = {
  soNumeros,
  criaSquencia,
};
