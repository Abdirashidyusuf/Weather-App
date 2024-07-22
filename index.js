const weatherResult=document.getElementById("weatharResult");

document.getElementById("getWeather").addEventListener("click", () => {
    const cityName = document.getElementById("cityName").value;
    if (cityName) {
        getWeatherData(cityName);
    }
});

const getWeatherData = async (city) => {
    const apiKey = "c6af0021be508b92df4690e1b119d5bc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeatherInfo(data);
    } catch (error) {
        alert(error.message);
    }
};

const displayWeatherInfo = (data) => {
    weatherResult.innerHTML = "";
    
    const city = document.createElement("h3");
    city.textContent = data.name;
    city.classList.add("city");
    weatherResult.appendChild(city);

    const date = document.createElement("p");
    date.textContent = new Date().toLocaleString();
    date.classList.add("date");
    weatherResult.appendChild(date);

    const img = document.createElement("img");
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherResult.appendChild(img);

    const temperature = document.createElement("p");
    temperature.textContent = `${data.main.temp}°C`;
    temperature.classList.add("temperature");
    weatherResult.appendChild(temperature);

    const description = document.createElement("p");
    description.textContent = data.weather[0].description;
    description.classList.add("description");
    weatherResult.appendChild(description);

    const windSpeed = document.createElement("p");
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    windSpeed.classList.add("windSpeed");
    weatherResult.appendChild(windSpeed);

};
