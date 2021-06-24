import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

export const Form = ({ city, onCityChange, weather, search }) => {
  const handleCityChange = useCallback(
    (e) => {
      onCityChange(e.target.value);
    },
    [onCityChange]
  );

  let headingstyle = {
    color: "darkblue",
  };

  let bgstyle = {
    backgroundColor: "rgb (245,245,245)",
    background: "rgba(245,245,245, 0.5)",
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6 col-10  offset-1 r-cell  mx-auto mb-5 "
            style={bgstyle}
          >
            <div className="form-group">
              <div className="input">
                <label htmlFor="city"></label>
                <input
                  type="text"
                  id="city"
                  className="search mx-auto"
                  placeholder="Enter your city"
                  value={city}
                  onChange={handleCityChange}
                />
                <button
                  type="submit"
                  className="btn btn-md btn-info ml-3"
                  onClick={() => search()}
                >
                  Get Weather
                </button>
              </div>
              {weather.main && (
                <div className="city">
                  <div className="city-day">
                    <h1 style={headingstyle}>{moment().format("dddd")}</h1>
                  </div>

                  <div className="city-date">
                    <h2 style={headingstyle}>{moment().format("LL")}</h2>
                  </div>

                  <h2 className="city-name">
                    <span>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                  </h2>

                  <div className="city-temp">
                    {weather.main.temp}
                    <sup>&deg;C</sup>
                  </div>

                  <div className="city-info">
                    <img
                      className="city-icon"
                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                    />
                    <p>{weather.weather[0].description}</p>
                    <div className="city-feels-like">
                      Feels like : {weather.main.feels_like}
                      <sup>&deg;C</sup>
                    </div>

                    <div className="city-pressure">
                      Pressure : {weather.main.pressure} hPa
                    </div>

                    <div className="city-humidity">
                      Humidity : {weather.main.humidity} %
                    </div>

                    <div className="city-wind">
                      Wind Speed : {weather.wind.speed} m/sec
                    </div>

                    <div className="city-cloud">
                      Cloudiness : {weather.clouds.all} %
                    </div>

                    <div className="city-sunrise">
                      <p>
                        Sunrise:{" "}
                        {new Date(
                          weather.sys.sunrise * 1000
                        ).toLocaleTimeString("en-IN")}
                      </p>
                    </div>

                    <div className="city-sunset">
                      <p>
                        Sunset:{" "}
                        {new Date(weather.sys.sunset * 1000).toLocaleTimeString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
