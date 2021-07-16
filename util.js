// Funções utilitárias de apoio a validatuga.js~

/**
 * Valida se uma string só contem numeros.
 * @param {string} str
 * @returns verdadeiro se só contém números.
 */
const soNumeros = (str) => {
  return /^\d+$/.test(str);
};

module.exports = {
  soNumeros,
};
