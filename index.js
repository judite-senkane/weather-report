var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prompts from 'prompts';
import fetch from 'node-fetch';
const apiKey = '8bb8423d67fc4ae47d9b057d62fa7d3d';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prompts({
        type: 'text',
        name: 'city',
        message: 'Enter a city: ',
    });
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${response.city}&appid=${apiKey}&units=metric`;
    const report = yield fetch(apiUrl);
    const data = (yield report.json());
    console.log(`Weather in ${data.name}: Currently it is ${data.weather[0].description} with ${Math.round(data.main.temp)}ºC and humidity of ${data.main.humidity}%. Wind is ${data.wind.speed}m/s.`);
}))();
