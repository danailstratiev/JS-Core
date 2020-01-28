function main(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let elements = input[i].split(" / ");
        
        let heroName = elements[0];
        let heroLevel = Number(elements[1]);
        let heroItems = [];

        if (elements.length > 2) {
            heroItems = elements[2].split(", ");
        }
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}