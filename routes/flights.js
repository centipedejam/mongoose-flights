const flightsCtrl = require('../controllers/flights')
const express = require('express');
const router = express.Router();

// all paths  start with '/flights'
//GET /movies (index)
router.get('/', flightsCtrl.index);

//GET /movies/new (new)
router.get('/new', flightsCtrl.new)

//POST /movies (create)
router.post('/', flightsCtrl.create)
module.exports = router;
