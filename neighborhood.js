const restaurants = [
    'Red Lobster',
    'Stonefire Grill',
    'West Hills Pizza Company',
    'Al Italiano',
    'California Chicken Cafe',
    'Crave Cafe',
    'Mission Burrito',
    'Bellissimo Venice',
];

// Function to choose a random restaurant
function getRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    return randomRestaurant;
}

// Function to handle button click
function handleButtonClick() {
    const recommendation = getRandomRestaurant();
    document.getElementById('recommendation').innerText = `Recommended Restaurant: ${recommendation}`;
}

// Add event listener to the button
document.getElementById('recommendButton').addEventListener('click', handleButtonClick);