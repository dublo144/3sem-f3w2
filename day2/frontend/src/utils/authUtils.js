const setToken = (token) => {
  localStorage.setItem('jwtToken', token);
};
const getToken = () => {
  return localStorage.getItem('jwtToken');
};

const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
};
const logout = () => {
  localStorage.removeItem('jwtToken');
};

export const authUtils = {
  setToken: setToken,
  getToken: getToken,
  loggedIn: loggedIn,
  logout: logout,
};
