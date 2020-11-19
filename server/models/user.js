const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Define collection and schema
const User = new schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	email: {
		type: String
	},
	pw: {
		type: String
	},
	pwConfirm: {
		type: String
	},
	isAdmin: {
		type: Boolean
	},
}, {
	collection: 'users',
	timestamps: true
});

module.exports = mongoose.model('User', User)