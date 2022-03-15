const router = require('express').Router();
const controller = require('../Controller/controller.js')

router.get('/transaction', controller.transaction)
router.get('/balance', controller.balance)


module.exports = router;