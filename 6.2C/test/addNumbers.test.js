const expect = require('chai').expect;

// Import the addNumbers function from server.js
const { addNumbers } = require('../scripts/calculationFunctions');

// Unit tests for addNumbers function
describe('Addition of multiple numbers', function () {
    // Testing addition of 6 numbers
    it('addNumbers() should return the correct sum of multiple valid numbers', function (done) {
        const result = addNumbers([1, 2, 3, 0, 5, 6]);
        expect(result).to.equal(17);
        done();
    });

    // Testing addition of 1 number
    it('addNumbers() should return the same number when only one number is provided', function (done) {
        const result = addNumbers([42]);
        expect(result).to.equal(42);
        done();
    });

    // Testing addition of negative numbers
    it('addNumbers() should return the correct sum when negative numbers are included', function (done) {
        const result = addNumbers([-5, 10, -15, 20]);
        expect(result).to.equal(10);
        done();
    });

    // Testing addition with invalid input
    it('addNumbers() should throw TypeError for invalid number in the list', function (done) {
        expect(() => addNumbers([5, 'ten', 15])).to.throw(TypeError);
        done();
    });

    // Testing addition with numeric strings
    it('addNumbers() should return the correct sum when numeric strings are provided', function (done) {
        const result = addNumbers(['3', '7', 10]);
        expect(result).to.equal(20);
        done();
    });

    // Testing addition with no input
    it('addNumbers() should return 0 when no numbers are provided', function (done) {
        const result = addNumbers([]);
        expect(result).to.equal(0);
        done();
    });

    // Testing addition of very large numbers
    it('addNumbers() should return the correct sum of very large numbers', function (done) {
        const result = addNumbers([123456789, 987654321, 1000000000]);
        expect(result).to.equal(2111111110);
        done();
    });

});
