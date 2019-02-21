"use strict";

var should = require('should'),
	request = require('supertest'),
	app = require('../../server.js'),
	mongoose = require('mongoose'),
	Customer = mongoose.model('Customer'),
	agent = request.agent(app);

describe('Customer CRUD integration testing', function () {

	describe('Get all customer', function () {

		before(function (done) {
			var newCustomer = { customer: "Customer from hooks" };
			agent
			.post('/api/customers')
			.end(function(){
				done();
			})
		});

		it('Should get status equal success and array of customer', function (done) {
			agent
			.get('/api/customers')
			.expect(200)
			.end(function(err, results){
				results.body.status.should.equal(true);
				done();
			});
		});
		
	});
	
	describe('Post a customer', function () {
		it('Should allow post to post a customer and return _id', function (done) {
			var params = { customer: "Customer fro testing" };
			agent
			.post('/api/customers')
			.send(params)
			.expect(200)
			.end(function(err, results){
				results.body.customer.completed.should.equal(false);
				results.body.customer.should.have.property('_id');
				done();
			});
		});
	});
	
	describe('Delete a customer', function () {
		var id;
		before(function (done) {
			var params = { customer: "Customer from hooks to delete" };
			agent
			.post('/api/customers')
			.send(params)
			.end(function(err, result){
				id = result.body.customer._id;
				done();
			})
		});

		it('Should delete the customer by _id', function (done) {
			agent
			.delete('/api/customers/'+id)
			.end(function(err, result){
				result.body.status.should.equal(true);
				done();
			})
			
		});

	});

	describe('Update a customer', function () {
		var id;
		before(function (done) {
			var newCustomer = { customer: "Customer from hooks to update" };
			agent
			.post('/api/customers')
			.send(newCustomer)
			.end(function(err, result){
				id = result.body.customer._id;
				done();
			})
		});

		it('Should update the completed status of customer by _id to true', function (done) {
			var params = { completed: true };
			agent
			.put('/api/customers/'+id)
			.send(params)
			.end(function(err, result){
				result.body.status.should.equal(true);
				done();
			})
			
		});
	});

});

