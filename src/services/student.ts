import { get, destroy, post, put } from "../utils/fetch";
import { studentsPath, studentsByIdPath } from "../constants/backendUrl";
const getStudentService = async () => {
  let response = [];
  try {
    const res = await get(studentsPath());
    response = res.payload;
  } catch (error) {}
  return response;
};

const deleteStudentService = async (id: string) => {
  let response = [];
  try {
    const res = await destroy(studentsByIdPath(id));
    response = res.payload;
  } catch (error) {}
  return response;
};
const createStudentService = async (data: any) => {
  let response = [];
  try {
    const res = await post(studentsPath(), data);
    response = res.payload;
  } catch (error) {}
  return response;
};
const editStudentService = async (data: any) => {
  let response = [];
  try {
    const res = await put(studentsByIdPath(data.id), data);
    response = res.payload;
  } catch (error) {}
  return response;
};
const findOneStudentService = async (id: string) => {
  let response = [];
  try {
    const res = await get(studentsByIdPath(id));
    response = res.payload;
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
