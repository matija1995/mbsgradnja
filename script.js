// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    // Function to switch images
    const showImage = (index) => {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    };

    // Start with the first image
    showImage(currentIndex);

    // Change image every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);
});

// Form submission simulation
function sendMail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const mailtoLink = `mailto:gradnja.mbs@gmail.com?subject=Upit od ${name}&body=${message}%0A%0AEmail: ${email}`;
    window.location.href = mailtoLink;
}