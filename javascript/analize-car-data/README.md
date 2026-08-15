# Analyze Car Data

**Linguagem:** JavaScript  
**Data:** Agosto 2026  
**Status:** ✅ Concluído  
**Publicado em:** [LinkedIn](https://www.linkedin.com/in/heitor-terto/)

---

## 📋 Descrição do Desafio

Desenvolver uma função que analisa o inventário de uma concessionária de carros em formato JSON, identificando o modelo mais caro, o mais barato e calculando o preço médio de todos os veículos.

---

## 🎯 Objetivo

- ✅ Implementar a função `analyzeCarData()` que processa um objeto JSON
- ✅ Identificar o carro mais caro do inventário
- ✅ Identificar o carro mais barato do inventário
- ✅ Calcular o preço médio de todos os carros
- ✅ Praticar manipulação de objetos em JavaScript
- ✅ Explorar métodos nativos como Object.values() e Object.entries()

---

## 💻 Tecnologias Utilizadas

- **Linguagem:** JavaScript (ES6+)
- **Métodos:** Object.values(), Object.entries(), reduce(), for...in loop
- **Conceitos:** Manipulação de objetos JSON, iteração, acumulação de dados
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
node AnalyzeCarData.js
```

**Exemplo de interação:**
```javascript
const carData = {
  "Toyota Corolla": 20075,
  "Honda Civic": 22550,
  "Hyundai Elantra": 19850,
  "Nissan Sentra": 19510,
  "Kia Forte": 19090
};

analyzeCarData(carData);

// Output:
// {
//   mostExpensive: 'Honda Civic',
//   cheapest: 'Kia Forte',
//   averagePrice: 20215
// }
```

---

## 📚 O que Aprendi

Este projeto foi excelente para aprofundar conhecimentos em manipulação de objetos JavaScript:

- ✅ **Object.values()** - Extrair apenas os valores de um objeto
- ✅ **Object.entries()** - Obter pares chave-valor em formato de array
- ✅ **reduce() Method** - Acumular valores de um array (soma total)
- ✅ **for...in Loop** - Iterar sobre as propriedades de um objeto
- ✅ **Comparações Numéricas** - Lógica para encontrar máximo e mínimo
- ✅ **Estrutura de Retorno** - Organizar dados em um objeto estruturado

**Desafios enfrentados:**
- Entender a diferença entre Object.values() e Object.entries()
- Implementar corretamente o reduce() com acumulador
- Comparar valores numéricos dentro de um loop for...in
- Organizar o retorno com os nomes dos carros e valores calculados

---

## 📁 Estrutura do Projeto

```
analyze-car-data/
├── AnalyzeCarData.js            # Código-fonte da solução
├── README.md                     # Este arquivo
└── assets/                       # Screenshots e exemplos
    ├── screenshot-code.png
    └── challenge-description.md
```

---

## 🎨 Funcionalidades Principais

- 🔹 **Extração de Dados** - Obtém valores e entradas do objeto JSON
- 🔹 **Cálculo de Soma** - Usa reduce() para somar todos os preços
- 🔹 **Identificação do Máximo** - Encontra o carro mais caro
- 🔹 **Identificação do Mínimo** - Encontra o carro mais barato
- 🔹 **Cálculo de Média** - Divide a soma pelo número de carros

---

## 💡 Possíveis Melhorias Futuras

- [ ] Adicionar suporte para buscar carros por faixa de preço
- [ ] Criar função para filtrar carros acima/abaixo de um preço específico
- [ ] Implementar ordenação de carros por preço
- [ ] Adicionar estatísticas adicionais (mediana, desvio padrão)
- [ ] Integrar com API de concessionárias reais
- [ ] Criar interface web para visualização dos dados
- [ ] Adicionar funcionalidade de comparação entre modelos

---

## 📸 Exemplo Detalhado de Execução

```javascript
// Input
const carData = {
  "Toyota Corolla": 20075,
  "Honda Civic": 22550,
  "Hyundai Elantra": 19850,
  "Nissan Sentra": 19510,
  "Kia Forte": 19090
};

// Execução
const resultado = analyzeCarData(carData);

// Output
{
  mostExpensive: 'Honda Civic',      // Preço: 22550
  cheapest: 'Kia Forte',             // Preço: 19090
  averagePrice: 20215                // (20075+22550+19850+19510+19090)/5 = 20215
}

// Análise:
// - Honda Civic é o mais caro (22550)
// - Kia Forte é o mais barato (19090)
// - Preço médio: 20215
// - Diferença entre mais caro e barato: 3460
```

---

## 🔗 Referências

- [MDN - Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [MDN - Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN - Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN - for...in Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [Coddy.tech - Desafios JavaScript](https://coddy.tech/user/Its8or)

---

## 📌 Notas Adicionais

Este é um desafio de **dificuldade fácil** do Coddy.tech que demonstra competência em:
- Manipulação de estruturas de dados JSON
- Uso de métodos nativos do JavaScript
- Lógica de programação com comparações e acumulação

Apesar da dificuldade baixa, é um projeto sólido que serve como base para análises mais complexas de dados em aplicações reais.

---

**Publicado originalmente em:** LinkedIn - Agosto 2026