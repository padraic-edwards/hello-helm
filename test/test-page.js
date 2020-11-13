var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:80' , function(error, response, body) {
        expect(body).to.equal('Welcome to IBM Cloud DevOps with Docker, Kubernetes and Helm Charts. Lets go use the Continuous Delivery Service');
        done();
    });
});
