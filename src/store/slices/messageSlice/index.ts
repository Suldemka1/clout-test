import { createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../../../models/IMessage";
import { getChatMessages } from "./services";

export interface IMessages {
  status: string;
  response: [IMessage] | undefined | [];
}

const initialState: IMessages = {
  response: undefined,
  status: "pending",
};

const messageSlice = createSlice({
  name: "messageSlice",
  initialState,
  reducers: {
    //@ts-ignore
    sendMessage: (
      state: { response: [IMessage] },
      action: { payload: IMessage }
    ) => {
      if (state.response != undefined) {
        state.response.unshift(action.payload);
        console.log(action.payload)
      }
    },
  },

  extraReducers: {
    [getChatMessages.pending]: (state: IMessages, action: any) => {
      state.response = [];
      state.status = "pending";
    },
    [getChatMessages.fulfilled]: (state: any, action: any) => {
      state.response = action.payload;
      state.status = "fulfilled";
    },
  },
});

export const { sendMessage } = messageSlice.actions;
export default messageSlice.reducer;
