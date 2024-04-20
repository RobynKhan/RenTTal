async function fetchData() {
    try {
        const response = await fetch('cars.json');
        const data = await response.json();
        displayCarShowcase(data); // Change to pass the entire data object
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error in a user-friendly way
    }
}

function displayCarShowcase(carData) {
    const carGrid = document.getElementById('carGrid');
    carGrid.innerHTML = '';

    carData.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');

        const image = document.createElement('img');
        image.src = car.image;
        image.alt = car.Name;
        carCard.appendChild(image);

        const carDetails = document.createElement('div');
        carDetails.classList.add('car-details');

        const name = document.createElement('h2');
        name.textContent = car.Name;
        carDetails.appendChild(name);

        const type = document.createElement('p');
        type.textContent = `Type: ${car.Type}`;
        carDetails.appendChild(type);

        const price = document.createElement('p');
        price.textContent = `Daily Price: $${car.DailyPrice}`;
        carDetails.appendChild(price);

        const Mprice = document.createElement('p');
        Mprice.textContent = `Monthly Haul: $${car.MonthlyHaul}`;
        carDetails.appendChild(Mprice);

        const Wprice = document.createElement('p');
        Wprice.textContent = `Weekly Price: $${car.WeeklyPrice}`;
        carDetails.appendChild(Wprice);

        const seats = document.createElement('p');
        seats.textContent = `Number of Seats: ${car['Number of seats']}`;
        carDetails.appendChild(seats);

        const bookNowBtn = document.createElement('button');
        bookNowBtn.textContent = 'Book Now';
        bookNowBtn.classList.add('book-now-btn');
        bookNowBtn.addEventListener('click', () => {
            if (isLoggedIn()) {
                alert('Booking action can proceed!');
            } else {
                alert('Please log in to book this car.');
            }
        });
        carDetails.appendChild(bookNowBtn);

        const reviewBtn = document.createElement('button');
        reviewBtn.textContent = 'Review';
        reviewBtn.classList.add('review-btn');
        reviewBtn.addEventListener('click', () => {
            toggleReviewSection(carCard);
        });
        carDetails.appendChild(reviewBtn);

        const reviewSection = document.createElement('div');
        reviewSection.classList.add('review-section');
        reviewSection.style.display = 'none'; // Hide review section by default
        reviewSection.innerHTML = `
            <textarea placeholder="Write your review here"></textarea>
            <button onclick="submitReview('${car.Name}')">Submit Review</button>
        `;
        carDetails.appendChild(reviewSection);

        carCard.appendChild(carDetails);
        carGrid.appendChild(carCard);
    });
}

function toggleReviewSection(carCard) {
    const reviewSection = carCard.querySelector('.review-section');
    if (reviewSection.style.display === 'none' || reviewSection.style.display === '') {
        reviewSection.style.display = 'block';
    } else {
        reviewSection.style.display = 'none';
    }
}


// Dummy submitReview function
function submitReview(carName) {
    // Replace with your actual review submission logic
    console.log('Submitting review for', carName);
}
// Fetch data on page load
fetchData();
