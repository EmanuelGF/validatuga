//testes para validações communs.

const vt = require('../validatuga.js')
const {emailsInvalidos, emailsValidos} = require('../testData')

describe('Testa todas as funções de validações Comuns', ()=> {
    

    describe('Testa funnção emailVal', ()=> {
        test('- Emails válidos retornam true', ()=> {
            //arrange
            const listaEmails = emailsValidos
            const resultadoEsperado = true
            //act
            listaEmails.forEach(email => {
                //console.log('email: ' + email)
                const resultadoActual = vt.Comuns.emailVal(email)
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
                const resultadoActual = vt.Comuns.emailVal(email)
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
                const resultadoActual = vt.Comuns.soLetras(input)
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