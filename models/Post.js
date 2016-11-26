var mongoose = require('mongoose');


var postSchema = new mongoose.Schema({

	posted_by: String,
	date_posted: {type: Date, default: Date.now},
	title: String,
	content: String

});

module.exports = mongoose.model('Post', postSchema);