import { loginPath } from "../constants/backendUrl";
import { post } from "../utils/fetch";

type LoginType = {
  username: string;
  password: string;
};
const loginService = async ({ username, password }: LoginType) => {
  return await post(loginPath(), { username, password });
};

export { loginService };
