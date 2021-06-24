import "./App.css";
import React, { useState } from "react";
import Title from "./MyComponents/Title";
import { Weather } from "./MyComponents/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./MyComponents/Form";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (city) {
      const data = await Weather(city);

      setWeather(data);
      setCity("");
    } else {
      alert("Please enter your city");
    }

    if (!city) {
      <p>Sorry we couldn't find your search</p>;
    }
  };

  return (
    <>
      <Title title="Weather-App" />
      <Form
        city={city}
        onCityChange={setCity}
        weather={weather}
        search={search}
      />
    </>
  );
};

export default App;
