const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 3000;

// Database Connection
mongoose.connect('mongodb://localhost:27017/booksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('✅ Connected to MongoDB');
});

// App and Middleware
const app = express();
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the route at /api/book
app.use('/api/books', require('./routes/book'));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});