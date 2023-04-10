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

// const weatherImages = [
//   {
//     type: "Clear",
//     day: true,
//     url: require("./images/weather-conditions-png/day/Day_Clear.png").default,
//   },
//   {
//     type: "Clouds",
//     day: true,
//     url: require("./images/weather-conditions-png/day/Day_Cloudy.png").default,
//   },
//   {
//     type: "Rain",
//     day: true,
//     url: require("./images/weather-conditions-png/day/Day_Rain.png").default,
//   },
//   {
//     type: "Thunderstorm",
//     day: true,
//     url: require("./images/weather-conditions-png/day/Day_Thunderstorm.png")
//       .default,
//   },
//   {
//     type: "Snow",
//     day: true,
//     url: require("./images/weather-conditions-png/day/Day_Snow.png").default,
//   },
//   {
//     type: "Fog",
//     day: true,
//     url: require("./images/weather-conditions-png/day/Day_Fog.png").default,
//   },
//   {
//     type: "Mist",
//     day: true,
//     url: require("./images/weather-conditions-png/day/Day_Fog.png").default,
//   },
//   {
//     type: "Clear",
//     day: false,
//     url: require("./images/weather-conditions-png/night/Night_Clear.png")
//       .default,
//   },
//   {
//     type: "Clouds",
//     day: false,
//     url: require("./images/weather-conditions-png/night/Night_Cloudy.png")
//       .default,
//   },
//   {
//     type: "Rain",
//     day: false,
//     url: require("./images/weather-conditions-png/night/Night_Rain.png")
//       .default,
//   },
//   {
//     type: "Thunderstorm",
//     day: false,
//     url: require("./images/weather-conditions-png/night/Night_Thunderstorm.png")
//       .default,
//   },
//   {
//     type: "Snow",
//     day: false,
//     url: require("./images/weather-conditions-png/night/Night_Snow.png")
//       .default,
//   },
//   {
//     type: "Fog",
//     day: false,
//     url: require("./images/weather-conditions-png/night/Night_Fog.png")
//       .default,
//   },
//   {
//     type: "Mist",
//     day: false,
//     url: require("./images/weather-conditions-png/night/Night_Fog.png")
//       .default,
//   },
// ];

export { defaultClothingItems, longitude, latitude, APIKey };
