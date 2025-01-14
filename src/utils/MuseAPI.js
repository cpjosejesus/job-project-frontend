class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getJobsbyPage(pageNro, filters = {}) {
    const queryParams = new URLSearchParams({
      page: pageNro,
      ...filters,
    }).toString();

    return fetch(`${this._baseUrl}/jobs?${queryParams}`, {
      method: "GET",
    }).then(this._handleResponse);
  }

  getJobById(jobId) {
    return fetch(`${this._baseUrl}/jobs/${jobId}`, {
      method: "GET",
    }).then(this._handleResponse);
  }

  getCompanies(page) {
    return fetch(`${this._baseUrl}/companies?page=${page}`).then(this._handleResponse);
  }

  getCompanyById(companyId) {
    return fetch(`${this._baseUrl}/companies/${companyId}`, {
      method: "GET",
    }).then(this._handleResponse);
  }
}

const BASE_URL = "https://www.themuse.com/api/public";

const api = new Api({
  baseUrl: BASE_URL,
});

export default api;
