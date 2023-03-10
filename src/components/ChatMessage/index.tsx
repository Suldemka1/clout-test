import { MessageTime } from "../../functions/MessageTime";
import { IMessage } from "../../models/IMessage";
import { Avatar } from "../Avatar";
import "./message.scss";

const ChatMessage = ({ id, created_at, user, message, is_new }: IMessage) => {
  const time = new MessageTime();
  const setAvatar = () => {
    try {
      return <Avatar src={user.avatar} size="sm" />;
    } catch (e) {
      return <Avatar src="/avatar1.png" size="sm" />;
    }
  };

  return (
    <div className="message-container">
      <div
        className={
          user.you ? "message__you message" : "message__member message"
        }
      >
        <div className="message__avatar">{user.you ? <></> : setAvatar()}</div>
        <div className="message__content">
          {user.you ? (
            <></>
          ) : (
            <p className="message__content__name">
              {user.name} {user.surname}
            </p>
          )}
          <div className="message__content__message">
            {message}
            <div className="message__content__date">
              <p className="">{time.timeConverter(created_at)}</p>
              {user.you && !is_new && <img src="/seen.svg" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NextMessage = ({
  id,
  created_at,
  user,
  message,
  is_new,
}: IMessage) => {
  const time = new MessageTime();
  return (
    <div className="message-container">
      <div
        className={
          user.you ? "message__you message" : "message__member message"
        }
      >
        <div className="message__avatar"></div>
        <div className="message__content">
          <p className="next-message__content__message">
            {message} {time.timeConverter(created_at)}
            {user.you && !is_new && <img src="/seen.svg" />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
