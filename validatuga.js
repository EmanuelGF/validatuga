const Validatuga = {

  //Validações comuns
  comuns: {
    valEmail: function (email) {
        const padrao = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})$/ //regex
        return padrao.test(email.trim());
    },
    
    soLetras: function (input) {
        const padrao = /^[a-zA-Z]*$/
        return padrao.test(input.trim())
    }
    
  },

  /**
   * Validações de dados de Portugal como numeros
   * de telefone, CC, telemovel, NIF etc... 
   */
  valPT: {
    telefoneFixo: function () {
        return null
    },
    telemovel: function () {
        return null
    },
    telemovelVF: function () {
        return null
    },
    telemovelMEO: function () {
        return null
    },
    codPostalVal: function () {
        return null
    },
    codPostalNome: function () {
        return null
    },
    ccVal: function () {
        return null
    },
    nif: function () {
        return null
    },
    nss: function () {
        return null
    },
  }
  


};

module.exports = Validatuga;