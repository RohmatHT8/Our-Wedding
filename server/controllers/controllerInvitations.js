const { Invitation } = require('../models')
class Controller {
    static async createInvitation(req, res, next) {
        try {
            console.log(req.body)
            const { nama, konfirmasi, jumlah } = req.body
            const invitation = await Invitation.create({name:nama, konfirmasi, jumlah})
            res.status(201).json(invitation)
        } catch (error) {
            console.log(error)
        }
    }
    static async readInvitation(req, res, next) {
        try {
            const invitation = await Invitation.findAll()
            const hadir = await Invitation.findAll({where:{konfirmasi:"hadir"}})
            const tidakHadir = await Invitation.count({where:{konfirmasi:"tidak hadir"}})
            const ragu = await Invitation.count({where:{konfirmasi:"ragu"}})
            let count = 0
            hadir.map(el => count += el.jumlah)
            res.status(200).json({invitation, count, tidakHadir, ragu})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Controller