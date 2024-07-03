// Function to setup the navigation menu
function setupNavigation() {
    const header = document.getElementById('mainHeader');
    header.innerHTML = `
        <nav>
            <ul class="horizontal-list">
                <li><a href="home.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;
}

// Function to setup the footer
function setupFooter() {
    const footer = document.getElementById('mainFooter');
    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} Super NES Website. All rights reserved.</p>
    `;
}

// Setup the navigation menu and footer
setupNavigation();
setupFooter();

// Navigate to the home page on DOMContentLoaded event

