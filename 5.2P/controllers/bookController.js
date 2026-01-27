const bookService = require('../services/books.service');

exports.getAllBooks = (req, res) => {
    const items = bookService.getAllBooks();
    res.json({ data: items });
};

exports.getBookById = (req, res) => {
    const bookId = req.params.id;
    const book = bookService.getBookById(bookId);
    if (book) {
        res.json({ data: book });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};