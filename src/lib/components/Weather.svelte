<script>
  import { onMount } from "svelte";

  let weatherData = null;
  let weatherImage = "/images/default-weather.jpg";

  const apiKey = "438fb00ecad368f09662b161c4ca6847";
  const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  const location = "Zurich,CH";

  async function fetchWeather() {
    try {
      const response = await fetch(
        `${apiEndpoint}?q=${location}&units=metric&appid=${apiKey}`,
      );
      if (!response.ok) throw new Error("Fehler beim Abrufen der Wetterdaten");
      const data = await response.json();
      weatherData = {
        temp: data.main.temp,
        description: data.weather[0].description,
      };

      if (data.weather[0].main === "Clear") {
        weatherImage = "/images/sunny.jpg";
      } else if (data.weather[0].main === "Clouds") {
        weatherImage = "/images/cloudy.jpg";
      } else if (data.weather[0].main === "Rain") {
        weatherImage = "/images/rainy.jpg";
      } else {
        weatherImage = "/images/default-weather.jpg";
      }
    } catch (error) {
      console.error(error);
      weatherData = null;
    }
  }

  onMount(fetchWeather);
</script>

<div class="weather-container">
  {#if weatherData}
    <h2>Current Weather</h2>
    <img src={weatherImage} alt="Weather condition" class="weather-image" />
    <p>
      <strong>Temperature:</strong>
      {weatherData.temp}°C<br />
      <strong>Condition:</strong>
      {weatherData.description}
    </p>
  {:else}
    <p>Loading weather data...</p>
  {/if}
</div>

<style>
  .weather-container {
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #81caf5;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    max-width: 400px;
  }

  .weather-image {
    max-width: 200px;
    margin: 10px auto;
    display: block;
  }
</style>
