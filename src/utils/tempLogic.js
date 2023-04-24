function convertTemp(temp, desiredUnit) {
  if (desiredUnit === "F") {
    return `${Math.round(temp)}°F`;
  } else if (desiredUnit === "C") {
    return `${Math.round(((temp - 32) * 5) / 9)}°C`;
  } else {
    return "Error: Something went terribly wrong.";
  }
}

function weatherTemp(temp) {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp <= 85) {
    return "warm";
  } else if (temp <= 65) {
    return "cold";
  }
}

export { convertTemp, weatherTemp };
