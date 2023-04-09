import prompts from 'prompts';
import fetch from 'node-fetch';

const apiKey = '8bb8423d67fc4ae47d9b057d62fa7d3d';

type WeatherInformation = {
  temp: number;
  humidity: number;
};

type WindInformation = {
  speed: number;
};

type WeatherDescription = [
  {
    description: string;
  }
];
type CityDataResponse = {
  main: WeatherInformation;
  wind: WindInformation;
  weather: WeatherDescription;
  name: string;
};

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'city',
    message: 'Enter a city: ',
  });

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${response.city}&appid=${apiKey}&units=metric`;
  const report = await fetch(apiUrl);
  const data: CityDataResponse = (await report.json()) as CityDataResponse;

  console.log(
    `Weather in ${data.name}: Currently it is ${
      data.weather[0].description
    } with ${Math.round(data.main.temp)}ºC and humidity of ${
      data.main.humidity
    }%. Wind is ${data.wind.speed}m/s.`
  );
})();
