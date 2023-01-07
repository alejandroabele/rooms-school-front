import { get, destroy, post, put } from "../utils/fetch";
import { roomsPath, roomsByIdPath } from "../constants/backendUrl";
const getRoomService = async () => {
  let response = [];
  try {
    const res = await get(roomsPath());
    response = res.payload;
  } catch (error) {}
  return response;
};
const deleteRoomService = async (id: string) => {
  let response = [];
  try {
    const res = await destroy(roomsByIdPath(id));
    response = res.payload;
  } catch (error) {}
  return response;
};
const createRoomService = async (data: any) => {
  let response = [];
  try {
    const res = await post(roomsPath(), data);
    response = res.payload;
  } catch (error) {}
  return response;
};
const editRoomService = async (data: any) => {
  let response = [];
  try {
    const res = await put(roomsByIdPath(data.id), data);
    response = res.payload;
  } catch (error) {}
  return response;
};

export {
  getRoomService,
  deleteRoomService,
  createRoomService,
  editRoomService,
};
