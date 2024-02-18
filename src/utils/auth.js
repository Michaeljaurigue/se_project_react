import { request } from "../utils/api";

// const baseUrl = "http://localhost:3001";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.devwonders.com"
    : "http://localhost:3001";

//deployed-backend-url is a URL to your deployed back end

// const baseUrl = "http://localhost:3001";

function signup(data) {
  const { name, avatar, email, password } = data;

  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, avatar, email, password }),
  });
}

function signin(user) {
  const { email, password } = user;

  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

function checkToken(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function updateUser(data) {
  const { name, avatar, token } = data;

  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
}

export { signup, signin, checkToken, updateUser };
