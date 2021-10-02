import { Socket, Server } from "socket.io";
import { Friend } from "./FriendSocket";
import { Message } from "./MessageSocket";
import {Room} from './RoomSocket';

export default function SocketIO(io: Server) {
    io.on('connection', (socket: Socket) => {
        Message(io, socket);
        Friend(io, socket);
        Room(io, socket);
    })
}