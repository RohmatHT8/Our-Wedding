const { Wish } = require("../models")
class Controller {
    static async createWishes(req, res, next) {
        try {
            const { name, ucapan } = req.body
            const wish = await Wish.create({ name, wishes:ucapan })
            res.status(201).json(wish)
        } catch (error) {
            console.log(error)
        }
    }

    static async readWishes(req, res, next) {
        try {
            const wishes = await Wish.findAndCountAll({order: [['id', 'DESC']]})
            res.status(200).json(wishes)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Controller