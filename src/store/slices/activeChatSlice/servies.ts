import { createAsyncThunk } from "@reduxjs/toolkit";

export const activeChat = createAsyncThunk("activeChat/activeChat", async () => {
  const response = fetch(``);

  return response;
});
