let API_URL;

if (window.location.hostname === "localhost") {
  API_URL = "http://localhost:8000/api/";
} else {
  API_URL = "http://200.130.45.104:8000/api/";
}

export default API_URL;
