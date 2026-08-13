function analyzeCarData(carData) {
    const values = Object.values(carData);
    const entries = Object.entries(carData);
    const sum = values.reduce((acc, num) => acc + num, 0);

    let result = {
        mostExpensive: entries[0],
        cheapest: entries[0],
        averagePrice: sum / values.length
    };

    for (index in entries) {
        let price = entries[index];
        if (price[1] < result.cheapest[1]) {
            result.cheapest = price;
        } 
        
        if (price[1] > result.mostExpensive[1]) {
            result.mostExpensive = price;
        }
    }

    return {
        mostExpensive: result.mostExpensive[0],
        cheapest: result.cheapest[0],
        averagePrice: result.averagePrice
    };
}

// ------------- test -------------

let carData = {
    "Toyota Corolla": 20075,
    "Honda Civic": 22550,
    "Hyundai Elantra": 19850,
    "Nissan Sentra": 19510,
    "Kia Forte": 19090
}

console.log(analyzeCarData(carData));

// Output:
// 
// {
//   mostExpensive: 'Honda Civic',
//   cheapest: 'Kia Forte',
//   averagePrice: 20215
// }