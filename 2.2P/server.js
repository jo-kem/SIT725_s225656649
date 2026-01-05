const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to parse calculations from the html interface
// Usage example: http://localhost:3000/api/calc?a=5&b=10&op=add
app.get('/api/calc', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const op = req.query.op;
  if (isNaN(a) || isNaN(b)) return res.status(400).json({ error: 'Invalid numbers' });

  switch (op) {
    case 'add': return res.json({ result: a + b });
    case 'subtract': return res.json({ result: a - b });
    case 'multiply': return res.json({ result: a * b });
    case 'divide':
      if (b === 0) return res.status(400).json({ error: 'Divide by zero' });
      return res.json({ result: a / b });
    default: return res.status(400).json({ error: 'Invalid operation' });
  }
});


// GET endpoint to add a list of comma separated numbers together
// Usage example: http://localhost:3000/api/adds?a=5,10,15
app.get('/api/adds', (req, res) => {
    // Parse the numbers from the query parameters
    const numbers = req.query.a.split(',').map(num => parseFloat(num));

    // Add the numbers together
    let sum = 0;
    for (let num of numbers) {
        if (isNaN(num)) {
            return res.status(400).json({ error: "Please provide valid numbers for a." });
        }
        sum += num;
    }

    // Return the sum as a JSON response
    res.json({ sum: sum });
});

// GET endpoint to multiply a list of comma separated numbers together
// Usage example: http://localhost:3000/api/multiplies?a=2,3,4
app.get('/api/multiplies', (req, res) => {
    // Parse the numbers from the query parameters
    const numbers = req.query.a.split(',').map(num => parseFloat(num));
    
    // Multiply the numbers together
    let product = 1;
    for (let num of numbers) {
        if (isNaN(num)) {
            return res.status(400).json({ error: "Please provide valid numbers for a." });
        }
        product *= num;
    }

    // Return the product as a JSON response
    res.json({ product: product });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
