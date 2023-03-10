import { IMessage } from "../../models/IMessage";
import { IMessages } from "../../store/slices/messageSlice";

export interface IWorkspace {
  chatTitle: string;
  messages: IMessages;
}
