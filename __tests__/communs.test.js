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
            //assertions
            listaEmails.forEach(email => {
                //console.log('email: ' + email)
                const resultadoActual = vt.comuns.valEmail(email)
                expect(resultadoActual).toBe(resultadoEsperado)
            })
        })
    
        test('- Emails Inválidos retornam false', ()=> {
            //arrange
            const listaEmails = emailsInvalidos
            const resultadoEsperado = false
            //act
            //assertions
            listaEmails.forEach(email => {
                const resultadoActual = vt.comuns.valEmail(email)
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
            //assertions
            listaInputs.forEach(input => {
                const resultadoActual = vt.comuns.soLetras(input)
                expect(resultadoActual).toBe(resultadoEsperado)
            })
        })
    })
   
    

})

