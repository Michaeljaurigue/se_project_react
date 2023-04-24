const baseUrl =
  "https://my-json-server.typicode.com/Michaeljaurigue/se_project_react";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

function getCards() {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
}

function addCard(data) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    id: data.id,
    name: data.name,
    link: data.link,
    weather: data.weather,
  });
}

function deleteCard(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

export { getCards, addCard, deleteCard };
