import { get, destroy, post, put } from "../utils/fetch";
import { roomsPath, roomsByIdPath } from "../constants/backendUrl";
const getRoomService = async () => {
  let response = [];
  try {
    response = await get(roomsPath());
    response = response.payload;
  } catch (error) {}
  return response;
};
const deleteRoomService = async (id: string) => {
  let response = [];
  try {
    response = await destroy(roomsByIdPath(id));
    response = response.payload;
  } catch (error) {}
  return response;
};
const createRoomService = async (data) => {
  let response = [];
  try {
    response = await post(roomsPath(), data);
    response = response.payload;
  } catch (error) {}
  return response;
};
const editRoomService = async (data) => {
  let response = [];
  try {
    response = await put(roomsByIdPath(data.id), data);
    response = response.payload;
  } catch (error) {}
  return response;
};

export {
  getRoomService,
  deleteRoomService,
  createRoomService,
  editRoomService,
};
