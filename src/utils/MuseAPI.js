class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getCompanyById(companyId) {
    return fetch(`${this._baseUrl}/companies/${companyId}`, {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

const BASE_URL = "https://www.themuse.com/api/public";

const api = new Api({
  baseUrl: BASE_URL,
});

export default api;
