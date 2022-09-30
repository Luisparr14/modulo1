import axios from "../config/axios";

export const getHotels = async () => {
  const { data: hotelsData } = await axios.get("/hotels");
  return hotelsData;
};

export const getHotel = async (id) => {
  const { data: hotelData } = await axios.get(`/hotels/${id}`);
  return hotelData;
};
