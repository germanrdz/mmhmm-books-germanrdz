import axios from "axios";

const httpClient = (baseUrl: string, authKey: string) => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: authKey },
  });

  return instance;
};

export default httpClient;
