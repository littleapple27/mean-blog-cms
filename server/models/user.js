const mongoose = require('mongoose');
mongoose.Schema.Types.Boolean.convertToFalse.add('');
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
		isLimited: {
			type: Boolean
		},
		hide: {
			type: Boolean,
			default: true
		},
		isActive: {
			type: Boolean,
			default: null
		}
	},

	{
		collection: 'users',
		timestamps: true
	});

module.exports = mongoose.model('User', User)