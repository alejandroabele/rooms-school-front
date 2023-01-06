import { DateTime } from "luxon";
const parseToUsFormat = (date: string) => {
  return DateTime.fromISO(date).toFormat("yyyy-MM-dd");
};
const getCurrentDatetime = () => {
  return DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss");
};
const parseToLocalFormat = (date: string) => {
  return DateTime.fromISO(date).toFormat("dd/MM/yyyy");
};
export { parseToUsFormat, getCurrentDatetime, parseToLocalFormat };
