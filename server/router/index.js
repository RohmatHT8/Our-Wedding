const Controllerrsvp = require("../controllers/controllerInvitations")
const controllerWishes = require("../controllers/controllerWishes")
const router = require("express").Router()

router.post('/invitation', Controllerrsvp.createInvitation)
router.get('/invitation', Controllerrsvp.readInvitation) 
router.post('/wishes', controllerWishes.createWishes)
router.get('/wishes', controllerWishes.readWishes)

module.exports = router