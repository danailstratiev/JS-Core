function solve(clientRequirements) {
    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };

    let hatchback = { type: 'hatchback', color: 'default' };
    let coupe = { type: 'coupe', color: 'default' }

    let clientModel = clientRequirements.model;
    let clientPower = clientRequirements.power;
    let clientColor = clientRequirements.color;
    let carriage = clientRequirements.carriage;
    let wheelSize = clientRequirements.wheelsize;

    let car = {
        model: clientModel,
    }

    if (clientPower <= 90) {
        car.engine = smallEngine;
    } else if (clientPower <= 120){
        car.engine = normalEngine;
    } else {
        car.engine = monsterEngine;
    }
    
    if (carriage === 'hatchback') {
        car.carriage = hatchback;
    }else {
        car.carriage = coupe;
    }
    car.carriage.color = clientColor;

    let carWheelSize = 2* Math.floor(wheelSize/2) - 1;
    if (wheelSize % 2 !== 0) {
        carWheelSize = wheelSize;
    }
    let wheels = [];

    for (let i = 0; i < 4; i++) {
        wheels.push(carWheelSize);
    }
    car.wheels = wheels;

    return car;
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));


console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));
