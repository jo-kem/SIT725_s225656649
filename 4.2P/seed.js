const mongoose = require('mongoose');

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

// Data for the cards to be displayed
const cardList = [
    {
        title: "Panigale V4",
        link: "https://www.ducati.com/au/en/bikes/panigale",
        imageLink: "images/panigale.jpg",
        moreInfo: "The Panigale V4 is a masterpiece of engineering and design, combining cutting-edge technology with Italian craftsmanship to deliver an unparalleled riding experience."
    },
    {
        title: "DesertX",
        link: "https://www.ducati.com/au/en/bikes/desertx",
        imageLink: "images/desertx.jpg",
        moreInfo: "The DesertX is built to conquer the toughest terrains, featuring a robust frame, advanced suspension, and a powerful engine that ensures optimal performance both on and off-road."
    },
    {
        title: "Scrambler",
        link: "https://www.ducati.com/au/en/bikes/scrambler",
        imageLink: "images/scrambler.jpg",
        moreInfo: "The Scrambler combines retro style with modern performance, offering a versatile and fun riding experience that appeals to both new and experienced riders alike."
    }
];

// Insert data into MongoDB
Project.insertMany(cardList).then(() => {
    console.log("Data inserted");
    mongoose.connection.close();
}).catch((error) => {
    console.error("Error inserting data: ", error);
});