import React, { useEffect, useState } from "react";
import "./WeatherCard.css";
import { weatherImages } from "../../utils/constants";
import imageError from "../../images/question.png";

function WeatherCard({ weatherData, deg }) {
  const [backImage, setBackImage] = useState(imageError);
  const [backColor, setBackColor] = useState(
    weatherData.isDay ? "rgba(0, 163, 255, 1)" : "rgba(40, 104, 151, 1)"
  );
  const [backImageObject, setBackImageObject] = useState();

  useEffect(() => {
    setBackImageObject(
      weatherImages.find((item) => {
        return (
          item.condition === weatherData.condition &&
          item.isDay === weatherData.isDay
        );
      })
    );
    setBackColor(
      weatherData.isDay ? "rgba(0, 163, 255, 1)" : "rgba(40, 104, 151, 1)"
    );
  }, [weatherData.condition, weatherData.isDay]); //whenever weatherData.condition or weatherData.isDay changes, useEffect will run

  useEffect(() => {
    if (typeof backImageObject !== "undefined") {
      setBackImage(backImageObject.image); //image is a property of backImageObject
    }
  }, [backImageObject]);

  return (
    <div
      className="weather"
      style={{
        backgroundColor: backColor, //backColor is a state
        backgroundImage: `url(${backImage})`, //backImage is a state
      }}
    >
      <p className="weather__info">{deg}</p>
      <br></br>
    </div>
  );
}

export default WeatherCard;
