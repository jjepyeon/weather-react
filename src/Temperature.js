import Description from "./Description";
import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    temperature: 88,
    humidity: 0,
    wind: 5,
  };

  return (
    <div className="Temperature">
      <div className="mainweathericon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="weather icon"
        />
      </div>
      <span className="rightside">
        <h1>
          <li className="topinfo">
            <span id="temperature">{weatherData.temperature}</span>
            <span className="units">°F</span>
          </li>
          <li className="xtrainfo" id="humidity">
            Humidity: {weatherData.humidity}
          </li>
          <li className="xtrainfo" id="wind">
            Wind: {weatherData.wind} mph
          </li>
        </h1>
      </span>
      <Description />
    </div>
  );
}
