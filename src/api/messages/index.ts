import axios from "axios";

export const getMessages = (id: string) => {
  return axios.get(
    `https://api.lenzaos.com/test/message.get?chat_id=${id}&offset=0&limit=20`
  );
};
