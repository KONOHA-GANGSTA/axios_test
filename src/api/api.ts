import axios from "axios";
import { headers } from "./headers";
import { GAMES } from "./paths";

const api = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  timeout: 10000,
  headers,
});

export const getGames = () => api.get(GAMES);
