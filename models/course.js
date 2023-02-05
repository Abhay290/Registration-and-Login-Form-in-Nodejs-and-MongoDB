var mongoose = require('mongoose');
var Schema = mongoose.Schema;

courseSchema = new Schema( {
	unique_id: Number,
	courseName:String
}),
Course = mongoose.model('Course', courseSchema);

module.exports = Course;