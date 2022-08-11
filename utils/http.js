import axios from "axios";

const httpClient = (baseUrl, authKey) => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: authKey },
  });

  return instance;
};

export default httpClient;
