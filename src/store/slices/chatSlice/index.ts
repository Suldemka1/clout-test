import { createSlice } from "@reduxjs/toolkit";
import { getChatList } from "./services";

export interface IUser {
  id: string;
  name: string;
  surname: string;
  avatar: string;
}

export interface ILastMessage {
  created_at: number;
  user_id: string;
  user_name: string;
  user_surname: string;
  you: boolean;
  message: string;
}

export interface IChat {
  id: string;
  title: string;
  avatar: string;
  private: boolean;
  last_message: ILastMessage;
  count_unread: number;
  users: [IUser];
}

export interface IChatInitialState {
  response: [IChat];
  status: string;
}

const initialState = {
  response: [],
  status: "pending",
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},

  extraReducers: {
    [getChatList.pending]: (state: any, action: any) => {
      state.response = [];
      state.status = "pending";
    },
    [getChatList.fulfilled]: (state: any, action: any) => {
      state.response = action.payload;
      state.status = "fulfilled";
    },
  },
});

export const {} = chatsSlice.actions;
export default chatsSlice.reducer;
