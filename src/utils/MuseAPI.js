class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getJobsbyPage(pageNro) {
    return fetch(`${this._baseUrl}/jobs?page=${pageNro}`, {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getJobById(jobId) {
    return fetch(`${this._baseUrl}/jobs/${jobId}`, {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
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
