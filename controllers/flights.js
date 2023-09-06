const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

async function index(req, res) {
    const flights = await Flight.find({})
    console.log(flights)
    res.render('flights/index', { flights })
}

function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate, errorMsg: '' })
}

async function create(req, res) {
    try {
        const flight = await Flight.create(req.body);
        console.log(flight)
        res.redirect('/flights')
    } catch {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message })
    }
}