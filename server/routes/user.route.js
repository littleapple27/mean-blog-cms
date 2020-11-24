const express = require('express');
const app = express();
const userRoute = express.Router();

// User model
let User = require('../models/User');

// Add Users
userRoute.route('/users/create').post((req, res, next) => {
	User.create(req.body, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
});

// Get All Users
userRoute.route('/users').get((req, res, next) => {
	User.find((error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})

// Get single employee
userRoute.route('/users/:id').get((req, res, next) => {
	User.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})


// Update password
userRoute.route('/users/:id').put((req, res, next) => {
	User.findByIdAndUpdate(req.params.id, {
		$set: req.body
	}, (error, data) => {
		if (error) {
			return next(error);
			console.log(error)
		} else {
			res.json(data)
			console.log('Data updated successfully')
		}
	})
})

userRoute.route('/users/:id').put((req, res, next) => {
	User.findByIdAndUpdate(req.params.id, {
		$set: req.body
	}, (error, data) => {
		if (error) {
			return next(error);
			console.log(error)
		} else {
			res.json(data)
			console.log('Data updated successfully')
		}
	})
})

// Delete employee
userRoute.route('/users/:id').delete((req, res, next) => {
	User.findOneAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data
			})
		}
	})
})

module.exports = userRoute;