class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  login({ password, email }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        password,
        email,
      }),
    }).then(this._checkResponse);
  }

  signout(token) {
    return fetch(`${this._baseUrl}/signout`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  getClients(token) {
    return fetch(`${this._baseUrl}/clients`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  createClient({ email, phone }) {
    return fetch(`${this._baseUrl}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        phone,
      }),
    }).then(this._checkResponse);
  }

  updateClient({ email, phone, status, description, id }, token) {
    return fetch(`${this._baseUrl}/clients/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        phone,
        status,
        description,
      }),
    }).then(this._checkResponse);
  }

  deleteClient(clientId, token) {
    return fetch(`${this._baseUrl}/clients/${clientId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  getContent = (token) => {
    return fetch(`${this._baseUrl}/clients`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  };

  sendTelegramMsg({ email, phone }) {
    return fetch(`${this._baseUrl}/telegram`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        phone,
      }),
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
  }
}

export const MainApiSet = new MainApi({
  baseUrl: `${window.location.protocol}${
    process.env.REACT_APP_API_URL || "//localhost:3001"

  }`,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  credentials: "include",
});
