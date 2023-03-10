import { IChat } from "../../store/slices/chatSlice";

export interface IChatList {
  chats: {
    response: [IChat];
  };
}
