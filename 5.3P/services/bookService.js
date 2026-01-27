// Controller logic
async function getAllBooks() {
    return bookItems.find({}).lean(getters = true);
};

module.exports.getAllBooks = getAllBooks;

// Controller logic
async function getBookById(bookId) {
    return bookItems.findOne({ _id: bookId }).lean(getters = true);
};

module.exports.getBookById = getBookById;