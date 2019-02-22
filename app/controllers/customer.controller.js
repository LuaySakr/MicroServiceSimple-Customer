"use strict";

var CustomerCtrl = function(Customer){

	var CustomerObj = {};

	CustomerObj.PostCustomer = function(req, res, next){
		console.log(req);
		var newCustomer = new Customer(req.body);
		newCustomer.save(function(err, customer){
			if(err){
				res.json({status: false, error: err.message});
				return;
			}
			res.json({status: true, number: req.body});
		});
	}

	CustomerObj.GetCustomer = function(req, res, next){
		Customer.find(function(err, customer){
			if(err) {
				res.json({status: false, error: "Something went wrong"});
				return
			}
			res.json({status: true, customer: customer});
		});
	}

	CustomerObj.UpdateCustomer = function(req, res, next){
		var completed = req.body.completed;
		Customer.findById(req.params.customer_id, function(err, customer){
			customer.completed = completed;
			customer.save(function(err, customer){
				if(err) {
					res.json({status: false, error: "Status not updated"});
				}
				res.json({status: true, message: "Status updated successfully"});
			});
		});
	}

	CustomerObj.DeleteCustomer = function(req, res, next){
		Customer.remove({_id : req.params.customer_id }, function(err, customer){
			if(err) {
				res.json({status: false, error: "Deleting customer is not successfull"});
			}
			res.json({status: true, message: "Customer deleted successfully"});
		});
	}

	return CustomerObj;
}

module.exports = CustomerCtrl;
