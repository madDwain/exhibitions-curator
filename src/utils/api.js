import axios from "axios";

const apikey = process.env.REACT_APP_HARVARD_API_KEY

const harvardAPI = axios.create({
  baseURL: "https://api.harvardartmuseums.org",
});

export function getObjects() {
  return harvardAPI.get(`/object`, {
    params: {
      apikey,
      hasimage: 1,
      page: 2,
      size: 5
    },
  });
}
