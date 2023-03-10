import { createAsyncThunk } from "@reduxjs/toolkit";

export const getChatMessages: any = createAsyncThunk(
  "messages/getChatMessages",
  async (id: string | undefined = undefined) => {
    const response = fetch(
      `https://api.lenzaos.com/test/message.get?chat_id=${id}&offset=0&limit=20`
    )
      .then((res) => res.json())
      .then((res) => res.response);
    return response;
  }
);