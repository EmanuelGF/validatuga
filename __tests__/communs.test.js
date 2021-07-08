//testes para validações communs.

const vt = require('../validatuga.js')
const {emailsInvalidos, emailsValidos} = require('../testData')

describe('Testa todas as funções de validações comuns', ()=> {
    

    describe('Testa funnção valEmail', ()=> {
        test('- Emails válidos retornam true', ()=> {
            //arrange
            const listaEmails = emailsValidos
            const resultadoEsperado = true
            //act
            listaEmails.forEach(email => {
                //console.log('email: ' + email)
                const resultadoActual = vt.comuns.valEmail(email)
                //assertions
                expect(resultadoActual).toBe(resultadoEsperado)
            })
        })
    
        test('- Emails Inválidos retornam false', ()=> {
            //arrange
            const listaEmails = emailsInvalidos
            const resultadoEsperado = false
            //act
            listaEmails.forEach(email => {
                const resultadoActual = vt.comuns.valEmail(email)
                //assertions
                expect(resultadoActual).toBe(resultadoEsperado)
            })
        })
    })

    describe('Testa função soLetras', ()=> {
        test('- Só caracteres a-z e A-Z retornam true', ()=> {
            //arrange
            const listaInputs = ["asdfb", "LASKD", "akfjFOIGJ"]
            const resultadoEsperado = true
            //act
            listaInputs.forEach(input => {
                const resultadoActual = vt.comuns.soLetras(input)
                //assertions
                expect(resultadoActual).toBe(resultadoEsperado)
            })
        })
    })
})

describe('Testa todas as validações PT', ()=> {

    describe('Testa função telefoneFixo', ()=> {

        test('Só contem numeros.', ()=> {
            //arrange
            const tlfFixo = "289000000"
            const resultadoEsperado = true
            //act
            const resultadoActual = vt.valPT.telefoneFixo(tlfFixo)
            //assertions
            expect(resultadoActual).toBe(resultadoEsperado)
        })
        
        test('Contém caracteres ilegais', ()=> {
            //arrange
            const tlfInvalidos = ["258dsf222", " 151 3131 13", "123_12#123"]
            const resultadoEsperado = false
            //act
            tlfInvalidos.forEach(num => {
                const resultadoActual = vt.valPT.telefoneFixo(num)
                //assertions
                expect(resultadoActual).toBe(resultadoEsperado)
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