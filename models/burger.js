const orm = require("../config/orm");

var burger ={
	all: function(cb) {
			orm.selectAll("burgers", function(res) {
					cb(res);
			});
	},
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	update: function(objColVals, conditon, cb) {
		orm.update("burgers", objColVals, conditon, function(res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller
module.exports = burger;