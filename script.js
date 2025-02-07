document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "./assets/garrett_image2.jpg","./assets/shirt1.jpg", "./assets/shirt2.jpg", "./assets/shirt3.jpg", "./assets/shirt4.jpg", 
        "./assets/shirt5.jpg", "./assets/shirt6.jpg", "./assets/shirt7.jpg"
    ];
    let currentIndex = 0;

    const imgElement = document.getElementById('currentImage');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Function to update the image
    function updateImage(index) {
        if (index >= 0 && index < images.length) {
            imgElement.src = images[index];
            currentIndex = index;
        }
    }

    // Event listeners for navigation
    prevButton.addEventListener('click', () => {
        updateImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        updateImage(currentIndex + 1);
    });

    // Initial image setting
    updateImage(currentIndex);

    document.getElementById('currentYear').textContent = new Date().getFullYear();
});