const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://wtwrapp-54d924249a95.herokuapp.com"
    : "http://localhost:3001";

//deployed-backend-url is a URL to your deployed back end

// const baseUrl = "http://localhost:3001";

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

export async function request(url, options) {
  const res = await fetch(url, options);
  return processServerResponse(res);
}

function getCards() {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
}

function addCard(data, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
    id: data._id,
    name: data.name,
    link: data.link,
    weather: data.weather,
  });
}

function deleteCard(id, token) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function likeCard(id, token) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function unlikeCard(id, token) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

const api = {
  getCards,
  addCard,
  deleteCard,
  request,
  likeCard,
  unlikeCard,
};

export default api;
