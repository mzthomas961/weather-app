import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2f0e069ac3ef5d3a32d0ab39b498133c&units=imperial`);
      const data = await response.json();
      setWeather(data);
    });
  }, []);

  if (!weather.main) {
    return <div>Loading...</div>;
  }
  console.log(weather)

  return (
    <div>
      <div>{weather.name}</div>
      <div>{weather.main.temp}°F</div>
    </div>
  );
}

export default Weather;
