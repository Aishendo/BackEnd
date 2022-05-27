const UserModel = require('../models/UserModel');
const bcrypt = require("bcrypt");


exports.register = async (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        const newUser = new UserModel({
            email: req.body.username,
            password:hash
        });
        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.render("home");
            }
        });
    })
};

exports.login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    UserModel.findOne({email: username}, function(err, foundUser){
        if (err) {
            res.send("404")
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function(err, result) {
                    if(result===true) {
                        res.render("home");
                    }
                });
            }
        }
    })

};
