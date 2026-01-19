var express = require("express")
const mongoose = require('mongoose');
var app = express()

// ...existing code...
// Array to store form submissions on the server
let allForms = [];

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use standard PORT env var
var port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

// Data for the cards to be displayed
const cardList = [
    {
        title: "Panigale V4",
        link: "https://www.ducati.com/au/en/bikes/panigale",
        imagelink: "images/panigale.jpg",
        moreinfo: "The Panigale V4 is a masterpiece of engineering and design, combining cutting-edge technology with Italian craftsmanship to deliver an unparalleled riding experience."
    },
    {
        title: "DesertX",
        link: "https://www.ducati.com/au/en/bikes/desertx",
        imagelink: "images/desertx.jpg",
        moreinfo: "The DesertX is built to conquer the toughest terrains, featuring a robust frame, advanced suspension, and a powerful engine that ensures optimal performance both on and off-road."
    },
    {
        title: "Scrambler",
        link: "https://www.ducati.com/au/en/bikes/scrambler",
        imagelink: "images/scrambler.jpg",
        moreinfo: "The Scrambler combines retro style with modern performance, offering a versatile and fun riding experience that appeals to both new and experienced riders alike."
    }
]


// Form submission handler
app.post("/api/formSubmit", (req, res) => {
    const { firstname, lastname, email } = req.body || {};

    // basic validation
    if (!firstname || !lastname || !email) {
        return res.status(400).json({ error: 'Invalid input.' });
    }

    const newSubmission = { firstname, lastname, email };

    console.log("Form Submitted:", newSubmission);

    allForms.push(newSubmission);

    return res.status(200).json({ message: "Thank you for your submission, " + firstname + "!", submission: newSubmission });
})


// List all interested form submissions
app.get("/api/listSubmissions", (req, res) => {
    return res.status(200).json({ submissions: allForms });
})

// List all interested form submissions
app.get('/api/bikes', (req, res) => {
    res.status(200).json({ statusCode: 200, data: cardList, message: "Success" })
})

// Start the server
app.listen(port, () => {
    console.log("App listening to: " + port)
})