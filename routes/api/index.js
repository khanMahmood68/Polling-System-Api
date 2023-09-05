const express = require('express')
const router = express.Router();

// This is the entry point of all the api/v1 named url's
router.use('/v1',require('../api/v1'))

module.exports = router;