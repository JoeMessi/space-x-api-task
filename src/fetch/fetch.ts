import axios from "axios";
import { URLS } from "./urls";

export interface Rocket {
  rocket_id: string;
  flickr_images: string;
  rocket_name: string;
  description: string;
  wikipedia: string;
}

export interface History {
  id: string;
  details: string;
}

export const fetchRockets = async (): Promise<Rocket[]> => {
  try {
    const response = await axios.get<Rocket[]>(URLS.rockets);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchHistory = async (): Promise<History[]> => {
  try {
    const response = await axios.get<History[]>(URLS.history);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
