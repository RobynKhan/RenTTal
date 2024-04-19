const options = {
    method: 'GET',
    headers: {
        'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYnluQG1heWFyby5jb20iLCJkaXNwbGF5X25hbWUiOiJSb2J5biBLaGFuIiwiYXZhdGFyIjpudWxsLCJ1c2VyX25hbWUiOm51bGwsImlkIjoidXM2Y2xvZHI3dHNpeGtpOSIsInJvbGVzIjoib3JnLWxldmVsLXZpZXdlciIsInRva2VuX3ZlcnNpb24iOiJlMDRhZmI3OWI1OGVmMDE3OGUxNmMzMTM5Njg3NWYxNDllY2FkYWJlMjAwZGJjZTkzNDQ4ZDY2M2IxNzEyNGZjMjA2NmJmZTFhMmIxZjNlNSIsImlhdCI6MTcxMzU0MDEwMiwiZXhwIjoxNzEzNTc2MTAyfQ.cleZD1-dfxhnNNLym1757JBup-UZkwmQxWLtuV8twH4'
    }
};

async function fetchData() {
    try {
        const response = await fetch('https://app.nocodb.com/api/v2/tables/mdqvtex3bchxrn9/records?offset=0&limit=50&where=&viewId=vwd7ug8vk1s1433o', options);
        const data = await response.json();
        displayCarShowcase(data.list);
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
                // Proceed with booking action
                alert('Booking action can proceed!');
            } else {
                // Prompt user to log in
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

// Fetch data on page load
fetchData();
