var expect = require('chai').expect;

// Dependencies
var ajax = require('../../app/scripts/util/ajax');

describe('util/ajax', function() {
    describe('get', function() {
        it('should return content of a file', function(done) {
            ajax.get('http://ip.jsontest.com/').then(function(content) {
                expect(content).to.be.a('string');
                done();
            }, function(error) {
                done(error);
            });
        });
    });

    describe('getJSON', function() {
        it('should return a js object', function(done) {
            ajax.getJSON('http://ip.jsontest.com/').then(function(data) {
                expect(data).to.be.an('object');
                done();
            }, function(error) {
                done(error);
            });
        });
    });
});