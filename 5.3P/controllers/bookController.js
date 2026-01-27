const bookService = require('../services/booksService');

exports.getAllBooks = async (req, res, next) => {
    try {
        const items = await bookService.getAllBooks();
        res.status(200).json({
            statusCode: 200,
            data: items,
            message: 'Book list retrieved using service'
        });
    } catch (error) {
        next(error);
    };
};

exports.getBookById = async (req, res, next) => {
    const bookId = req.params.id;
    const book = await bookService.getBookById(bookId);
    if (book) {
        res.json({ data: book });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};