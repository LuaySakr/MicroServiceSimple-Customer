var Customer = require('../models/customer.model');
var CustomerController = require('../controllers/customer.controller')(Customer);

module.exports = function(app){

	app.get('/api/customers', CustomerController.GetCustomer);
	
	app.post('/api/customers', CustomerController.PostCustomer);

	app.put('/api/customers/:customer_id', CustomerController.UpdateCustomer);

	app.delete('/api/customers/:customer_id', CustomerController.DeleteCustomer);

}