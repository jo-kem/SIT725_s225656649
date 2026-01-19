// Function to dynamically add cards to the webpage
const addCards = (items) => {
    items.forEach(item => {
        const card = `<div class="col s12 m4">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${item.imageLink}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                <p><a href="${item.link}">Buy now</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                <p>${item.moreInfo}</p>
            </div>
        </div>
    </div>`;
        $("#card-section").append(card);
    });
}

const getBikes = () => {
    $.get('/api/bikes', (response) => {
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    })
}

$(document).ready(function () {
    console.log("JS loaded successfully"); // debugging line
    $('.materialboxed').materialbox();
    getBikes();
    $('.modal').modal();
})