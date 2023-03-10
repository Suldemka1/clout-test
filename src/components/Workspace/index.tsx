import Input from "../../components/Input";
import ChatDialog from "../ChatDialog";
import Header from "../Header";
import { IWorkspace } from "./interface";

const Workspace = (params: IWorkspace) => {
  return (
    <div className="chat__workspace">
      <Header chatTitle="Чат дубайский" />
      <ChatDialog messages={params.messages} />
    </div>
  );
};

export default Workspace;
