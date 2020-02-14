class List{
    constructor(){
        this.elements = [];
        this.size = this.elements.length;
    }

    add(number){
        this.elements.push(number);
        this.size = this.elements.length;
        this.elements = this.elements.sort((a, b) => a - b);

    }

    remove(index){
        if (index < this.elements.length && index >= 0) {
            this.elements = this.elements.sort((a, b) => a - b);
            this.elements.splice(index, 1);
            this.size = this.elements.length;
            this.elements = this.elements.sort((a, b) => a - b);
        }
    }

    get(index){
        if (index < this.elements.length && index >= 0) {
            this.elements = this.elements.sort((a, b) => a - b);
            this.size = this.elements.length;
            return this.elements[index];
        }
    }    
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(-1);
list.add(1);
list.add(-6);

console.log(list.get(1)); 
list.remove(2);
console.log(list.get(1));
console.log(list.size);
console.log(list.elements);
