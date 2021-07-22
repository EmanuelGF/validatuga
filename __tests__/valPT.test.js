//Testes para validações de Portugal
const vt = require("../validatuga.js");
const { indicativosTlfFixoPT, codigosPostal } = require("../data");
const { criaSquencia } = require("../util.js");

describe("Testa todas as validações PT", () => {
  describe("Testes para a função telefoneFixoVal()", () => {
    /**
     * Valida números de telefone fixo local
     */

    test("Só contem 9 caracteres", () => {
      //arrange
      const tlfValido = "289456789";
      const tlfInvalido = "1234567899";
      //act
      const resultadoActualValido = vt.PT.telefoneFixoVal(tlfValido);
      const resultadoActualInvalido = vt.PT.telefoneFixoVal(tlfInvalido);
      //assertions
      expect(resultadoActualValido).toBe(true);
      expect(resultadoActualInvalido).toBe(false);
    });

    test("Só contém numeros.", () => {
      //arrange
      const tlfFixo = "289456789";
      const tlfInvalidos = ["258dsf222", " 151 3131 13", "123_12#123"];
      //act
      const resultadoActualValido = vt.PT.telefoneFixoVal(tlfFixo);
      tlfInvalidos.forEach((num) => {
        const resultadoActualInvalidos = vt.PT.telefoneFixoVal(num);
        //assertions
        expect(resultadoActualInvalidos).toBe(false);
      });
      //assertions
      expect(resultadoActualValido).toBe(true);
    });

    test("Começa com um indicativo de área válido", () => {
      //arrange
      const tlfInvalidos = ["123456789", "000555666", "111222333"];
      const ListaDeIndicativos = indicativosTlfFixoPT.map((item) => {
        return item[1];
      });
      //act
      tlfInvalidos.forEach((num) => {
        const resultadoActualInvalido = vt.PT.telefoneFixoVal(num);
        //assertions
        expect(resultadoActualInvalido).toBe(false);
      });
      ListaDeIndicativos.forEach((i) => {
        i.length <= 2 ? (i = i + "1234567") : (i = i + "123456");
        const resultadoActualValido = vt.PT.telefoneFixoVal(i);
        expect(resultadoActualValido).toBe(true);
      });
    });
  });

  describe("Testes para a função telemovelVal()", () => {
    //Valida números de telemovel PT

    test("Só contem 9 caracteres", () => {
      //arrange
      const tlmValido = "912123123";
      const tlmInvalido = "12312312313";
      //act
      const resultadoActualValido = vt.PT.telemovelVal(tlmValido);
      const resultadoActualInvalido = vt.PT.telemovelVal(tlmInvalido);
      //assertions
      expect(resultadoActualValido).toBe(true);
      expect(resultadoActualInvalido).toBe(false);
    });

    test("Só contém numeros.", () => {
      //arrange
      const tlmValido = "912123123";
      const tlmInvalidos = ["958dsf222", " 951 3131 13", "923_12#123"];
      //act
      const resultadoActualValido = vt.PT.telemovelVal(tlmValido);
      tlmInvalidos.forEach((num) => {
        const resultadoActualInvalidos = vt.PT.telemovelVal(num);
        //assertions
        expect(resultadoActualInvalidos).toBe(false);
      });
      //assertions
      expect(resultadoActualValido).toBe(true);
    });

    test("Números começam por 9", () => {
      //arrange
      const tlmValido = "912123123";
      const tlmInvalidos = ["112123123", "212123123", "712123123", "412123123"];
      //act
      const resultadoActualValido = vt.PT.telemovelVal(tlmValido);
      tlmInvalidos.forEach((num) => {
        const resultadoActualInvalido = vt.PT.telemovelVal(num);
        //assertion
        expect(resultadoActualInvalido).toBe(false);
      });
      //assertion
      expect(resultadoActualValido).toBe(true);
    });
  });

  describe("Testes para a função codPostVal()", () => {
    /**
     * Valida códigos postais PT
     */

    test("Só contem 4 caracteres", () => {
      //arrange
      const cpValido = "2894";
      const cpInvalido = "12344";
      //act
      const resultadoActualValido = vt.PT.codPostalVal(cpValido);
      const resultadoActualInvalido = vt.PT.codPostalVal(cpInvalido);
      //assertions
      expect(resultadoActualValido).toBe(true);
      expect(resultadoActualInvalido).toBe(false);
    });

    test("Só contém numeros.", () => {
      //arrange
      const cpValido = "2894";
      const cpInvalidos = ["258d", "15 1", "3_1#"];
      //act
      const resultadoActualValido = vt.PT.codPostalVal(cpValido);
      cpInvalidos.forEach((cp) => {
        const resultadoActualInvalidos = vt.PT.codPostalVal(cp);
        //assertions
        expect(resultadoActualInvalidos).toBe(false);
      });
      //assertions
      expect(resultadoActualValido).toBe(true);
    });

    test("Começa com codigo válido.", () => {
      //arrange
      const resultadoEsperado = true;
      // Os codigos de postal são aqui validados com base nos primeiros 2 números o que pode estar incorreto
      // visto que existe um lista de 4 números especificos a cada área.
      const listaCodigosValidos = codigosPostal.map((i) => {
        return criaSquencia(i[1], 4);
      });

      //act
      listaCodigosValidos.forEach((cod) => {
        const resultadoActual = vt.PT.codPostalVal(cod);
        //assertions
        expect(resultadoActual).toBe(resultadoEsperado);
      });
    });

    test("Devolve falso quando não começa com um cod válido.", () => {
      //arrange
      const codInvalido = "3999";
      const resultadoEsperado = false;
      //act
      const resultadoActual = vt.PT.codPostalVal(codInvalido);
      //assertions
      expect(resultadoActual).toBe(resultadoEsperado);
    });
  });

  describe("Testes para a função nifVal()", () => {
    test("Contém apenas 9 caracteres.", () => {
      //arrange
      const nifValido = "999999990";
      const nifsInvalidos = ["999", "9999999999"];
      //act
      const resultadoActualValido = vt.PT.nifVal(nifValido);
      nifsInvalidos.forEach((nif) => {
        const resultadoActualInvalido = vt.PT.nifVal(nif);
        //assertions
        expect(resultadoActualInvalido).toBe(false);
      });
      //assertions
      expect(resultadoActualValido).toBe(true);
    });

    test("Só contem números", () => {
      //arrange
      const nifValido = "999999990";
      const nifsInvalidos = ["999sdfa", "99999 9990", "safsdafds", "99999999 "];
      //act
      const resultadoActualValido = vt.PT.nifVal(nifValido);
      nifsInvalidos.forEach((nif) => {
        const resultadoActualInvalido = vt.PT.nifVal(nif);
        //assertions
        expect(resultadoActualInvalido).toBe(false);
      });
      //assertions
      expect(resultadoActualValido).toBe(true);
    });

    test("Valida com base no número de controlo.", () => {
      //arrange
      const nifsValidos = ["999999990", "501442600", "505305500"];
      const nifInvalido = "999999999";
      //act
      const resultadoActualInvalido = vt.PT.nifVal(nifInvalido);
      nifsValidos.forEach((nif) => {
        const resultadoActualValido = vt.PT.nifVal(nif);
        //assertions
        expect(resultadoActualValido).toBe(true);
      });
      //assertions
      expect(resultadoActualInvalido).toBe(false);
    });
  });

  describe("Testes para a função telemovelOp()", () => {
    test("Devolve operadoras correspondentes.", () => {
      //arrange
      const numsValidosMeo = [
        "961231231",
        "924012312",
        "924412312",
        "925123123",
        "927123123",
      ];
      const numValidoNos = "931231234";
      const numsValidosVodafone = ["911234123", "921123123"];
      const resultadoEsperadoMeo = "MEO";
      const resultadoEsperadoNos = "NOS";
      const resultadoEsperadoVodafone = "Vodafone";

      //act
      numsValidosMeo.forEach((num) => {
        const resultadoActual = vt.PT.telemovelOp(num);
        //assertions
        expect(resultadoActual).toBe(resultadoEsperadoMeo);
      });

      numsValidosVodafone.forEach((num) => {
        const resultadoActual = vt.PT.telemovelOp(num);
        //assertions
        expect(resultadoActual).toBe(resultadoEsperadoVodafone);
      });

      const resultadoActual = vt.PT.telemovelOp(numValidoNos);
      //assertions
      expect(resultadoActual).toBe(resultadoEsperadoNos);
    });

    test('Devolve falso quando recebe um número inválido"', () => {
      //arrange
      const numInvalido = "123123123";
      const resultadoEsperado = false;
      //act
      const resultadoActual = vt.PT.telemovelOp(numInvalido);
      //assertions
      expect(resultadoActual).toBe(false);
    });
  });

  describe("Testes para a função codPostalArea()", () => {
    test("Devolve area postal correspondente.", () => {
      //arrange
      // Os codigos de postal são aqui validados com base nos primeiros 2 números o que pode estar incorreto
      // visto que existe um lista de 4 números especificos a cada área.
      const listaCodigosValidos = [ "8100", "8125"]
      const resultadoEsperado = "Loulé"
      //act
      listaCodigosValidos.forEach(cod => {
        const resultadoActual = vt.PT.codPostalArea(cod)
        //assertions
        expect(resultadoActual).toBe(resultadoEsperado)
      })
    });

    test("Cod postal inválido devolve falso", () => {
      //arrange
      // Os codigos de postal são aqui validados com base nos primeiros 2 números o que pode estar incorreto
      // visto que existe um lista de 4 números especificos a cada área.
      const listaCodigosValidos = [ "3999", "7999"]
      const resultadoEsperado = false
      //act
      listaCodigosValidos.forEach(cod => {
        const resultadoActual = vt.PT.codPostalArea(cod)
        //assertions
        expect(resultadoActual).toBe(resultadoEsperado)
      })
    });

  });
});

//templates:

/* 



*/
