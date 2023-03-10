import { FC, useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Workspace from "../../components/Workspace";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IPage } from "../../interface/page";
import { IChatInitialState } from "../../store/slices/chatSlice";
import { getChatList } from "../../store/slices/chatSlice/services";
import { getChatMessages } from "../../store/slices/messageSlice/services";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const { title } = props;
  const location = useLocation();
  let query = location.search.split("?chatId=")[1];
  const chats = useAppSelector<any>((state) => state.chats);
  const messages = useAppSelector((state) => state.messages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChatList());
    dispatch(getChatMessages(query));
  }, [query]);

  return (
    <div className="App">
      <div className="chat__page">
        {chats.status === "fulfilled" && <Sidebar chats={chats} />}
        {messages.status === "fulfilled" && (
          <Workspace chatTitle={"Дубайский чат"} messages={messages} />
        )}
      </div>
    </div>
  );
};
