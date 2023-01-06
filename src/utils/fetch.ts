import axios from "axios";
import { urlConfig } from "../config";
export const get = async (url: string) => {
  let res;

  try {
    await axios
      .get(urlConfig + url)
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        //Expired/not valid token
        if (err.response.status === 402) {
          window.location.href = "/login";
        } else {
          throw err;
        }
      });
  } catch (error) {}
  return res;
};
export const post = async (url: string, data: any) => {
  let res;
  try {
    await axios
      .post(urlConfig + url, data)
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        //Expired/not valid token
        if (err.response.status === 402) {
          window.location.href = "/login";
        } else {
          throw err;
        }
      });
  } catch (error) {
    throw error;
  }
  return res;
};

export const put = async (url: string, data: any) => {
  let res;

  try {
    await axios
      .put(urlConfig + url, data)
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        //Expired/not valid token
        if (err.response.status === 402) {
          window.location.href = "/login";
        } else {
          throw err;
        }
      });
  } catch (error) {}
  return res;
};

export const destroy = async (url: string) => {
  let res;

  try {
    await axios
      .delete(urlConfig + url)
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        //Expired/not valid token
        if (err.response.status === 402) {
          window.location.href = "/login";
        } else {
          throw err;
        }
      });
  } catch (error) {}
  return res;
};
