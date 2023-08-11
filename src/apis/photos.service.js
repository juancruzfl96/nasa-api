import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const PhotosService = {
  getPhotos: async ({ rover = "", date, camera = "", page = 1, sol }) => {
    let cameraParam = "";
    let solParam = "";
    let dateParam = "";
    if (camera) {
      cameraParam = `&camera=${camera}`;
    }
    if (sol) {
      solParam = `&sol=${sol}`;
    }
    if (date) {
      dateParam = `&earth_date=${date}`;
    }
    const response = await axios.get(
      `${baseUrl}/mars-photos/api/v1/rovers/${rover}/photos?${dateParam}${solParam}${cameraParam}&page=${page}&api_key=${apiKey}`
    );
    return response;
  },
};
