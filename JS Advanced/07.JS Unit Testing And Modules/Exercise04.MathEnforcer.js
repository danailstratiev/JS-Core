const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", function () {
    it('addFive should return undefined if num is not a number', function () {
        expect(mathEnforcer.addFive('d')).to.equal(undefined, "Value is not a number")
    });
    it('addFive should return increase with 5 given value', function () {
        expect(mathEnforcer.addFive(5)).to.equal(10, "addFive works properly")
    });
    it('addFive should return increase with 5 given negative value', function () {
        expect(mathEnforcer.addFive(-15)).to.equal(-10, "addFive works properly")
    });
    it('addFive should return increase with 5 given floating point value', function () {
        expect(mathEnforcer.addFive(10.5)).to.equal(15.5, "addFive works properly")
    });
    it('subtractTen should return undefined if num is not a number', function () {
        expect(mathEnforcer.subtractTen('s')).to.equal(undefined, "Value is not a number")
    });
    it('subtractTen should decrease value with 10', function () {
        expect(mathEnforcer.subtractTen(10)).to.equal(0, "subtractTen works properly")
    });
    it('subtractTen should decrease negative value with 10', function () {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20, "subtractTen works properly")
    });
    it('subtractTen should decrease floating point value with 10 properly', function () {
        expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5, "subtractTen works properly")
    });
    it('should return undefined if num1 is not a number', function () {
        expect(mathEnforcer.sum('1', 2)).to.equal(undefined, "Num1 is not a number")
    });
    it('should return undefined if num2 is not a number', function () {
        expect(mathEnforcer.sum(1, '2')).to.equal(undefined, "Num2 is not a number")
    });
    it('should sum num1 and num2 properly', function () {
        expect(mathEnforcer.sum(1, 2)).to.equal(3, "Sum returns proper value")
    });
    it('should sum floating num1 and num2 properly', function () {
        expect(mathEnforcer.sum(1.5, 2)).to.equal(3.5, "Sum returns proper value")
    });
    it('should sum num1 and floating num2 properly', function () {
        expect(mathEnforcer.sum(1, 4.5)).to.equal(5.5, "Sum returns proper value")
    });
});
