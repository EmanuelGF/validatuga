const Validatuga = {
  //Validações comuns
  comuns: {
    /**
     * Verifica se é um endereço de email válido.
     * @param {string} email
     * @returns {boolean}
     */
    valEmail: function (email) {
      const padrao = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})$/; //regex
      return padrao.test(email.trim());
    },

    /**
     * Verifica se o input é composto apenas por caracteres a-z e A-Z.
     * @param {string} input
     * @returns {boolean}
     */
    soLetras: function (input) {
      const padrao = /^[a-zA-Z]*$/;
      return padrao.test(input.trim());
    },
  },

  /**
   * Validações de dados de Portugal como numeros
   * de telefone, CC, telemovel, NIF etc...
   */
  valPT: {
    /**
     * Valida telefone fixo
     * @param {number} num numero de telefone fixo.
     * @returns {boolean} true se for um numero de telefone fixo valido.
     */
    telefoneFixo: function (num) {
      return null;
    },
    telemovel: function () {
      return null;
    },
    telemovelOperadora: function () {
      return null;
    },
    codPostalVal: function () {
      return null;
    },
    codPostalNome: function () {
      return null;
    },
    ccVal: function () {
      return null;
    },
    nif: function () {
      return null;
    },
    nss: function () {
      return null;
    },
  },

  /**
   * Validações de dados sociais do Brazil como numeros
   * de telefone, CC, telemovel, NIF etc...
   */
  valBR: {},

  /**
   * Validações de dados de Angola como numeros
   * de telefone, CC, telemovel, NIF etc...
   */
  valANG: {},
};

module.exports = Validatuga;
