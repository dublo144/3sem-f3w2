import { authUtils } from './authUtils';

const baseURL = 'http://localhost:8080/security_war_exploded';

const fetchData = () => {
  const options = makeOptions('GET', true); //True add's the token
  return fetch(baseURL + '/api/info/user', options).then(handleHttpErrors);
};

const handleHttpErrors = (res) => {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
};

const makeOptions = (method, addToken, body) => {
  var opts = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  };
  if (addToken && authUtils.loggedIn()) {
    opts.headers['x-access-token'] = authUtils.getToken();
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};

export const apiUtils = {
  fetchData: fetchData,
  handleHttpErrors: handleHttpErrors,
  makeOptions: makeOptions,
};
