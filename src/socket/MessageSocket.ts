import { Socket, Server } from "socket.io";
import FilterMessage from "../helpers/FilterMessage";

export const Message = (io: Server, socket: Socket) => {
    function SendMessage(message: string, room: string) {
        const newMessage = FilterMessage(message);
        if (room === '')
            socket.emit('receive-message-from-room', newMessage);
        else {
            socket.emit('receive-message-from-room', newMessage);
            socket.to(room).emit('receive-message-from-room', newMessage);
        }
    }
    socket.on('message:send-message', SendMessage);
}