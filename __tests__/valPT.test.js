//Testes para validações de Portugal
const vt = require("../validatuga.js");
const { indicativosTlfFixoPT } = require("../data");

describe("Testa todas as validações PT", () => {

  describe("Testa função telefoneFixo", () => {
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
        i.length < 2 ? (i = i + "1234567") : (i = i + "123456");
        const resultadoActualValido = vt.PT.telefoneFixo(i);
        expect(resultadoActualValido).toBe(true);
      });
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
