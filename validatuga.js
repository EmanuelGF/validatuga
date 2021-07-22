"use strict";

//Dados PT
const {
  indicativosTlfFixoPT,
  indicativosTelemovel,
  validationSets,
} = require("./data");
//Utilitários
const { soNumeros } = require("./util");

const Validatuga = {
  //Validações comuns
  Comuns: {
    /**
     * Verifica se é um endereço de email válido.
     * @param {string} email recebe um endereço de email.
     * @returns true se for um email válido.
     */
    emailVal: function (email) {
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
   * de telefone, CC, telemovel, num etc...
   */
  PT: {
    /**
     * Valida telefone fixo Local.
     * @param {string} num numero de telefone fixo(PT).
     * @returns devolve verdadeiro se for um numero de telefone fixo local válido.
     */
    telefoneFixoVal: function (num) {
      const tamanho = num.length === 9;
      const listaDeIndicativos = indicativosTlfFixoPT.map((i) => {
        return i[1];
      });
      let indicativoValido = false;
      for (let i of listaDeIndicativos) {
        if (num.startsWith(i)) {
          indicativoValido = true;
          break;
        }
      }
      return tamanho && soNumeros(num) && indicativoValido;
    },

    /**
     * Valida numero de telemovel.
     * @param {string} num Recebe um numeros de telemovel(PT).
     * @returns true se for um número válido.
     */
    telemovelVal: function (num) {
      const tamanho = num.length === 9;
      const listaDeIndicativos = indicativosTelemovel.map((i) => {
        return i[1];
      });
      let indicativoValido = false;
      for (let i of listaDeIndicativos) {
        if (num.startsWith(i)) {
          indicativoValido = true;
          break;
        }
      }
      return tamanho && soNumeros(num) && indicativoValido;
    },

    //SEM TESTES
    /**
     * Devolve o nome da operadora do numero fornecido.
     * @param {string} num Recebe um numero de telemovel(PT).
     * @returns nome da operadora (ex. 'meo', 'nos', 'vodafone').
     */
    telemovelOp: function (num) {
      const invalido = false;
      if (this.telemovelVal(num)) {
        for (const arr of indicativosTelemovel) {
          if (num.startsWith(arr[1])) return arr[0];
        }
        return invalido;
      } 
      return invalido;
    },

    /**
     * Valida código postal (PT)
     * @param {string} cp Recebe um codigo postal no seguinte formato: ('8100')
     * @returns true se for um código postal válido.
     */
    codPostalVal: function (cp) {
      const tamanho = cp.length === 4;
      return tamanho && soNumeros(cp);
    },

    /**
     * Devolve nome da região a que o cod. postal representa.(PT)
     * @param {string} cp Recebe um codigo postal no seguinte formato: ('8100')
     * @returns nome da região (ex. 'Faro', 'Lisboa', 'Loulé')
     */
    codPostalArea: function (cp) {
      return null;
    },

    /**
     * Valida o número de cartão de cidadão. (PT)
     * @param {string} num Recebe um número de CC.
     * @returns verdadeiro se for um número válido.
     */
    ccidadaoVal: function (num) {
      return null;
    },

    /**
     * Valida um número de identificação fiscal. (PT)
     * @param {string} num Recebe um número nif.
     * @returns verdadeiro se for um número válido.
     */
    nifVal: function (num) {
      if (soNumeros(num) === false) return false;
      if (num.length !== 9) return false;

      if (
        !validationSets.one.includes(num.substr(0, 1)) &&
        !validationSets.two.includes(num.substr(0, 2))
      ) {
        return false;
      }

      const total =
        num[0] * 9 +
        num[1] * 8 +
        num[2] * 7 +
        num[3] * 6 +
        num[4] * 5 +
        num[5] * 4 +
        num[6] * 3 +
        num[7] * 2;
      const modulo11 = Number(total) % 11;

      const checkDigit = modulo11 < 2 ? 0 : 11 - modulo11;

      return checkDigit === Number(num[8]);
    },

    /**
     * Valida um número do sistema nacional de saúde. (PT)
     * @param {string} num Recebe um número niss.
     * @returns verdadeiro se for um número válido.
     */
    nissVal: function (num) {
      return null;
    },

    /**
     * Valida um número de carta de condução. (PT)
     * @param {string} num Recebe um número carta de condução.
     * @returns verdadeiro se for um número válido.
     */
    cConducaoVal: function (num) {
      return null;
    },

    //Adicionar mais validações abaixo.
  },

  /**
   * Validações de dados sociais do Brazil como numeros
   * de telefone, CC, telemovel, num etc...
   */
  BR: {},

  /**
   * Validações de dados de Angola como numeros
   * de telefone, CC, telemovel, num etc...
   */
  ANG: {},
};

module.exports = Validatuga;
