function analyzeBudget(prices, items, budget) {
    let affordable_items = [];
    let total_budget = 0;
    let number_itens_unaffortable = 0;

    prices.forEach((price, index) => {
        if (price <= budget) {
            affordable_items.push(items[index])
            total_budget += price
        } else number_itens_unaffortable++;
    });

    console.log(`Affordable items: ${affordable_items}`);
    console.log(`Total budget needed: ${total_budget}`);
    console.log(`Items out of budget: ${number_itens_unaffortable}`);
}

let prices = [10, 20, 5, 15]
let items = ["Notebook", "Pen", "Eraser", "Bag"]
let budget = 10

analyzeBudget(prices, items, budget)

// ------------ Output -------------
// Affordable items: Notebook,Eraser
// Total budget needed: 15
// Items out of budget: 2