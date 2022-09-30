import axios from "../config/axios";

export const getRooms = async (hotelId) => {
  const { data: roomsData } = await axios.get(`/rooms/${hotelId}`);
  return roomsData;
};

export const getRoom = async (idRoom) => {
  const { data: roomData } = await axios.get(`/rooms/show/${idRoom}`);
  return roomData;
};

export const getRoomTypes = async () => {
  const { data: roomTypesData } = await axios.get("/room-types");
  return roomTypesData;
};
