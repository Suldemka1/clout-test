import {
  Fragment,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import ChatMessage, { NextMessage } from "../../components/ChatMessage";
import { MessageTime } from "../../functions/MessageTime";
import { IMessage } from "../../models/IMessage";
import { IChatDialog } from "./interface";
import "./index.scss";
import Input from "../Input";
import { DateMessage } from "../Messages/SystemMessage";

const ChatDialog = (params: IChatDialog) => {
  const time = new MessageTime();
  const ref: MutableRefObject<any> = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log(params.messages.response?.slice().reverse());
  }, []);
  return (
    <div ref={ref} className="chat__dialog">
      {params.messages.response
        ?.slice()
        .reverse()
        .map((item: IMessage, index, array) => {
          if (index != 0 && array[index - 1].user.id === item.user.id) {
            return (
              <NextMessage
                key={item.id}
                id={item.id}
                created_at={item.created_at}
                user={{
                  id: item.user.id,
                  name: item.user.name,
                  surname: item.user.surname,
                  avatar: item.user.avatar,
                  you: item.user.you,
                }}
                message={item.message}
                is_new={item.is_new}
              />
            );
          } else {
            return (
              <>
                {index != 0 &&
                  time.dateConverter(item.created_at) !=
                    time.dateConverter(array[index - 1].created_at) && (
                    <DateMessage date={time.dateConverter(item.created_at)} />
                  )}
                <div key={item.id} className="new-sender">
                  <ChatMessage
                    key={item.id}
                    id={item.id}
                    created_at={item.created_at}
                    user={{
                      id: item.user.id,
                      name: item.user.name,
                      surname: item.user.surname,
                      avatar: item.user.avatar,
                      you: item.user.you,
                    }}
                    message={item.message}
                    is_new={item.is_new}
                  />
                </div>
              </>
            );
          }
        })}
      <Input />
    </div>
  );
};

export default ChatDialog;
