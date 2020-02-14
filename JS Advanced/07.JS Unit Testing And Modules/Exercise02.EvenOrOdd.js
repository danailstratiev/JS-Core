const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven", function() {
    //if the parameter is not string(number)
    //if the parameter is not string(objecs)

    it("test with number parameter should return undefined", function(){
        let expected = isOddOrEven(100);

        expect(isOddOrEven(100)).to.equal(undefined, "Function did not return correct result");
    })
    it('should  return undefined with an object parameter', function () {
        expect(isOddOrEven({name:"George"})).to.equal(undefined, "Not correct result")
    });
    it('should return odd', function () {
        expect(isOddOrEven('sheep')).to.equal('odd',"Correct value");
    });
    it('should return even', function () {
        expect(isOddOrEven('connection')).to.equal('even',"Correct value");
    });

})