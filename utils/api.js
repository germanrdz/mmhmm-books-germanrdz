import http from "./http";

const BASE_URL = `https://us-central1-all-turtles-interview.cloudfunctions.net`;
const API_AUTH_KEY = "germanrdz";

const httpClient = http(BASE_URL, API_AUTH_KEY);

const getAllBooks = async () => httpClient.get("/books");
const createNewbook = async (data) => httpClient.post("/books", data);

export { getAllBooks, createNewbook };
