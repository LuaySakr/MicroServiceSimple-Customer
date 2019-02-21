var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Customer schema
var CustomerSchema = new Schema({
	customer: String,
	completed: { type:Boolean, default: false },
	created_by: { type: Date, default: Date.now }
});

// True since it is a parallel middleware
CustomerSchema.pre('save', function(next, done) {
	if(!this.customer){
		next(new Error("customer should not be null"));
	}
  	next();
});

var CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;