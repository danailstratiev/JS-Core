(() => {
   Array.prototype.last = function () {
       return this[this.length - 1];
   };

   Array.prototype.skip = function(n) {
       let result = [];

       for (let i = n; i < this.length; i++) {
           result.push(this[i]);
       }

       //Alternative
       //return this.slice(n)
       return result;
   }
   Array.prototype.take = function(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(this[i]);
    }

    //Alternative 
    //return this.slice(0,n);
    return result;
    }
    Array.prototype.sum = function() {
        let result = 0;
    
        for (let i = 0; i < this.length; i++) {
            result +=(this[i]);
        }
    
        //Alternative 
        //this.reduce((a,b) => a + b); 
        return result;
    }
    Array.prototype.average = function() {
        let result = this.sum() / this.length
    
        return result;
    }
})();


var testArray = [1, 2, 3];
console.log(testArray.sum());
console.log(testArray.last());

