const mongoose = require('mongoose');
//Added 12/3, remove 3 & 4 
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

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
		},
		//Added 12/3, remove 41 & 42
		hash: String,
		salt: String
	},

	{
		collection: 'users',
		timestamps: true
	});

//Added 12/3, remove 51-71
User.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(pw, this.salt, 1000, 64, 'sha512').toString('hex');
};

User.methods.validPassword = function (password) {
	var hash = crypto.pbkdf2Sync(pw, this.salt, 1000, 64, 'sha512').toString('hex');
	return this.hash === hash;
};

User.methods.generateJwt = function () {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);

	return jwt.sign({
		_id: this._id,
		email: this.email,
		exp: parseInt(expiry.getTime() / 1000),
	}, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};


module.exports = mongoose.model('User', User)