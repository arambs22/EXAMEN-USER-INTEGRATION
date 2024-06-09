const express = require('express');
const router = express.Router();
const descriptionController = require('../controllers/descriptionController');

router.get('/:id', descriptionController.getDescriptionById);
router.post('/:userId', descriptionController.createDescription);

module.exports = router;