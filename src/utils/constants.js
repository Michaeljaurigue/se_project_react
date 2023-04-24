const APIKey = "c553027043dfdc7c00ce9652c14c6e44";
const latitude = 41.8781;
const longitude = -87.623177;

const defaultClothingItems = [
  {
    id: 0,
    name: "Beanie",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Beanie.png?etag=bc10497cc80fa557f036e94f9999f7b2",
  },
  {
    id: 1,
    name: "Boot",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Boot.png?etag=0953a2ea59f1c6ebc832fabacdc9c70e",
  },
  {
    id: 2,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    id: 3,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
  {
    id: 4,
    name: "Dress",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Dress.png?etag=1f9cd32a311ab139cab43494883720bf",
  },
  {
    id: 5,
    name: "Hoodie",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    id: 6,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    id: 7,
    name: "Jeans",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jeans.png?etag=58345e8bef1ce5f95ac882e71d309e6c",
  },
  {
    id: 8,
    name: "Loafers",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Loafers.png?etag=dc2d6e1ca7b297597406e35c40aef030",
  },
  {
    id: 9,
    name: "Sandals",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sandals.png?etag=9bea85a77c0306586d2b71a33b626d41",
  },
  {
    id: 10,
    name: "Scarf",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Scarf.png?etag=74efbee93810c926b5507e862c6cb76c",
  },
  {
    id: 11,
    name: "Shorts",
    weather: "Hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Shorts.png?etag=d728c496643f610de8d8fea92dd915ba",
  },
  {
    id: 12,
    name: "Skirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Skirt.png?etag=27a6bea7e1b63218820d615876fa31d1",
  },
  {
    id: 13,
    name: "Sneakers",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    id: 14,
    name: "Sunglasses",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sunglasses.png?etag=a1bced9e331d36cb278c45df51150432",
  },
  {
    id: 15,
    name: "Sweatshirt",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sweatshirt.png?etag=008a9674757bea2e0bdb31242e364be0",
  },
  {
    id: 16,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
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
