// Array to store all form submissions
let allForms = [];

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

// Function to dynamically add cards to the webpage
const addCards = (items) => {
    items.forEach(item => {
        const card = `<div class="col s12 m4">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${item.imagelink}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                <p><a href="${item.link}">Buy now</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                <p>${item.moreinfo}</p>
            </div>
        </div>
    </div>`;
        $("#card-section").append(card);
    });
}

$(document).ready(function () {
    console.log("JS loaded successfully"); // debugging line
    $('.materialboxed').materialbox();
    addCards(cardList);
    $('.modal').modal();
})