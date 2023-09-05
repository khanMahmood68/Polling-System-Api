const express = require('express');
const router = express.Router();

// This is the entry point of all the api named url's
router.use('/api',require('../routes/api'))

module.exports = router;