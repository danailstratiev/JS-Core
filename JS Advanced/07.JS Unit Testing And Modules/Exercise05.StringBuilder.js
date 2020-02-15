const expect = require('chai').expect;
let assert = require('assert');

class StringBuilder {
    constructor(string) {
      if (string !== undefined) {
        StringBuilder._vrfyParam(string);
        this._stringArray = Array.from(string);
      } else {
        this._stringArray = [];
      }
    }
  
    append(string) {
      StringBuilder._vrfyParam(string);
      for(let i = 0; i < string.length; i++) {
        this._stringArray.push(string[i]);
      }
    }
  
    prepend(string) {
      StringBuilder._vrfyParam(string);
      for(let i = string.length - 1; i >= 0; i--) {
        this._stringArray.unshift(string[i]);
      }
    }
  
    insertAt(string, startIndex) {
      StringBuilder._vrfyParam(string);
      this._stringArray.splice(startIndex, 0, ...string);
    }
  
    remove(startIndex, length) {
      this._stringArray.splice(startIndex, length);
    }
  
    static _vrfyParam(param) {
      if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }
  
    toString() {
      return this._stringArray.join('');
    }
}
  
describe("Stringbuilder behavior", function () {

    let actualResult;
    let expectedResult;
    let sb;
    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        sb = new StringBuilder();
    });

    describe("constructor() CHECK", function () {

        it('should without param', function () {
            actualResult = new StringBuilder();
            expectedResult = [];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
        it('with param', function () {
            actualResult = new StringBuilder('horse');
            expectedResult = ['h','o','r','s','e'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
        it('with param number', function () {
            //When we are expecting exception, we should keep the result in a function
            actualResult = () => new StringBuilder(85);
            expectedResult = "Argument must be a string";

            assert.throws(actualResult, expectedResult);
        });
        it('with param bool', function () {
            //When we are expecting exception, we should keep the result in a function
            actualResult = () => new StringBuilder(true);
            expectedResult = "Argument must be a string";

            assert.throws(actualResult, expectedResult);
        });
    });

    describe("append Check", function () {
        it('append with valid string', function () {
            sb.append('123');
            actualResult = sb._stringArray;
            expectedResult = ['1','2','3'];

            assert.deepEqual(actualResult, expectedResult);
        });
        it('append with valid string', function () {
            sb = new StringBuilder('000')
            sb.append('123');
            actualResult = sb._stringArray;
            expectedResult = ['0','0','0','1','2','3'];

            assert.deepEqual(actualResult, expectedResult);
        });
        it('append with invalid argument', function () {
            actualResult = () => sb.append(5);
            expectedResult = 'Argument must be a string';

            assert.throws(actualResult, expectedResult);
        });
    })

    describe('remove Check', function () {
        it('should remove properly', function () {
            sb = new StringBuilder('123456');
            sb.remove(0, 3);
            actualResult = sb._stringArray;
            expectedResult = ['4', '5', '6'];

            assert.deepEqual(actualResult, expectedResult);
        });
    })
    describe('prepend Check', function () {
        it('with valid data (string)', function () {
            sb = new StringBuilder('as');
            sb.prepend('d');
            actualResult = sb._stringArray;
            expectedResult = ['d', 'a', 's'];

            assert.deepEqual(actualResult, expectedResult);
        });
        it('with invalid data (array)', function () {

            actualResult = () => sb.prepend([]);
            expectedResult = 'Argument must be a string';

            assert.throws(actualResult, expectedResult);
        });
    });
    describe('insertAt Check', function () {
        it('should insert properly', function () {
            sb = new StringBuilder('betle');
            sb.insertAt('a',2);
            actualResult = sb._stringArray;
            expectedResult = ['b','e','a','t','l','e'];

            assert.deepEqual(actualResult, expectedResult);
        });
    });
    describe('toString Check', function () {
        it('with non empty string', function () {
            sb = new StringBuilder('beatle');
            actualResult = sb.toString();
            expectedResult = 'beatle';

            assert.deepEqual(actualResult, expectedResult);
        });
        it('with empty string', function () {
            actualResult = sb.toString();
            expectedResult = '';

            assert.deepEqual(actualResult, expectedResult);
        });
    })
});