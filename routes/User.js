const express = require('express')
const UserController = require('../controllers/User')
const UserModel = require("../model/user");
const router = express.Router();
router.get('/', UserController.findAll);
router.post('/', UserController.create);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);
module.exports = router