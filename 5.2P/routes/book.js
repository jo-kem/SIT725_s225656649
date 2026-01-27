const express = require('express');
const router = express.Router();

// Import the controller
const bookController = require('../controllers/bookController');

// Route → Controller function
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

module.exports = router;