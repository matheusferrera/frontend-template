import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const register = (email, name, username, password, password_confirmation) => {
  return axios.post(API_URL + "register", {
    email,
    name,
    username,
    password,
    password_confirmation,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then(response => {
      // console.log({ response });
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "logout");
};

const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Adicionando permissões de admin por enquanto
  if (user) {
    user.roles = ["ROLE_MODERATOR", "ROLE_ADMIN"];
  }

  return user || undefined; // Return an empty object if user is null or undefined
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
