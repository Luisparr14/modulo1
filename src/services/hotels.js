import axios from "@/config/axios";

export const getHotels = async () => {
  const { data: hotelsData } = await axios.get("/hotels");
  return hotelsData;
};

export const getHotel = async (id) => {
  const { data: hotelData } = await axios.get(`/hotels/${id}`);
  return hotelData;
};

export const createHotel = async (hotel) => {
  const { data: hotelData } = await axios.post("/hotels", hotel);
  return hotelData;
};

export const updateHotel = async (id, hotel) => {
  const { data: hotelData } = await axios.put(`/hotels/${id}`, hotel);
  return hotelData;
};

export const deleteHotel = async (id) => {
  const { data: hotelData } = await axios.delete(`/hotels/${id}`);
  return hotelData;
};
