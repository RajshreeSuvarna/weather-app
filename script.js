
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".container").classList.remove("hidden");
    }, 2000);
});



const apiKey = '89ecfc285e4c1becc2dbdd863dc046a1'; 

document.getElementById('submitBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
    const errorMessage = document.getElementById('errorMessage');
    weatherInfo.classList.add('hidden');
    errorMessage.classList.add('hidden');

    if (!city) {
        errorMessage.textContent = "Please enter a city name.";
        errorMessage.classList.remove('hidden');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found.");
        }

        const data = await response.json();
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        weatherInfo.classList.remove('hidden');
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
    }
});




