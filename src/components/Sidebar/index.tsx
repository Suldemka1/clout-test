import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageTime } from "../../functions/MessageTime";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  IChat,
  IChatInitialState,
  ILastMessage,
} from "../../store/slices/chatSlice";
import { getChatMessages } from "../../store/slices/messageSlice/services";
import { Avatar } from "../Avatar";
import "./chatlist.scss";
import { IChatList } from "./interface";

export interface IChatBrief {
  id: string;
  avatar: string;
  title: string;
  last_message: ILastMessage;
  count_unread: number;
}

const ChatListItem = ({
  id,
  avatar,
  title,
  last_message,
  count_unread,
}: IChatBrief) => {
  const location = useLocation();
  let query = location.search.split("?chatId=")[1];

  const navigate = useNavigate();
  const time = new MessageTime();
  const messages = useAppSelector((state) => state.messages);
  const dispatch = useAppDispatch();

  function handleClick() {
    query = location.search.split("?chat_id=")[1];
    dispatch(getChatMessages(query));
    navigate(`/?chat_id=${id}`);
  }

  useEffect(() => {}, []);

  const setAvatar = () => {
    try {
      return <Avatar src={avatar} size="md" />;
    } catch (e) {
      console.error(e);
      return <Avatar src="/avatar1.png" size="md" />;
    }
  };
  return (
    <div className="chat-list__item" onClick={() => handleClick()}>
      {setAvatar()}

      <div className="chat-list__item-content">
        <div className="chat-list__item-content__header">
          <p className="chat-list__item-content__header-name">
            {title.length > 10 ? title.substring(0, 10) + "..." : title}
          </p>
          <p className="chat-list__item-content__header-time">
            {time.timeConverter(last_message.created_at)}
          </p>
        </div>
        <div className="chat-list__item-content__message">
          <p>
            {last_message.message.length > 20
              ? last_message.message.substring(0, 30) + "..."
              : last_message.message}
          </p>
        </div>
      </div>
    </div>
  );
};

const Sidebar = (params: IChatList) => {
  return (
    <div className="chat-list">
      <div className="chat__header">All chats</div>
      {params.chats.response != null &&
        params.chats.response.map((item: IChatBrief) => {
          return (
            <ChatListItem
              key={item.id}
              id={item.id}
              title={item.title}
              avatar={item.avatar}
              last_message={item.last_message}
              count_unread={item.count_unread}
            />
          );
        })}
    </div>
  );
};

export default Sidebar;
