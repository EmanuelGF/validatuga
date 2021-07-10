const d = require("./data");

const Validatuga = {
  //Validações comuns
  Comuns: {
    /**
     * Verifica se é um endereço de email válido.
     * @param {string} email recebe um endereço de email.
     * @returns true se for um email válido.
     */
    valEmail: function (email) {
      const padrao = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})$/; //regex
      return padrao.test(email.trim());
    },

    /**
     * Verifica se o input é composto apenas por caracteres a-z e A-Z.
     * @param {string} input recebe uma cadeia de caracteres.
     * @returns true se o input é composto apenas por caracteres a-z e A-Z.
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
  PT: {
    //WIP

    /**
     * Valida telefone fixo Local.
     * @param {string} num numero de telefone fixo(PT).
     * @returns true se for um numero de telefone fixo local válido.
     */
    telefoneFixo: function (num) {
      //Implementar função e passar testes
      return null;
    },

    /**
     * Valida numero de telemovel.
     * @param {*} num Recebe um numeros de telemovel(PT).
     * @returns true se for um número válido.
     */
    telemovel: function (num) {
      //Implementar função e passar testes
      return null;
    },

    //SEM TESTES

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
  BR: {},

  /**
   * Validações de dados de Angola como numeros
   * de telefone, CC, telemovel, NIF etc...
   */
  ANG: {},
};

module.exports = Validatuga;
