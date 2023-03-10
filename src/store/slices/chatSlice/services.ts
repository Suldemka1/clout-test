import { createAsyncThunk } from "@reduxjs/toolkit";

export const getChatList: any = createAsyncThunk(
  "chats/getChatList",
  async () => {
    const response = await fetch(
      "https://api.lenzaos.com/test/chat.get?offset=0&limit=20"
    )
      .then((res) => res.json())
      .then((res) => res.response);
    return response;
  }
);
