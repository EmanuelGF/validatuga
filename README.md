# validatuga (WIP)

Biblioteca em Javascript de validações de dados de Portugal como numeros de telefones, Cartão de cidadão, cod-postal etc...
Util para validar dados vindos de formulários.
*Contribuições são mais que bem vindas!*

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
+-- dataPT.js
+-- testData.js

```
NOTAS IMPORTANTES:
- dataPT.js contem os dados especificos para as validações.
- validatuga.js é o ficheiro que contem todas as funções para as validações.
- Jest é a framework usada para testar as funções. É encorajada uma abordagem TDD na construção da biblioteca. 

## Usar nos vossos projetos
Basta copiar os ficheiros:
*validatuga.js* e *dataPT*.js para os vossos projetos e depois importar.

Importar a biblioteca: 
`const vt = require('../validatuga.js')`

# Contribuir

1. Fork do projeto
2. Clonar para a vossa maquina local
3. `npm install`
4. Criar o código para as funçoes no ficheiro validatuga.js correr e passar nos testes correndo `npm test`

*Pff crie um issue para novas funções e testes que ñ estejam presentes.*