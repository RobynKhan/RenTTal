// main.js
function initializeAuthListeners(loggedInCallback, loggedOutCallback) {
    // Check if user is logged in and set UI accordingly
    if (isLoggedIn()) {
        loggedInCallback();
    } else {
        loggedOutCallback();
    }
}

// Implementing signIn function
function signIn() {
    // For demonstration purposes, let's assume successful login
    localStorage.setItem('loggedIn', 'true');
    setLoggedInUI();
}

// Implementing logout function
function logout() {
    // For demonstration purposes, let's assume successful logout
    localStorage.removeItem('loggedIn');
    setLoggedOutUI();
}

// Add other functions...

let loginBtn = document.querySelector('#loginBtn');
let logoutBtn = document.querySelector('#logoutBtn');

// Attach listeners
logoutBtn.addEventListener('click', logout);
loginBtn.addEventListener('click', signIn);
initializeAuthListeners(setLoggedInUI, setLoggedOutUI);

function setLoggedOutUI() {
    // Show logged out message
    alert('Logged Out!');
    // Update UI elements
    document.querySelector('#loginBtn').style.display = 'inline-block';
    document.querySelector('#logoutBtn').style.display = 'none';
}

function setLoggedInUI() {
    // Show logged in message
    alert('Logged In!');
    // Update UI elements
    document.querySelector('#loginBtn').style.display = 'none';
    document.querySelector('#logoutBtn').style.display = 'inline-block';
}
// Add other event listeners...
function search() {
    const searchKey = document.getElementById('searchKey').value.toLowerCase();
    const carCards = document.querySelectorAll('.car-card');

    carCards.forEach(carCard => {
        const carName = carCard.querySelector('.car-details h2').textContent.toLowerCase();
        if (carName.includes(searchKey)) {
            carCard.style.display = 'block';
        } else {
            carCard.style.display = 'none';
        }
    });
}

function handleReviewClick(carCard) {
    const reviewSection = carCard.querySelector('.review-section');
    if (reviewSection.style.display === 'none' || reviewSection.style.display === '') {
        reviewSection.style.display = 'block';
    } else {
        reviewSection.style.display = 'none';
    }
}

function submitReview(carName) {
    const reviewTextArea = document.querySelector(`.car-card[data-name="${carName}"] .review-section textarea`);
    const review = reviewTextArea.value.trim();
    if (review !== '') {
        // Here you can submit the review to your backend or handle it as needed
        alert(`Review for ${carName}: ${review} submitted successfully!`);
        reviewTextArea.value = ''; // Clear the textarea after submission
    } else {
        alert('Please enter a review before submitting.');
    }
}
