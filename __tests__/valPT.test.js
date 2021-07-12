//Testes para validações de Portugal
const vt = require("../validatuga.js");
const { indicativosTlfFixoPT } = require("../data");

describe("Testa todas as validações PT", () => {

  describe.only("Testes para a função telefoneFixo()", () => {
    /**
     * Valida números de telefone fixo local
     */

    test("Só contem 9 caracteres", () => {
      //arrange
      const tlfValido = "289456789";
      const tlfInvalido = "1234567899";
      //act
      const resultadoActualValido = vt.PT.telefoneFixo(tlfValido);
      const resultadoActualInvalido = vt.PT.telefoneFixo(tlfInvalido);
      //assertions
      expect(resultadoActualValido).toBe(true);
      expect(resultadoActualInvalido).toBe(false);
    });

    test("Só contém numeros.", () => {
      //arrange
      const tlfFixo = "289456789";
      const tlfInvalidos = ["258dsf222", " 151 3131 13", "123_12#123"];
      //act
      const resultadoActualValido = vt.PT.telefoneFixo(tlfFixo);
      tlfInvalidos.forEach((num) => {
        const resultadoActualInvalidos = vt.PT.telefoneFixo(num);
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
        const resultadoActualInvalido = vt.PT.telefoneFixo(num);
        //assertions
        expect(resultadoActualInvalido).toBe(false);
      });
      ListaDeIndicativos.forEach((i) => {
        i.length <= 2 ? i = i + "1234567" : i = i + "123456";
        const resultadoActualValido = vt.PT.telefoneFixo(i);
        expect(resultadoActualValido).toBe(true);
      });
    });
  });

  describe("Testes para a função telemovel()", () => {
    //Valida números de telemovel PT

    test("Só contem 9 caracteres", () => {
      //arrange
      const tlmValido = "912123123";
      const tlmInvalido = "12312312313";
      //act
      const resultadoActualValido = vt.PT.telemovel(tlmValido);
      const resultadoActualInvalido = vt.PT.telemovel(tlmInvalido);
      //assertions
      expect(resultadoActualValido).toBe(true);
      expect(resultadoActualInvalido).toBe(false);
    });

    test("Só contém numeros.", () => {
      //arrange
      const tlmValido = "912123123";
      const tlmInvalidos = ["958dsf222", " 951 3131 13", "923_12#123"];
      //act
      const resultadoActualValido = vt.PT.telemovel(tlmValido);
      tlmInvalidos.forEach((num) => {
        const resultadoActualInvalidos = vt.PT.telemovel(num);
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
      const resultadoActualValido = vt.PT.telemovel(tlmValido);
      tlmInvalidos.forEach((num) => {
        const resultadoActualInvalido = vt.PT.telemovel(num);
        //assertion
        expect(resultadoActualInvalido).toBe(false);
      });
      //assertion
      expect(resultadoActualValido).toBe(true);
    });
  });
});

//templates:

/* 

test('', ()=> {
    //arrange
    const dados = 
    const resultadoEsperado = 
    //act
    const resultadoActual = 
    //assertions
}) 

*/
