//Testes para validações de Portugal
const vt = require('../validatuga.js')
const {indicativosTelefoneFixo} = require('../data')

describe('Testa todas as validações PT', ()=> {

    describe('Testa função telefoneFixo', ()=> {
        /**
         * Só contem números.
         * 9 numeros.
         * numeros válidos começam com indicativo especifico.
         */
        test('Só contem numeros.', ()=> {
            //arrange
            const tlfFixo = "289456789"
            const tlfInvalidos = ["258dsf222", " 151 3131 13", "123_12#123"]
            //act
            const resultadoActualValido = vt.valPT.telefoneFixo(tlfFixo)
            tlfInvalidos.forEach(num => {
                const resultadoActualInvalidos = vt.valPT.telefoneFixo(num)
                //assertions
                expect(resultadoActualInvalidos).toBe(false)
            })
            //assertions
            expect(resultadoActualValido).toBe(true)
        })

        test('Só contem 9 caracteres', ()=> {
            //arrange
            const tlfValido = "289456789"
            const tlfInvalido = "1234567899"
            //act
            const resultadoActualValido = vt.valPT.telefoneFixo(tlfValido)
            const resultadoActualInvalido = vt.valPT.telefoneFixo(tlfInvalido)
            //assertions
            expect(resultadoActualValido).toBe(true)
            expect(resultadoActualInvalido).toBe(false)
        })

        test('Começa com um indicativo válido', ()=> {
            //arrange
            const tlfInvalidos = ['123456789', '000555666', '111222333'] 
            const ListaDeIndicativos = indicativosTelefoneFixo.map(item => {return item[1]})
            //act
            tlfInvalidos.forEach(num => {
                const resultadoActualInvalido = vt.valPT.telefoneFixo(num)
                //assertions
                expect(resultadoActualInvalido).toBe(false)
            })
            ListaDeIndicativos.forEach(i => {
                i.length < 2 ? i = i + "1234567" : i = i + "123456";
                const resultadoActualValido = vt.valPT.telefoneFixo(i);
                expect(resultadoActualValido).toBe(true)
            })
        }) 

    })
})


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