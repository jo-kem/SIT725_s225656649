const express = require('express');
const router = express.Router();

// Import the controller
const Controllers = require('../controllers');

// Route → Controller function
router.get('/', Controllers.bookController.getAllBooks);
router.get('/:id', Controllers.bookController.getBookById);

module.exports = router;