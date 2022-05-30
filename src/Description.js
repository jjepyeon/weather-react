import "./Description.css";

export default function Description() {
  let weatherData = {
    city: "Los Angeles, CA",
    date: "Monday 12:00",
    description: "Sunny",
  };

  return (
    <div className="Description">
      <span className="rightside">
        <h2>
          <ul>
            <li className="city">{weatherData.city}</li>
            <li className="date-time">{weatherData.date}</li>
            <li className="weatherDescription">{weatherData.description}</li>
          </ul>
        </h2>
      </span>
    </div>
  );
}
