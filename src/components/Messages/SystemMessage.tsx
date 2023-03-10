import "./messages.scss";
const SystemMessage = () => {
  return <div className="new-messages">Новые сообщения</div>;
};

const ChatMessage = () => {
  return <div></div>;
};

const MyMessage = (params: any) => {
  return <div>{params.message}</div>;
};

const NewMessage = (params: { date: string }) => {
  return <div className="new_message">{params.date}</div>;
};

const DateMessage = (params: { date: string }) => {
  return (
    <div className="date__message">
      <p>{params.date}</p>
    </div>
  );
};

export { SystemMessage, ChatMessage, NewMessage, DateMessage };
