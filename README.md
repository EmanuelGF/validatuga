# validatuga (WIP - A trabalhar para a primeira release)

[![Testes Actions Status](https://github.com/EmanuelGF/validatuga/workflows/validatugaCI/badge.svg)](https://github.com/EmanuelGF/validatuga/actions)

Biblioteca em Javascript de validações de dados sociais de Paises de Lingua Portuguesa como números de telefones, Cartão de cidadão, cod-postal etc...
Útil para validar dados vindos de formulários.

**Contribuições são mais que bem vindas!**

### Objetivo: 
- Criar uma extensa biblioteca de validações de dados sociais especificos a cada país de lingua Portuguesa.


## Instalação

`npm install`

## Correr testes

`npm test`

## Estrutura

```
.
+-- __tests__
|   +-- testes.test.js
+-- validatuga.js
+-- data.js
+-- testData.js

```
NOTAS IMPORTANTES:
- data.js contém os recursos para as validações.
- validatuga.js é o ficheiro que contem todas as funções para as validações.
- Jest é a framework usada para testar as funções. **É encorajada uma abordagem TDD na construção da biblioteca.**
- util.js contém funções de utilitárias de validatuga.js.

## Usar nos vossos projetos
- Basta copiar os ficheiros (`validatuga.js`, `data.js` e `util.js`) para o mesmo sitio no vosso projeto e depois importar:
- Importar a biblioteca: 
ex. `const vt = require('./validatuga.js')`

# Contribuir

1. Fork do projeto
2. Clonar para a vossa maquina local
3. `npm install`
4. Criar o código para as funçoes no ficheiro validatuga.js correr e passar nos testes correndo `npm test`

*Leia o guia de contribuições no ficheiro CONTRIBUTING.md*

*Pff crie um issue para novas funções e testes que ñ estejam presentes.*

Se esta é a sua primeira vez a contribuir estou disponivél para qualquer explicação. Iniciantes bem vindos!! 🎉👋

