// const baseUrl = "http://localhost:3001";
const baseUrl =
  "https://my-json-server.typicode.com/Michaeljaurigue/se_project_react";

const processServerResponse = (res) => {
  if (res.ok) {
    try {
      return res.json();
    } catch (error) {
      return Promise.reject(`Error parsing response: ${error}`);
    }
  } else {
    return Promise.reject(`Network error: ${res.status}`);
  }
};

async function request(url, options) {
  const res = await fetch(url, options);
  return processServerResponse(res);
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

const api = {
  getCards,
  addCard,
  deleteCard,
};

export default api;
