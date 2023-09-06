const flightsCtrl = require('../controllers/flights')
const express = require('express');
const router = express.Router();

// all paths  start with '/flights'
//GET /flights (index)
router.get('/', flightsCtrl.index);

//GET /flights/new (new)
router.get('/new', flightsCtrl.new);


//GET /flights/:id (show)
router.get('/:id', flightsCtrl.show)

//POST /flights (create)
router.post('/', flightsCtrl.create)
module.exports = router;
