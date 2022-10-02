import axios from "@/config/axios";

export const getCities = async () => {
  const { data: citiesData } = await axios.get("/cities");
  return citiesData;
};
