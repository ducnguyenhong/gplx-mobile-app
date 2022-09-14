import axios from 'axios';

class API {
  request = config => {
    const {
      method = 'GET',
      url,
      params,
      baseURL = 'baseURL',
      headers,
    } = config;

    // console.log('API.Request:', `${baseURL}${url}`, params, method);

    let newHeaders = { 'Content-Type': 'application/json' };
    if (this.accessToken) {
      newHeaders.Authorization = `Bearer ${this.accessToken}`;
    }
    if (headers) {
      newHeaders = { ...newHeaders, ...headers };
    }

    const requestConfig = {
      method,
      url,
      baseURL,
      headers: newHeaders,
      timeout: 20000,
      timeoutErrorMessage: 'Quá thời gian chờ dịch vụ',
    };

    if (params) {
      if (typeof method === 'string' && method.toLowerCase().trim() === 'get') {
        requestConfig.params = params;
      } else {
        requestConfig.data = params;
      }
    }

    return axios(requestConfig)
      .then(response => {
        // console.log('API.response:', response);
        const { data, status, error } = response;

        if (status !== 200 && status !== 201) {
          throw Error(error);
        }

        return data;
      })
      .catch(error => {
        if (error?.response?.data) {
          return Promise.reject(error?.response?.data);
        }
        return Promise.reject(error);
      });
  };
}

export default new API();
