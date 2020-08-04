const baseUrl = 'http://localhost:3001/';

export class HttpService {
  static request = async (url, method = 'GET', body = null, options = {}) => {
    /**
     * @param {string} - url
     * @param {string} - method
     * @param {object} - body
     * @param {object} - options
     */
    const requestOptions = {
      method,
      ...options,
      headers: {
        'Content-type': 'application/json',
        ...options.headers,
      },
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`${baseUrl}${url}`, requestOptions);
    return this.parseResponse(response);
  };

  static parseResponse = (response) => {
    const { ok, statusText } = response;

    if (ok) {
      return response.json();
    }

    return Promise.reject(statusText);
  };

  static get = (url, options) => {
    return this.request(url, 'GET', null, options);
  };
}
