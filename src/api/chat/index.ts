import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";
import axios from "axios";

export const getChatList1 = () => {
    return wrapper("get", URLS.LIST)
}

export const getChatList = () => {
    return axios.get("https://api.lenzaos.com/test/chat.get?offset=0&limit=20")
}