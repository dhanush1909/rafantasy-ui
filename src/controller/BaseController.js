import axios from "axios";

const BASE_URL = "http://localhost:8000/api"; //TODO: Move host and port to .env file

export default class BaseController {
  constructor(url) {
    this.api = axios.create({
      baseURL: BASE_URL + url,
      headers: {
        Accept: "application/json",
      },
    });
  }
}