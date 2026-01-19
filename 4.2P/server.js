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
mongoose.connect('mongodb://localhost:27017/myprojectDB');
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

// Create Mongoose Schema
const ProjectSchema = new mongoose.Schema({
    title: String,
    imageLink: String,
    link: String,
    moreInfo: String,
});

const Project = mongoose.model('Project', ProjectSchema);

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
app.get('/api/bikes', async (req, res) => {
    const bikes = await Project.find({});
    return res.status(200).json({ statusCode: 200, data: bikes });
})

// Start the server
app.listen(port, () => {
    console.log("App listening to: " + port)
})