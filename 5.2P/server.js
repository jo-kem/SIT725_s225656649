const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(__dirname + '/public'))

// Mount the route at /api/book
app.use('/api/books', require('./routes/book'));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
