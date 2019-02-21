var config = {
	port: process.env.PORT || 7001,
	db: process.env.MONGOLAB_URI || "mongodb://mongodb/customer",
	test_port: 8001,
	test_db: "mongodb://mongodb/customerapi_test"
}
module.exports = config;