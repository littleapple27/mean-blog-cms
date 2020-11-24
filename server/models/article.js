  const mongoose = require('mongoose');
  const schema = mongoose.Schema;

  // Define collection and schema
  const Article = new schema({
  		pubDate: {
  			type: Date
  		},
  		leadTitle: {
  			type: String
  		},
  		author: {
  			type: String,
  		},
  		leadContent_1: {
  			type: String,
  		},
  		leadContent_2: {
  			type: String,
  		},
  		leadBQ: {
  			type: String,
  		},
  		subTitle1: {
  			type: String,
  		},
  		subContent1_1: {
  			type: String,
  		},
  		subBQ_1: {
  			type: String,
  		},
  		subContent1_2: {
  			type: String,
  		},
  		subTitle2: {
  			type: String,
  		},
  		subContent2_1: {
  			type: String,
  		},
  		subContent2_2: {
  			type: String,
  		},
  		imgCaption: {
  			type: String,
  		},

  	},

  	{
  		collection: 'articles',
  		timestamps: true
  	});

  module.exports = mongoose.model('Article', Article)