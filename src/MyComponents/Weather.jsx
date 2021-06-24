import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_key = "c062b3fce8c3d2bba22f0f082d0e141a";

export const Weather = async (city) => {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: "metric",
      APPID: API_key,
    },
  });
  return data;
};
