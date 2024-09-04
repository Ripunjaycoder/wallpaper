// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a confirmation message
    const formResponse = document.getElementById('formResponse');
    formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;

    // Clear the form
    document.getElementById('contactForm').reset();
});

// JavaScript for downloading wallpapers
document.querySelectorAll('.wallpaper img').forEach(img => {
    img.addEventListener('click', () => {
        const url = img.src;
        const link = document.createElement('a');
        link.href = url;
        link.download = url.substring(url.lastIndexOf('/') + 1);
        link.click();
    });
});
