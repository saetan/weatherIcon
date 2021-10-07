import React from "react";
import "./styles.css";
import Weather from "./Weather";
import data from './weatherData'

const weathers = data.map((record, index) => {
  return <Weather key={index} {...record} />
});

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {weathers}
      </section>
    </div>
  );
}
