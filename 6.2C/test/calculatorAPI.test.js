const expect = require('chai').expect;
const request = require('request');

// Integration and Unit tests for Calculator API
describe('Calculator API', function () {
    const baseUrl = 'http://localhost:3000';

    describe('GET /api/calc', function () {

        // Testing empty input
        it('should return 400 for missing parameters', function (done) {
            request(`${baseUrl}/api/calc`, function (error, response, body) {
                expect(response.statusCode).to.equal(400);
                done();
            });
        });

        // Testing invalid characters
        it('should return 400 and a descriptive message for invalid numbers', function (done) {
            request(`${baseUrl}/api/calc?a=abc&b=10&op=add`, function (error, response, body) {
                expect(response.statusCode).to.equal(400);
                expect(JSON.parse(body).error).to.equal('Invalid numbers');
                done();
            });
        });

        // Testing numeric string entry
        it('should return 400 and a descriptive message for numeric string entry', function (done) {
            request(`${baseUrl}/api/calc?a="3"&b=10&op=add`, function (error, response, body) {
                expect(response.statusCode).to.equal(400);
                expect(JSON.parse(body).error).to.equal('Invalid numbers');
                done();
            });
        });

        // Testing invalid operation
        it('should return 400 for invalid operation with a descriptive message', function (done) {
            request(`${baseUrl}/api/calc?a=5&b=10&op=modulus`, function (error, response, body) {
                expect(response.statusCode).to.equal(400);
                expect(JSON.parse(body).error).to.equal('Invalid operation');
                done();
            });
        });

        // Testing addition
        it('should return the correct sum of two valid numbers', function (done) {
            request(`${baseUrl}/api/calc?a=123&b=10&op=add`, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(body).result).to.equal(133);
                done();
            });
        });

        // Testing subtraction
        it('should return the correct difference of two valid numbers', function (done) {
            request(`${baseUrl}/api/calc?a=19840&b=9302&op=subtract`, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(body).result).to.equal(10538);
                done();
            });
        });

        // Testing multiplication
        it('should return the correct product of two valid numbers', function (done) {
            request(`${baseUrl}/api/calc?a=5&b=6&op=multiply`, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(body).result).to.equal(30);
                done();
            });
        });

        // Testing division
        it('should return the correct quotient of two valid numbers', function (done) {
            request(`${baseUrl}/api/calc?a=540&b=9&op=divide`, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(body).result).to.equal(60);
                done();
            });
        });

        // Testing division by zero
        it('should return 400 and a descriptive message for division by zero', function (done) {
            request(`${baseUrl}/api/calc?a=50&b=0&op=divide`, function (error, response, body) {
                expect(response.statusCode).to.equal(400);
                expect(JSON.parse(body).error).to.equal('Divide by zero');
                done();
            });
        });

        // Testing too many arguments
        it('should return 200 and ignore final argument for too many parameters', function (done) {
            request(`${baseUrl}/api/calc?a=5&b=10&c=15&op=add`, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});