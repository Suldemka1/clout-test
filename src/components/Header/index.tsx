import { IHeader } from "./interface";

const Header = (params: IHeader) => {
  return (
    <div className="chat__header">
      <img src="/chat.svg" />
      {params.chatTitle}
    </div>
  );
};

export default Header;
