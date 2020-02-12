class Rat{
    constructor(name){
        this.name = name;
        this.rats = []
    }

    unite(rat) {
        if ( rat instanceof Rat) {
            this.rats.push(rat);            
        }        
    }

    getRats(){
        return this.rats;
    }

    toString(){
        let ratsUnited = this.name;
        for (let rat of this.rats) {
            ratsUnited += `\n + ##${rat.name}`;
        }
        return ratsUnited;
    } 
}

function  solve() {
    let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
}

solve();

