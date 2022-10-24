const Controllerrsvp = require("../controllers/controllerRsvp")
const router = require("express").Router()

router.post('/rspv', Controllerrsvp.createRsvp)
router.get('/rspv', Controllerrsvp.readRsvp)

module.exports = router