const express = require('express')
const UserController = require('../controllers/GamesControllers')
const router = express.Router();
router.get('/game/show', UserController.findAll);
module.exports = router
