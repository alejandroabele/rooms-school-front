import { get, destroy, post, put } from "../utils/fetch";
import { studentsPath, studentsByIdPath } from "../constants/backendUrl";
const getStudentService = async () => {
  let response = [];
  try {
    response = await get(studentsPath());
    response = response.payload;
  } catch (error) {}
  return response;
};

const deleteStudentService = async (id: string) => {
  let response = [];
  try {
    response = await destroy(studentsByIdPath(id));
    response = response.payload;
  } catch (error) {}
  return response;
};
const createStudentService = async (data) => {
  let response = [];
  try {
    response = await post(studentsPath(), data);
    response = response.payload;
  } catch (error) {}
  return response;
};
const editStudentService = async (data) => {
  let response = [];
  try {
    response = await put(studentsByIdPath(data.id), data);
    response = response.payload;
  } catch (error) {}
  return response;
};
const findOneStudentService = async (id: string) => {
  let response = [];
  try {
    response = await get(studentsByIdPath(id));
    response = response.payload;
  } catch (error) {}
  return response;
};
export {
  getStudentService,
  deleteStudentService,
  createStudentService,
  editStudentService,
  findOneStudentService,
};
