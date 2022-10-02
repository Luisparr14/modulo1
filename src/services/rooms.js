import axios from "@/config/axios";

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

export const createRoom = async (room) => {
  const { data: roomData } = await axios.post("/rooms", room);
  return roomData;
};

export const updateRoom = async (idRoom, room) => {
  const { data: roomData } = await axios.put(`/rooms/${idRoom}`, room);
  return roomData;
};

export const deleteRoom = async (idRoom) => {
  const { data: roomData } = await axios.delete(`/rooms/${idRoom}`);
  return roomData;
};
