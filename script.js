// Select the image element by its ID
const image = document.getElementById('myImage');

// Add an event listener for the 'mouseover' event to hide the image
image.addEventListener('mouseover', function() {
    image.style.display = 'none'; // Hide the image
});

// Add an event listener for the 'mouseout' event to show the image
image.addEventListener('mouseout', function() {
    image.style.display = 'block'; // Show the image again
});

