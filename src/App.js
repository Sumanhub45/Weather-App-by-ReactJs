import React, { useState, useEffect } from "react";
import "./app.css";

const App = () => {
  const [city, setCity] = useState("kolkata");
  const [cityname, setCityname] = useState("kolkata");
  const [alldata, setalldata] = useState([
    {
      city: "",
      cuntry: "",
      temp: 0,
      humidity: 0,
      pressure: 0,
      description: "",
      icon: "",
      feels_like: 0,
      wind_speed: 0,
      visibility: 0,
      temp_max: 0,

      temp_min: 0,
    },
  ]);

  const onsubmit = () => {
    setCityname(city);
  };

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5ce726745fe5b97106b1b29e4e0edee6`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setalldata([
          {
            city: data.name,
            cuntry: data.sys.country,
            temp: data.main.temp,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            feels_like: data.main.feels_like,
            wind: data.wind.speed,
            visibility: data.visibility,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cityname]);

  // const gettingdata = [alldata[0].city, alldata[0].temp, alldata[0].humidity, alldata[0].pressure, alldata[0].description, alldata[0].icon, alldata[0].feels_like, alldata[0].grnd_level, alldata[0].pressure, alldata[0].sea_level, alldata[0].temp_max, alldata[0].temp_min];

  console.log(alldata);
  return (



    <div className="container">
      <h1 className="header">Weather of {alldata[0].city}</h1>
      <h1 className="header"><input className="inputfield"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
  
      <button className="btn" type="submit" onClick={onsubmit}>
        Search
      </button></h1>

      {alldata.map((data) => {
        return (
          <div className="conn">

            <div className="card">
                <h5 className="card-title">City</h5>
                <h5 className="card-data">{data.city}</h5>
            </div>

            <div className="card">
                <h5 className="card-title">Country</h5>
                <h5 className="card-data">{data.cuntry}</h5>
            </div>

            <div className="card">
                <h5 className="card-title">Description</h5>
                <h5 className="card-data">{data.description}</h5>
            </div>



            <div className="card">
                <h5 className="card-title">Temperature</h5>
                <h5 className="card-data">{(data.temp - 273.15).toPrecision(4)}° C</h5>
            </div>

            <div className="card">
                <h5 className="card-title">Feels Like</h5>
                <h5 className="card-data">{(data.feels_like - 273.15).toPrecision(4)}° C</h5>
            </div>

            <div className="card">
                <h5 className="card-title">Humidity</h5>
                <h5 className="card-data">{data.humidity} %</h5>
            </div>

            <div className="card">
                <h5 className="card-title">Pressure</h5>
                <h5 className="card-data">{data.pressure} millibars</h5>
            </div>

            

           

            <div className="card">
                <h5 className="card-title">Wind Speed</h5>
                <h5 className="card-data">{data.wind} m/s</h5>
            </div>

            <div className="card">
                <h5 className="card-title">Visibility</h5>
                <h5 className="card-data">{data.visibility/1000} KM</h5>
            </div>

            <div className="card">
                <h5 className="card-title">Temp Max</h5>
                <h5 className="card-data">{(data.temp_max - 273.15).toPrecision(4)}° C</h5>
            </div>

            <div className="card">
                <h5 className="card-title">Temp Min</h5>
                <h5 className="card-data">{(data.temp_min - 273.15).toPrecision(4)}° C</h5>
            </div>

          </div>
        );
      })}
    </div>




  );
};

export default App;
