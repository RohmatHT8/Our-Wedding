const { Rsvp } = require('../models')
class Controller {
    static async createRsvp(req, res, next) {
        try {
            const { name, konfirmasi, jumlah } = req.body
            const rsvp = await Rsvp.create({name, konfirmasi, jumlah})
            res.status(201).json(rsvp)
        } catch (error) {
            
        }
    }
    static async readRsvp(req, res, next) {
        try {
            const rsvp = await Rsvp.findAll()
            res.status(200).json(rsvp)
        } catch (error) {
            
        }
    }
}

module.exports = Controller