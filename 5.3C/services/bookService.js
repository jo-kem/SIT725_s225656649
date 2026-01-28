const books = require('../models/bookModel');

// Controller logic
async function getAllBooks() {
    return books.find({}).lean(getters = true);
};

module.exports.getAllBooks = getAllBooks;

// Controller logic
async function getBookById(bookId) {
    return books.findOne({ _id: bookId }).lean(getters = true);
};

module.exports.getBookById = getBookById;