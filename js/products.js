// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
    // Call the handleImageHover function for each product image
    handleImageHover('.product-image', '../images/SuperNES6.jpg');
    handleImageHover('.product-image2', '../images/SuperNES7.png');
    handleImageHover('.product-image3', '../images/SuperNES8.Jpeg');
    handleImageHover('.product-image4', '../images/Linktothepast.jpeg');
    handleImageHover('.product-image5', '../images/MarioWorldbox.jpeg');
    handleImageHover('.product-image6', '../images/SuperMarioKart.png');
    handleImageHover('.product-image7', '../images/ChronoTrigger1.jpg');
    handleImageHover('.product-image8', '../images/DonkeyKongCountryGP.png');
    handleImageHover('.product-image9', '../images/DonkeyKongCountry2GP.jpg');
    handleImageHover('.product-image10', '../images/FF4GP.png');
    handleImageHover('.product-image11', '../images/FF6GP.png');
    handleImageHover('.product-image12', '../images/MegaManX2GP.png');
    handleImageHover('.product-image13', '../images/MortalKombat2GP.jpg');
    handleImageHover('.product-image14', '../images/StarFoxGP.png');
    handleImageHover('.product-image15', '../images/SuperCastlevania4GP.png');
    handleImageHover('.product-image16', '../images/SuperMetroidGP.png');
    handleImageHover('.product-image17', '../images/SuperStreetFighter2GP.png');
    handleImageHover('.product-image18', '../images/TetrisAttackGP.jpg');
});

// Function to handle image hover effect
function handleImageHover(selector, newImage) {
    // Get all elements with the specified selector
    const productImages = document.querySelectorAll(selector);

    // Iterate over each product image
    productImages.forEach(function (image) {
        let originalImage;

        // Add event listener for mouseover event
        image.addEventListener('mouseover', function () {
            // Store the original background image
            originalImage = getComputedStyle(image).backgroundImage;
            // Add a CSS class to apply hover effect
            image.classList.add('image-hover');
            // Change the background image to the new image
            image.style.backgroundImage = `url("${newImage}")`;
        });

        // Add event listener for mouseout event
        image.addEventListener('mouseout', function () {
            // Remove the CSS class for hover effect
            image.classList.remove('image-hover');
            // Restore the original background image
            image.style.backgroundImage = originalImage;
        });
    });
}
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    // Hide the popup after 2 seconds (adjust as needed)
    setTimeout(function () {
        popup.style.display = "none";
    }, 2000);
}

// Attach the showPopup function to all buttons with class "add-to-cart"
var buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach(function (button) {
    button.addEventListener("click", showPopup);
});