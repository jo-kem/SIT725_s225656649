const socket = io();
const psychedelicText = document.getElementById('psychedelic-text');

socket.on('colourChange', (data) => {
    console.log('Received colour change:', data);
    document.body.style.backgroundColor = data.background;
    document.body.style.color = data.text;
});

psychedelicText.addEventListener('mouseenter', (event) => {
    console.log('Mouse entered text:', event.clientX, event.clientY);
    socket.emit('mouseEntered');
});