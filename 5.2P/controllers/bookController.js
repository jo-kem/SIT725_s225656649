const bookService = require('../services/books.service');

exports.getAllBooks = (req, res) => {
    console.log("Fetching all books");
    const items = bookService.getAllBooks();
    console.log(items)
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