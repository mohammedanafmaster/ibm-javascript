function showweatherDetails(event) {
    let apiKey = "0aaa5290d6aed178a89e116b5151b826";
    // let city = document.getElementById("city").value;
    let lat = parseFloat(document.getElementById("lat").value);
    let lon = parseFloat(document.getElementById("lon").value);
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Practice task
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                 <p>Temperature: ${data.main.temp} &#8451;</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error("Error is:", error);
        let weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    })

    event.preventDefault();
}

document.getElementById("weatherForm").addEventListener("submit", showweatherDetails);