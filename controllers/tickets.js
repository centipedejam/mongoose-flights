const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket,
    delete: deleteTicket
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id;
        req.body.seat = req.body.seat.toUpperCase();
        const newTicket = await Ticket.create(req.body);
        console.log(newTicket)
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`)
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { flight });
}

async function deleteTicket(req, res) {
    const ticket = await Ticket.findById(req.params.id);
    ticket.deleteOne();
    res.redirect(`/flights/${ticket.flight[0]}`)
}