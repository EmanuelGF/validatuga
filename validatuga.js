"use strict";

const d = require("./data");

//Dados PT
const { indicativosTlfFixoPT, indicativosTelemovel } = require("./data");
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
   * de telefone, CC, telemovel, NIF etc...
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
      return null;
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
      return null;
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
