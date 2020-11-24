const express = require('express');
const app = express();
const articleRoute = express.Router();
const routeStatic = '/articles';
// Article model
let Article = require('../models/article');

// Add Articles
articleRoute.route(routeStatic + '/create').post((req, res, next) => {
	Article.create(req.body, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
});

// Get All Articles
articleRoute.route(routeStatic).get((req, res, next) => {
	Article.find((error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})

// Get single employee
articleRoute.route(routeStatic + '/:id').get((req, res, next) => {
	Article.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
})


// Update password
articleRoute.route(routeStatic + '/:id').put((req, res, next) => {
	Article.findByIdAndUpdate(req.params.id, {
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

articleRoute.route(routeStatic + '/:id').put((req, res, next) => {
	Article.findByIdAndUpdate(req.params.id, {
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
articleRoute.route(routeStatic + '/:id').delete((req, res, next) => {
	Article.findOneAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data
			})
		}
	})
})

module.exports = articleRoute;