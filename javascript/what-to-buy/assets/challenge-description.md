## O Que Comprar

### Dificuldade: Médio

Escreva uma função chamada `analyzeBudget` que:

1.  Receba três argumentos: uma lista de preços, uma lista de nomes de itens e um orçamento por item.
2.  Imprima as seguintes informações exatamente como mostrado abaixo:
    -   `Affordable items: [items]`
    -   `Total budget needed: [total]`
    -   `Items out of budget: [count]`

**Nota:** A lista de itens fornecida na entrada pode conter espaços no início (ex: `" Item"`). Você deve imprimir os itens exatamente como eles aparecem na lista de entrada, preservando quaisquer espaços ou formatações existentes.

**Exemplo:**  
Para `prices = [10, 20, 5, 15]`, `items = ["Notebook", " Pen", " Eraser", " Bag"]` e `budget = 10`, a saída deve ser:

```javascript
Affordable items: "Notebook", " Eraser"
Total budget needed: 15
Items out of budget: 2
```