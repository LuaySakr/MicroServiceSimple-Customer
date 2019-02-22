var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Customer schema
var CustomerSchema = new Schema({
	number: Number,
	name: String,
	adrs: String,
	completed: { type:Boolean, default: false },
	created_by: { type: Date, default: Date.now }
});

// True since it is a parallel middleware
CustomerSchema.pre('save', function(next, done) {
	if(!this.number){
		console.log(this)
		next(new Error("customer number should not be null"));
	}
  	next();
});

var CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;