# What to Buy

**Linguagem:** JavaScript  
**Data:** Julho 2026  
**Status:** ✅ Concluído  
**Publicado em:** [LinkedIn](https://www.linkedin.com/in/heitor-terto/)

---

## 📋 Descrição do Desafio

Desenvolver uma função que analisa uma lista de produtos com seus preços e um orçamento por item, identificando quais itens estão dentro do orçamento, calculando o custo total dos acessíveis e contando quantos itens estão fora do alcance financeiro.

---

## 🎯 Objetivo

- ✅ Implementar a função `analyzeBudget()` que processa três argumentos
- ✅ Filtrar itens acessíveis dentro do orçamento
- ✅ Calcular o orçamento total necessário para comprar todos os itens acessíveis
- ✅ Contar a quantidade de itens que excedem o orçamento
- ✅ Praticar manipulação de arrays e lógica condicional em JavaScript
- ✅ Trabalhar com template literals para formatação de saída

---

## 💻 Tecnologias Utilizadas

- **Linguagem:** JavaScript (ES6+)
- **Métodos:** forEach(), push(), console.log()
- **Conceitos:** Arrow functions, Template literals, Condicionais, Array manipulation
- **Runtime:** Node.js (para execução em terminal)

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado (versão 12 ou superior)

### Instalação
```bash
# Verificar se Node.js está instalado
node --version
```

### Uso
```bash
# Executar o arquivo diretamente
node WhatToBuy.js
```

**Exemplo de interação:**
```javascript
let prices = [10, 20, 5, 15]
let items = ["Notebook", " Pen", " Eraser", " Bag"]
let budget = 10

analyzeBudget(prices, items, budget)

// Output:
// Affordable items: Notebook, Eraser
// Total budget needed: 15
// Items out of budget: 2
```

---

## 📚 O que Aprendi

Este projeto foi excelente para consolidar conceitos fundamentais de JavaScript:

- ✅ **forEach() com Arrow Functions** - Iterar sobre arrays com sintaxe moderna
- ✅ **Template Literals** - Interpolação de variáveis com backticks
- ✅ **Array Methods** - push() para adicionar elementos
- ✅ **Condicionais (if/else)** - Lógica de decisão baseada em comparações
- ✅ **Manipulação de Dados** - Acúmulo de valores e contagem
- ✅ **Preservação de Formatação** - Manter espaços e caracteres originais dos dados

**Desafios enfrentados:**
- Entender a diferença entre forEach e outros métodos de iteração
- Formatar corretamente a saída com template literals
- Preservar espaços nos nomes dos itens conforme solicitado

---

## 📁 Estrutura do Projeto

```
what-to-buy/
├── WhatToBuy.js                 # Código-fonte da solução
├── README.md                     # Este arquivo
└── assets/                       # Screenshots e exemplos
    └── exemplo-output.png
```

---

## 🎨 Funcionalidades Principais

- 🔹 **Análise de Orçamento** - Processa preços e nomes de itens
- 🔹 **Filtragem de Acessibilidade** - Identifica itens dentro do orçamento
- 🔹 **Cálculo de Total** - Soma o custo dos itens acessíveis
- 🔹 **Contagem de Indisponíveis** - Quantifica itens fora do orçamento
- 🔹 **Saída Formatada** - Apresenta resultados de forma clara e legível

---

## 💡 Possíveis Melhorias Futuras

- [ ] Retornar um objeto com os resultados em vez de apenas imprimir
- [ ] Adicionar categorização por preço (economia, médio, premium)
- [ ] Implementar sistema de desconto
- [ ] Criar interface CLI interativa para entrada de dados
- [ ] Adicionar persistência de dados (salvar favoritos)
- [ ] Integrar com API de produtos reais
- [ ] Criar versão com mais funcionalidades (filtro, ordenação)

---

## 📸 Exemplo Detalhado de Execução

```javascript
// Input
const prices = [10, 20, 5, 15];
const items = ["Notebook", " Pen", " Eraser", " Bag"];
const budget = 10;

// Execução
analyzeBudget(prices, items, budget);

// Output
// Affordable items: Notebook, Eraser
// Total budget needed: 15
// Items out of budget: 2

// Explicação:
// - Notebook (10) ✅ Acessível
// - Pen (20) ❌ Fora do orçamento
// - Eraser (5) ✅ Acessível
// - Bag (15) ❌ Fora do orçamento
// Total acessível: 10 + 5 = 15
// Fora do orçamento: 2 itens
```

---

## 🔗 Referências

- [MDN - Array forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Coddy.tech - JavaScript Fundamentals](https://coddy.tech/journeys/javascript/fundamentals/)

---

## 📌 Notas Adicionais

Este projeto foi desenvolvido como parte do programa de aprendizado em JavaScript no Coddy.tech. Demonstra o domínio de iteração de arrays, manipulação de dados e formatação de saída, sendo um excelente exemplo de como resolver problemas práticos com JavaScript puro.

A função é simples, mas eficaz, e serve como base para projetos mais complexos de gestão de orçamento e análise de dados.

---

**Publicado originalmente em:** LinkedIn - Julho 2026