import http from "./http";
import type BookType from "../interfaces/Book";

const BASE_URL = `https://us-central1-all-turtles-interview.cloudfunctions.net`;
const API_AUTH_KEY = "germanrdz";

const httpClient = http(BASE_URL, API_AUTH_KEY);

const getAllBooks = async () => httpClient.get("/books");
const createNewbook = async (data: BookType) => httpClient.post("/books", data);
const removeBook = async (bookId: string) =>
  httpClient.delete(`/books/${bookId}`);

export { getAllBooks, createNewbook, removeBook };
