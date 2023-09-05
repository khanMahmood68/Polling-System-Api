const express = require('express');
const router = express.Router();
const optionController = require('../../../controllers/optionsController')

router.post('/:id/create',optionController.create);
router.get('/:id/add_vote',optionController.add_vote);
router.delete('/delete/:id',optionController.delete);

module.exports = router