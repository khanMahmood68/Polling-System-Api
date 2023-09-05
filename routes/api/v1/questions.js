const express = require('express');
const router = express.Router();

const questionController = require('../../../controllers/questionsController')

router.post('/create', questionController.create)
router.get('/view/:id',questionController.showDetails)
router.get('/delete/:id',questionController.deleteQues);

router.use('/options', require('./options'))

module.exports = router;