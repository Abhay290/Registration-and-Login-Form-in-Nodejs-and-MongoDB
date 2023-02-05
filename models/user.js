var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	courseName:String,
	isAdmin: Boolean,
}),
User = mongoose.model('User', userSchema);




module.exports = User;