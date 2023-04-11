const APIKey = "c553027043dfdc7c00ce9652c14c6e44";
const latitude = 38.8951;
const longitude = -77.0364;

const defaultClothingItems = [
  {
    id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

const weatherImages = [
  {
    type: "Clear",
    day: true,
    url: "../../images/weather-conditions-png/day/Day_Clear.png",
  },
  {
    type: "Clouds",
    day: true,
    url: "../../images/weather-conditions-png/day/Day_Cloudy.png",
  },
  {
    type: "Rain",
    day: true,
    url: "../../images/weather-conditions-png/day/Day_Rain.png",
  },
  {
    type: "Thunderstorm",
    day: true,
    url: "../../images/weather-conditions-png/day/Day_Thunderstorm.png",
  },
  {
    type: "Snow",
    day: true,
    url: "../../images/weather-conditions-png/day/Day_Snow.png",
  },
  {
    type: "Fog",
    day: true,
    url: "../../images/weather-conditions-png/day/Day_Fog.png",
  },
  {
    type: "Mist",
    day: true,
    url: "../../images/weather-conditions-png/day/Day_Fog.png",
  },
  {
    type: "Clear",
    day: false,
    url: "../../images/weather-conditions-png/night/Night_Clear.png",
  },
  {
    type: "Clouds",
    day: false,
    url: "../../images/weather-conditions-png/night/Night_Cloudy.png",
  },
  {
    type: "Rain",
    day: false,
    url: "../../images/weather-conditions-png/night/Night_Rain.png",
  },
  {
    type: "Thunderstorm",
    day: false,
    url: "../../images/weather-conditions-png/night/Night_Thunderstorm.png",
  },
  {
    type: "Snow",
    day: false,
    url: "../../images/weather-conditions-png/night/Night_Snow.png",
  },
  {
    type: "Fog",
    day: false,
    url: "../../images/weather-conditions-png/night/Night_Fog.png",
  },
  {
    type: "Mist",
    day: false,
    url: "../../images/weather-conditions-png/night/Night_Fog.png",
  },
];

const weatherOptions = [
  {
    id: 1,
    url: require("../images/weather-conditions/day-sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    id: 2,
    url: require("../images/weather-conditions/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    id: 3,
    url: require("../images/weather-conditions/day-fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    id: 4,
    url: require("../images/weather-conditions/day-rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    id: 5,
    url: require("../images/weather-conditions/day-snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    id: 6,
    url: require("../images/weather-conditions/day-storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    id: 7,
    url: require("../images/weather-conditions/night-clear.svg").default,
    day: false,
    type: "clear",
  },
  {
    id: 8,
    url: require("../images/weather-conditions/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    id: 9,
    url: require("../images/weather-conditions/night-fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    id: 10,
    url: require("../images/weather-conditions/night-rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    id: 11,
    url: require("../images/weather-conditions/night-snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    id: 12,
    url: require("../images/weather-conditions/night-storm.svg").default,
    day: false,
    type: "storm",
  },
];

export {
  defaultClothingItems,
  longitude,
  latitude,
  APIKey,
  weatherImages,
  weatherOptions,
};
