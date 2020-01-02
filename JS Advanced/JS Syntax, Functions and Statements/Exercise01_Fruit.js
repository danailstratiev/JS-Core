function fruits(fruit, weight, money) {   
    
    let adjustedWeight = weight/1000;
    let priceOfFruit = money*adjustedWeight;

    let message = `I need $${priceOfFruit.toFixed(2)} to buy ${adjustedWeight.toFixed(2)} kilograms ${fruit}.`;

    return message;
}

console.log(fruits('orange', 2500, 1.80));