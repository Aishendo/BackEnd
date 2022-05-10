var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username:{
      type:String,
      default:''
    },
    password: {
        type: String,
        default: ''
    },

});
var user = new mongoose.model('User', schema);
module.exports = user;