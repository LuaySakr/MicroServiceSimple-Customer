"use strict";

var should = require('should'),
	sinon = require('sinon'),
	mongoose = require('mongoose');

require('sinon-mongoose');

var CustomerModel = require('../../../app/models/customer.model');

describe('CustomerController testing', function () {

	describe('Customer Post test', function () {
		
		it('Should call save only once', function () {
			var saveStub = sinon.stub();
			function Book(){
				this.save = saveStub
			}
			var req = {
				body: {
					customer: "Test customer from mock"
				}
			}
			var res = {}, next = {};
			var CustomerController = require('../../../app/controllers/customer.controller')(Book);
			CustomerController.PostCustomer(req, res, next);
			sinon.assert.calledOnce(saveStub);
		});

		it('Should save customer', function (done) {
			var customerMock = sinon.mock(new CustomerModel({ customer: 'Save new customer from mock'}));
			var customer = customerMock.object;

			customerMock
			.expects('save')
			.yields(null, 'SAVED');

			customer.save(function(err, result) {
				customerMock.verify();
				customerMock.restore();
				should.equal('SAVED', result, "Test fails due to unexpected result")
				done();
			});
		});

	});

	describe('Get all Customer test', function () {
		it('Should call find once', function (done) {
			var CustomerMock = sinon.mock(CustomerModel);
			CustomerMock
			.expects('find')
			.yields(null, 'CUSTOMERS');

			CustomerModel.find(function (err, result) {
				CustomerMock.verify();
				CustomerMock.restore();
				should.equal('CUSTOMERS', result, "Test fails due to unexpected result")
				done();
			});
		});
	});

	describe('Delete customer test', function () {
		it('Should delete customer of gived id', function (done) {
			var CustomerMock = sinon.mock(CustomerModel);

			CustomerMock
			.expects('remove')
			.withArgs({_id: 12345})
			.yields(null, 'DELETED');

			CustomerModel.remove({_id: 12345}, function(err, result){
				CustomerMock.verify();
				CustomerMock.restore();
				done();
			})


		});
	});

	describe('Update a customer', function () {
		it('Should update the customer with new value', function (done) {
			var customerMock = sinon.mock(new CustomerModel({ customer: 'Save new customer from mock'}));
			var customer = customerMock.object;

			customerMock
			.expects('save')
			.withArgs({_id: 12345})
			.yields(null, 'UPDATED');

			customer.save({_id: 12345}, function(err, result){
				customerMock.verify();
				customerMock.restore();
				done();
			})

		});
	});

});