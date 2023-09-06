const destinationsCtrl = require('../controllers/destinations');
const express = require('express');
const router = express.Router();


//POST /flights/:id/departures
router.post('/flights/:id/destinations', destinationsCtrl.create);






module.exports = router;