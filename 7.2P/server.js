const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

PORT = 3000;
app.use(express.static('public'));

// Function to randomly change the background colour
const changeColour = function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // If the text color is too similar to the background, change it to white or black for better visibility
    const r = parseInt(randomColor.substring(0, 2), 16);
    const g = parseInt(randomColor.substring(2, 4), 16);
    const b = parseInt(randomColor.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    textColour = brightness > 125 ? 'black' : 'white';

    console.log('New Colour:', randomColor);

    return { background: `#${randomColor}`, text: textColour };
};

// Socket.io setup
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('mouseEntered', () => {
        // Calculate new colour
        const colours = changeColour();

        // Send the new colours back to the client that moved the mouse
        socket.emit('colourChange', colours);

    });

});

// Start the server
http.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});