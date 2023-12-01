import { URL_API_IP } from "@env";
import axios from "axios";

const ChatService = () => {

    async function startChat(sendUserId, receiveUserId) {
        try {
            const response = await axios
                .get(`${URL_API_IP}chat/start?sendUserId=${sendUserId}&receiveUserId=${receiveUserId}`)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async function loadChats(userId) {
        try {
            const response = await axios.get(`${URL_API_IP}chat/list?id=${userId}`)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    return {
        startChat,
        loadChats
    }
}

export default ChatService
