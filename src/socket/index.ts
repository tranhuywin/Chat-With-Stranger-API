import { Socket, Server } from "socket.io";
import FilterMessage from "../helpers/FilterMessage";

export default function SocketIO(io: Server) {
    io.on('connection', (socket: Socket) => {

        socket.on('send-message', (message, room) => {

            const newMessage = FilterMessage(message);
            if (room === '')
                socket.emit('receive-message-from-room', newMessage);
            else
                socket.to(room).emit('receive-message-from-room', newMessage);
        })

        socket.on('join-room', (room) => {
            socket.join(room);
        })
    })
}