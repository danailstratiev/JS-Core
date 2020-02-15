const expect = require('chai').expect;


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("lookupChar", function () {
    it('should return undefined if first value is not string', function () {
        expect(lookupChar({color:"red"}, 87)).to.equal(undefined, 'First value is not a string')
    });
    it('should return undefined if second value is not number', function () {
        expect(lookupChar("Red Son", 'Superman')).to.equal(undefined, 'Second value is not a number')
    });
    it('should return Incorrect index if index is negative number', function () {
        expect(lookupChar("Red Son", -1)).to.equal("Incorrect index")
    });
    it('should return Incorrect index if index equals string length', function () {
        expect(lookupChar("Red Son", 7)).to.equal("Incorrect index")
    });
    it('should return Incorrect index if index exceeds string length', function () {
        expect(lookupChar("Red Son", 9)).to.equal("Incorrect index")
    });
    it('should return Incorrect index if index is floating point number', function () {
        expect(lookupChar("Red Son", 1.9)).to.equal(undefined,"Incorrect index")
    });
    it('should return proper value if index and string are correct', function () {
        expect(lookupChar("Red Son", 2)).to.equal("d")
    });
});

