const express = require('express');
const router = express.Router();

router.use('/question',require('./questions'));

module.exports = router;